<template>
  <div id="listEl" ref="containerRef" style="flex: 1; height: 100%; overflow: auto; box-sizing: border-box;">
      列表

    <div v-for="i in 1000" :key="i">
      {{ i }} 列表
    </div>

  </div>
</template>

<script>

/**
 * 使用的是区域滚动。
 *
 *
 * 自定义判断：
 * 我们这里是在 beforeRouteEnter 指定某个页面返回时候需要滚动到列表原先的位置。
 *
 *
 * 路径判断：
 * 我们也可以使用路由路径规则来判断是否需要滚动到列表原先的位置。
 * 例如：
 * /home
 * /page/list
 * /page/list/detail
 * 使用 / 进行分割成数组，在 beforeRouteEnter 判断路径数组长度是否是返回。 from 的路径要是比 to 的路径长就是返回，否则是前进。
 *
 *
 * 总结：
 * 自定义判断会更好
 * 路径判断一定要遵守路径层级来，要是不遵守就容易出问题。
 *
 *
 *
 * */



export default {
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
        console.log('list onscroll')
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
