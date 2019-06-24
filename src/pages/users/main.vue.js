/* eslint-disable no-undef */
/* eslint-disable no-console */
// eslint-disable-next-line no-undef

import firebase from '../../firebase'

new Vue({
  el: '#app',

  data() {
    return {
      form: {
        name: null,
        age: null,
        email: null,
        password: null
      }
    }
  },

  computed: {
    nameIsValid() {
      return !!this.form.name
    },

    ageIsValid() {
      return (
        typeof this.form.age === 'number' &&
        this.form.age > 12 &&
        this.form.age < 120
      )
    },

    emailIsValid() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)
    },

    formIsValid() {
      return this.nameIsValid && this.ageIsValid && this.emailIsValid
    }
  },

  methods: {
    submitForm() {
      if (this.formIsValid) {
        console.log('📝 Form Submitted', this.form)
        firebase
          .register(this.form.name, this.form.email, this.form.password)
          .then(response => {
            console.log(response)
          })
      } else {
        console.log('❌ Invalid form')
      }
    },

    login() {
      if (this.formIsValid) {
        console.log('📝 Form Submitted', this.form)
        firebase
          .login(this.form.email, this.form.password)
          .then(response => {
            localStorage.setItem('isUser', response.user.uid)
          })
          .catch(error => {
            if (error.code === 'auth/wrong-password') {
              alert(error.message)
            }
          })
      } else {
        console.log('❌ Invalid form')
      }
    }
  }
})
