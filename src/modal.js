const btn = document.getElementById('open')
const close = document.getElementById('close')
const modal = document.getElementById('modal')

btn.addEventListener('click', event => {
  event.preventDefault()
  modal.style.display = 'block'
})

close.addEventListener('click', event => {
  event.preventDefault()
  modal.style.display = 'none'
})
