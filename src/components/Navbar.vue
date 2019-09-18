<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark custom-bg-dark">
      <router-link to="/" class="navbar-brand">
        <img
          style="max-height:25px"
          alt="Vue logo"
          src="../assets/logo.png"
        />&nbsp; Task Manager
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact>
              Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tasks" class="nav-link">
              Tasks
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">
              Register
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              Login
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">{{
              this.$store.state.username ? this.$store.state.username : "user"
            }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media screen and (max-width: 767px) {
  .navbar-collapse {
    width: 100%;
    position: fixed;
    top: 75px;
    left: 0;
    padding-left: 20px;
    padding-bottom: 5px;
    background: #373f46;
  }
}
</style>
