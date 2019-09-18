<template>
  <div class="jumbotron custom-bg-darker">
    <h1 class="display-4">MEVN Stack Task Manager</h1>
    <p class="lead">
      This is a sample task manager application built with MongoDB, ExpressJS,
      VueJS, and NodeJS technologies.
    </p>
    <hr class="my-4" />
    <p>Click below to begin managing tasks for users</p>
    <router-link to="/tasks" class="btn btn-success btn-lg" role="button"
      >Tasks</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
