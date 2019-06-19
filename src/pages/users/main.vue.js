/* eslint-disable no-console */
// eslint-disable-next-line no-undef
new Vue({
  el: '#app',

  data() {
    return {
      form: {
        name: null,
        age: null,
        email: null
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
      } else {
        console.log('❌ Invalid form')
      }
    }
  }
})
