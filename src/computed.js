var username = document.querySelector('[name="username"]')
var password = document.querySelector('[name="password"]')
var form = document.querySelector('[name="form"]')

var state = {}

var onKeyup = event => {
  var value = event.target.value
  var name = event.target.name

  state[name] = value
}

var onSubmit = () => {
  event.preventDefault()
  console.dir(state)
}

username.addEventListener('keyup', onKeyup)
password.addEventListener('keyup', onKeyup)
form.addEventListener('submit', onSubmit)
