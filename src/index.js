console.clear()
const box = document.querySelector('.box')
const buttonRotate = document.querySelector('.button-rotate')
const buttonColor = document.querySelector('.button-color')
const buttonShape = document.querySelector('.button-shape')
buttonRotate.addEventListener('click', () => {
  box.classList.toggle('rotate')
})
buttonColor.addEventListener('click', () => {
  box.classList.toggle('color')
})
buttonShape.addEventListener('click', () => {
  box.classList.toggle('shape')
})
