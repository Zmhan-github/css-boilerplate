var btn = document.querySelector('#modal-button-submit')
var textWrapper = document.querySelector('.modal-cliced-text')

var once = (fn, ...args) => {
  let called = false
  return function() {
    if (!called) {
      called = true
      return fn(...args)
    }
  }
}

var onClick = (text, time) =>
  textWrapper.insertAdjacentText('beforebegin', `${text} ${time}`)

btn.addEventListener(
  'click',
  once(onClick, 'Спасибо за подписку! Текущее время: ', new Date(Date.now()))
)
