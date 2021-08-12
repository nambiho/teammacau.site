<template>
  <top-menu />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopMenu from '@/components/Header/TopMenu.vue'

export default defineComponent({
  name: 'App',
  components: {
    TopMenu
  }
})
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";

body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  min-width: 400px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  // font-weight: 500;
}
</style>
