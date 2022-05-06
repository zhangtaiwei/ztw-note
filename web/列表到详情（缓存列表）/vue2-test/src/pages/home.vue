<template>
  <div id="listEl" ref="containerRef" style="flex: 1; height: 100%; overflow: auto; box-sizing: border-box;">
    首页

    <div v-for="i in 1000" :key="i">
      {{ i }} 首页
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTo: 0,
    }
  },
  beforeRouteEnter(to, from, next) {
    if (from.name === 'list') {
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
        console.log('home onscroll')
        this.scrollTo = this.containerEl.scrollTop
      }
    })
  },
  activated() {
    console.log('list activated')
    // 窗口进行滚动
    // if (this.$route.meta.canKeep) {
    //   window.scrollTo({
    //     left: 0,
    //     top: 100,
    //   })
    // } else {
    //   window.scrollTo({
    //     left: 0,
    //     top: 0,
    //   })
    // }


    // 元素进行滚动
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
}
</script>

<style scoped>

</style>
