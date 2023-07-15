const word = document.getElementById('word')
const meaning = document.getElementById('meaning')
const title = document.getElementById('title')
const meaningDiv = document.querySelector('.meaning')

async function getMeaning(word) {
  try {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const result = await fetch(url).then((res) => res.json())

    meaningDiv.style.display = 'block'
    if (result.title) {
      title.innerText = word
      meaning.innerText = 'N/A'
    } else {
      title.innerText = result[0].word
      meaning.innerText = result[0].meanings[0].definitions[0].definition
    }
  } catch (error) {
    console.log(error)
  }
}

word.addEventListener('keyup', (event) => {
  if (event.target.value && event.key === 'Enter') {
    getMeaning(event.target.value)
  }
})
