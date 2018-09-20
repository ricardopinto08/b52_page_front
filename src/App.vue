<template>
  <div id="app">
    <router-view/>
    <!-- <pop-up></pop-up> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  background-image: url('assets/images/background.png');
  background-size: cover;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #grey;
  height: 5000px;
  /* margin-top: 60px; */
}
</style>
