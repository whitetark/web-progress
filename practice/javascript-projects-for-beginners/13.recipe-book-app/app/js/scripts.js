const API_KEY = '275d58779ccf4e22af03e792e8819fff'
const menu = document.getElementById('menu')

async function getMenu() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  )
  const data = await response.json()
  return data.recipes
}

function displayMenu(recipes) {
  menu.innerHTML = ''
  recipes.forEach((recipe) => {
    const div = document.createElement('div')
    div.classList.add('recipe')
    const img = document.createElement('img')
    img.src = recipe.image
    img.alt = 'recipe image'

    h3 = document.createElement('h3')
    h3.innerText = recipe.title

    const p = document.createElement('p')
    p.innerHTML = `
        <span>Ingredients:</span> ${recipe.extendedIngredients
          .map((ingredient) => ingredient.original)
          .join(', ')}
    `

    const a = document.createElement('a')
    a.href = recipe.sourceUrl
    a.innerText = 'View Recipe'

    div.appendChild(img)
    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(a)
    menu.appendChild(div)
  })
}

async function init() {
  const recipes = await getMenu()
  displayMenu(recipes)
}

init()
