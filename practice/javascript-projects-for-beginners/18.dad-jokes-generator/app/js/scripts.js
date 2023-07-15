const jokeDiv = document.getElementById('joke')
const button = document.getElementById('action')

button.onclick = async function () {
  button.disabled = true
  button.innerText = 'Loading...'
  const url = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'
  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'xWoVrB37xoGVr5w1Kd7uCA==VEgMz6FgcFKuJ9ks',
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    jokeDiv.innerText = result[0].joke
    jokeDiv.style.display = 'block'
    button.disabled = false
    button.innerText = 'Tell Me A Joke'
  } catch (error) {
    jokeDiv.innerText = 'An error happened, try again later'
    jokeDiv.style.display = 'block'
    console.error(error)
  }
}
