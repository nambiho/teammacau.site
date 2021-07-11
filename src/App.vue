<template>
  <Menu />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Menu } from '@/components/Header'

export default defineComponent({
  name: 'App',
  compoentns: {
    Menu
  }
})
</script>

<style src="@/assets/scss/global.scss" lang="scss" />
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
