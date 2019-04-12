<template>
  <div class="card">
    <h4 class="card-header">Документы (Всего: {{ totalItems }}): </h4>
  </div>
</template>

<script>
  export default {
    name: "DocumentsPage",
    data: function () {
      return {
        totalItems: 0
      }
    }
  }
</script>

<style scoped>

</style>
