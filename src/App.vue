<template>
  <div id="app">
    <header style="background-color: #0A2B4B; height: 50px; width: 100% "></header>
    <fretboard style="width: 1000px"></fretboard>
    <ui></ui>
    <Sequencer></Sequencer>
  </div>
</template>

<script>

  import fretboard from "@/components/fretboard";
  import ui from "@/components/ui";
  import Sequencer from "@/components/guitarRoll/Sequencer";

  export default {
    name: 'App',
    components: {
      Sequencer,
      fretboard,
      ui
    }
  }
</script>

<style>
  * {
    margin: 0;
  }

  #app {
    position: relative;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: lightslategrey;
    height: 1000px;
  }
</style>
