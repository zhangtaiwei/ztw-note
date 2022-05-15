<template>
  <div class="page-box">

    <nav-bar title="列表页"></nav-bar>

    <div class="list-box" ref="containerRef">
      <div
        class="term"
        v-for="i in 1000"
        :key="i"
        @click="$router.push('detail')"
      >
        {{ i }} 当前是列表页，点击进入详情页。
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
  beforeRouteEnter(to, from, next) {
    if (from.name === 'detail') {
      to.meta.canKeep = true;
    } else {
      to.meta.canKeep = false;
    }
    next();
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
  activated() {
    // 窗口滚动
    // if (this.$route.meta.canKeep) {
    //   window.scrollTo({
    //     left: 0,
    //     top: this.scrollTo,
    //   })
    // } else {
    //   window.scrollTo({
    //     left: 0,
    //     top: 0,
    //   })
    // }


    // 元素区域滚动
    if (this.$route.meta.canKeep) {
      this.containerEl.scrollTo({
        left: 0,
        top: this.scrollTo,
      })
    } else {
      this.containerEl.scrollTo({
        left: 0,
        top: 0,
      })
      this.scrollTo = 0
    }
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
