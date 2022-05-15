<template>
  <keep-alive>
    <router-view/>
  </keep-alive>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
}
</script>

<style>
html,body{padding: 0; margin: 0; height: 100%; overflow: auto;}
</style>
