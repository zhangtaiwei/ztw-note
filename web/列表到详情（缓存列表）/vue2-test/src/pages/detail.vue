<template>
  <div style="flex: 1; height: 100%; overflow: auto; box-sizing: border-box;">
    详情

    <div v-for="i in 1000" :key="i">
      {{ i }} 详情
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>
