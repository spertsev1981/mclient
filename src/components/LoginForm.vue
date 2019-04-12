<template>
  <div>
    <div>
      <label>Имя пользователя:</label>
      <input
        type="text"
        v-model.trim="logInParams.username"
        name="username">
    </div>
    <div>
      <label>Пароль:</label>
      <input
        type="text"
        v-model.trim="logInParams.password"
        name="password">
    </div>
    <div style="margin-bottom: 0.5em;">
      <button
        class="btn btn-secondary btn-block"
        type="button"
        @click="logIn">Войти
      </button>
    </div>
  </div>
</template>

<script>
  import axios from '@/axios.js';

  export default {
    name: "LoginForm",
    props: {
      userLogin: null
    },
    data: () => ({
      logInParams: {
        username: null,
        password: null
      },
      ticket: null
    }),
    mounted() {
      this.logInParams.username = this.userLogin;
    },
    methods: {
      logIn() {

        fetch('http://213.128.208.33:8080/alfresco/service/api/login', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.logInParams)
        }).then(response => {
          console.log(response.headers.get('Content-Type'));
          console.log(response.headers.get('Date'));

          console.log(response.status);
          console.log(response.statusText);
          console.log(response.type);
          console.log(response.url);

        })
          .catch(error => console.log("error", error));

      }
    }
  }
</script>

<style scoped>

</style>
