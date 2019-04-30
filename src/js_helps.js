/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/*
  get Length of object
*/

var arr = [1, 2, 3]

var obj = { a: 1, b: 2, c: 3 }

var length = Object.keys(obj).length

/*
    Iterate Over an Object
*/

var username = {
  first: 'John',
  last: 'Doe',
  marat: {
    doble: 1
  }
}

for (const u in username) {
  if (username.hasOwnProperty(u)) {
    // console.log(u, username[u])
  }
}

for (const u of Object.keys(username)) {
  //   console.log(u, username[u])
}

// ES7
// Object.entries(username).forEach(([key, value]) => console.log(key, value))

/*
    Convert Object to Array
*/

var result = Object.keys(username).map(key => [key, username[key]])

// console.log(result)

// console.log(Object.entries(username))

/*
    Check if Property is in Object
    Проверьте, есть ли свойство в объекте
*/

const user = {
  name: 'John',
  address: {
    street: 'Main',
    city: 'Moscow'
  }
}

var property = user.hasOwnProperty('address')
// console.log(property)

/*
    Prevent Object Properties from Being Added
    Запретить добавление свойств объекта
*/

const userFrost = {
  name: 'John',
  email: 'regeon-93@inbox.ru'
}

var defaultUser = {
  name: '',
  email: '',
  subscribed: true
}

var userData = { ...defaultUser, ...userFrost }

console.log(userData)

// console.log(Object.getOwnPropertyDescriptors(userFrost))

// userFrost.password = 'asdasd'

// console.log(userFrost)
