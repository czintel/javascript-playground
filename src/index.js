const form = document.querySelector('[data-form]')
const input = document.querySelector('[name="uppercase-text"]')
const output = document.querySelector('[data-output]')

form.addEventListener('submit', event => {
  event.preventDefault()
  output.innerText = input.value.toUpperCase()
  input.value = ''
  input.focus()
})
