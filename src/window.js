/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

// Функция, которая при вызове может быть вызвана только по истечении определенного времени
var debounce = (fn, ms) => {
  let timeout

  return function(args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(args), ms)
  }
}

var onResize = event => {
  console.log(event, window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', debounce(onResize, 3000))
