<template>
  <div>
    <main id="app">
      <router-view/>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        userTicket: null,
        userLogin: null,
      }
    }
  }
</script>
