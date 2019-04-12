<template>
  <div>
    <h4 class="card-header">Вход в систему: </h4>
    <login-form :user-login="userLogin"/>
  </div>
</template>

<script>
  export default {
    name: "LoginPage",
    components: {
      "login-form": () => import('@/components/LoginForm')
    },
    data: () => ({
      userLogin: null,
      ticket: null
    })
  }
</script>

<style scoped>

</style>
