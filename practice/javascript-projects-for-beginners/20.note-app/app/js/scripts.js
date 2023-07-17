const add = document.getElementById('add')
const grid = document.querySelector('.notes')

function getNotes() {
  return JSON.parse(localStorage.getItem('notes')) || []
}

getNotes().forEach((note) => {
  showNote(note.id, note.content)
})

function showNote(id, content) {
  const textarea = document.createElement('textarea')
  textarea.placeholder = "Your note..."
  textarea.value = content

  textarea.addEventListener('dblclick', () => {
    const warning = confirm('Are you deleting this note?')
    if (warning) {
      deleteNote(id, textarea)
    }
  })

  textarea.addEventListener('input', () => {
    updateNote(id, textarea.value)
  })

  grid.insertBefore(textarea, add)
}

function createNote() {
  const notes = getNotes()
  const note = {
    id: Math.floor(Math.random() * 10000),
    content: '',
  }
  showNote(note, note.content)
  notes.push(note)

  saveNotes(notes)
}

function updateNote(id, content) {
  const notes = getNotes()
  const target = notes.filter((note) => note.id == id)[0]
  target.content = content
  saveNotes(notes)
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id)
  saveNotes(notes)
  grid.removeChild(element)
}

function saveNotes(notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

add.addEventListener('click', createNote)
