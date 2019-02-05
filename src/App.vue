<template>
  <div id="app">
    <b-link href="#/"><img src="./assets/pdm-horiz.png"></b-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  color: #0b2947;
  text-align: center;
  margin-top: 2rem;
}
</style>
