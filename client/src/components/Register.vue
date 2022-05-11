<template>
  <v-container width="100%" height="100%">
    <h1>Register</h1>
    <v-card-title register>
      <v-card width="100%">
        <form
          name="songnbook"
          autocomplete="off">
          <v-text-field
            label="Name"
            v-model="name"
          ></v-text-field>
          <br>
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          @click="register">
          Register
        </v-btn>
      </v-card>
    </v-card-title>
  </v-container>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      name: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({

          email: this.email,
          password: this.password,
          name: this.name
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }

}
</script>

<style scoped>

</style>
