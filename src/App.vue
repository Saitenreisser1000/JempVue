<template>
  <div id="app">
    <header style="background-color: #2A9456; height: 50px; width: 100% "></header>
    <fretboard style="width: 1000px"></fretboard>
    <ui></ui>
  </div>
</template>

<script>

  import fretboard from "@/components/fretboard";
  import ui from "@/components/ui";

  export default {
    name: 'App',
    components: {
      fretboard,
      ui
    }
  }
</script>

<style>
  *{
    margin: 0;
  }
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  height: 500px;
}
</style>
