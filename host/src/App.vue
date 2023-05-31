<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Info from "info/Info";
import Left from "left/Left";
import Right from "right/Right";

</script>

<template>

  
  <div style="display: flex; flex-direction: column; justify-content: space-between; padding: 50px;">
    <div style="padding: 10px; margin-bottom: 30px; border: 2px solid grey;">
      <Info msg="Info" />
    </div>
    <div style="padding: 10px; margin-bottom: 30px; border: 2px solid grey;">
      <Left msg="Left" />
    </div>
  </div>
  <div style="padding: 10px; margin-bottom: 30px; border: 2px solid grey;">
  <Right msg="Right" />
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
