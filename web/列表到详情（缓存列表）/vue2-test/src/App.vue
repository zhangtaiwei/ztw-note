<template>
  <div style="height: 100%; overflow: auto;">

    <keep-alive>
      <router-view  v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive" />

  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html,body{padding: 0; margin: 0; height: 100%; overflow: auto;}
</style>
