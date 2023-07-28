const search = document.getElementById('search')
const gallery = document.querySelector('.gallery')
const more = document.getElementById('more')

const API_KEY = 'e13ADhtHvAYHsNsY2gjYrBXyanva5Hbr147WCeMiCec'
let page = 1

async function searchImage() {
const prompt = document.getElementById('desc').value
  if (!prompt) {
    return
  }
  if (page === 1) {
    gallery.innerHTML = ''
  }
  fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${prompt}&client_id=${API_KEY}`)
  .then((response) => response.json())
  .then((json) => {
      json.results.map((result) => {
        const item = document.createElement('div')
        item.classList.add('gallery-item')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('gallery-item-img')
        const img = document.createElement('img')
        img.src = result.urls.small
        img.alt = result.alt_description
        imgDiv.appendChild(img)

        const descDiv = document.createElement('div')
        descDiv.classList.add('gallery-item-desc')
        const desc = document.createElement('a')
        desc.href = result.links.html
        desc.innerText = result.alt_description
        descDiv.appendChild(desc)

        item.appendChild(imgDiv)
        item.appendChild(descDiv)
        gallery.appendChild(item)
      })
    })
}

search.addEventListener('click', () => {
  page = 1
  searchImage()
  more.classList.add('active')
})

more.addEventListener('click', () => {
  page++
  searchImage()
})
