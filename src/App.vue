<template>
  <div>
<nav class="navbar navbar-expand-lg  bg-dark">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" to="/" tag="li" active-class="active" exact>
        <a class="nav-link">Home</a>
      </router-link>
      <router-link class="nav-item nav-link" to="/3" tag="li" active-class="active" >
        <a class="nav-link">Home3</a>
      </router-link>
      <router-link class="nav-item nav-link" to="/4" tag="li" active-class="active" >
        <a class="nav-link">Home4</a>
      </router-link>
      <router-link class="nav-item nav-link" to="/about" tag="li" active-class="active">
        <a class="nav-link">About</a>
      </router-link>
    </div>
  </div>
</nav>
<div class="container">
    <router-view></router-view>
</div>
  </div>
</template>


<script>
export default {
};
</script>

<style >
  .active {
    border-bottom: 1px solid red;
  };
</style>
