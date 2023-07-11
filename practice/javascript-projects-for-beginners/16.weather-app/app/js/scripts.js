let searchButton = document.getElementById('search')
const weatherInfo = document.querySelector('.weather-info')
const notFound = document.querySelector('.not-found')

const API_KEY = '2056a022fed151492d9a2e2d577ca0ab'

searchButton.onclick = function () {
  let city = document.getElementById('city').value
  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.cod === '404') {
          weatherInfo.classList.add('hidden')
          notFound.classList.remove('hidden')
          notFound.classList.add('fadeIn')
          return
        }

        notFound.classList.remove('fadeIn')
        notFound.classList.add('hidden')

        const temp = document.getElementById('temp')
        const description = document.getElementById('description')
        const hum = document.getElementById('hum')
        const wind = document.getElementById('wind')
        const image = document.querySelector('.weather-info-img img')

        switch (json.weather[0].main) {
          case 'Clear':
            image.src = 'dist/images/clear.png'
            break

          case 'Rain':
            image.src = 'dist/images/rain.png'
            break

          case 'Snow':
            image.src = 'dist/images/snow.png'
            break

          case 'Clouds':
            image.src = 'dist/images/cloud.png'
            break

          case 'Haze':
            image.src = 'dist/images/mist.png'
            break

          default:
            image.src = ''
        }

        temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`
        description.innerHTML = `${json.weather[0].description}`
        hum.innerHTML = `${json.main.humidity}%`
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`

        weatherInfo.classList.add('fadeIn')
        weatherInfo.classList.remove('hidden')
      })
  }
}
