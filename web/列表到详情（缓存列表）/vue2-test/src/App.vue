<template>
  <div style="display: flex; height: 100%;">
    <div style="width: 300px; ">
      <button @click="toPage('/')">首页</button>
      <button @click="toPage('/list')">列表</button>
      <button @click="toPage('/detail')">详情</button>
    </div>
    <div style="flex: 1; height: 100%; overflow: auto; box-sizing: border-box;  border: 1px solid #eee;">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
    toPage(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
html,body{padding: 0; margin: 0; height: 100%; overflow: auto;}
</style>
