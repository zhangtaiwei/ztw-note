<template>
  <div class="page-box">

    <nav-bar title="详情页"></nav-bar>

    <div class="list-box" ref="containerRef">
      <div class="term" v-for="i in 1000" :key="i">
        {{ i }} 当前是详情页
      </div>
    </div>

    <back-top @click="toUp" v-if="scrollTo > 200"></back-top>

  </div>
</template>

<script>
import navBar from '../components/nav-bar'
import backTop from '../components/back-top'

export default {
  components: {
    navBar,
    backTop,
  },
  data() {
    return {
      scrollTo: 0,
    }
  },
  computed: {
    containerEl() {
      return this.$refs.containerRef
    }
  },
  mounted() {
    this.$nextTick(()=> {
      this.containerEl.onscroll = ()=> { // 记录滚动距离
        this.scrollTo = this.containerEl.scrollTop
      }
    })
  },
  methods: {
    toUp() {
      this.containerEl.scrollTo({
        left: 0,
        top: 0,
      })
    }
  }
}
</script>

<style scoped>
.page-box{flex: 1; display: flex; flex-direction: column; height: 100%; overflow: auto; box-sizing: border-box;}
.list-box{flex: 1; overflow: auto;}
.list-box .term{padding: 10px; border-bottom: 1px solid #ccc; cursor: pointer;}
</style>
