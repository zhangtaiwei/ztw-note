<template>
<div class="nav-bar-box">
  <span class="left-box" @click="$router.back()" v-if="showBack">  返回</span>
  <div class="title">
    {{ title }}
  </div>
</div>
</template>

<script>
export default {
  props: {
    // 标题
    title: {
      type: String
    },
    // 显示返回
    showBack: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.nav-bar-box{position: relative; line-height: 46px; height: 46px; color: #4a4a4a; border-bottom: 1px solid #eee}
.nav-bar-box .left-box{position: absolute; top: 0; left: 0; bottom: 0; padding-left: 10px; cursor: pointer; max-width: 80px;}
.nav-bar-box .title{padding: 0 100px; text-align: center}
</style>
