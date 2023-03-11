const form = document.getElementById('boxed')
function handleForm(event) {
  event.preventDefault()
}
form.addEventListener('submit', handleForm)

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function submitForm() {
  let inputs = []
  let data = []
  inputs.push(document.querySelector('input[name="name"]'))
  inputs.push(document.querySelector('input[name="surname"]'))
  inputs.push(document.querySelector('input[name="email"]'))
  inputs.push(document.querySelector('input[name="password"]'))

  const defaultt = `
    background: none;
    padding-right: 0px;
    border-color: var(--neutral-grayish-blue);
    caret-color: var(--accent-blue);
`
  const error = `
    background: white url(images/icon-error.svg) 95% no-repeat;
    padding-right: 50px;
    border-color: var(--primary-red);
    caret-color: var(--primary-red);
`

  for (let input of inputs) {
    input.style.cssText = defaultt
    let label = document.querySelector(`label[for="${input.id}"]`)
    label.innerHTML = ``

    if (input.value == '') {
      input.style.cssText = error
      input.setAttribute('placeholder', '')
      label.innerHTML = `${input.alt} cannot be empty`
    } else {
      if (input.name == 'email' && !input.value.match(validRegex)) {
        input.style.cssText = error
        input.setAttribute('placeholder', '')

        label.innerHTML = `Looks like this is not an email`
        continue
      }
      data.push({ name: input.name, value: input.value })
      input.setAttribute('placeholder', `${input.alt}`)
    }
  }

  if (data.length == 4) {
    document.getElementById('boxed').reset()
    console.log(data)
  }
}
