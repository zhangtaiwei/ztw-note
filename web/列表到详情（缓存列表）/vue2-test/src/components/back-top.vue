<template>
<div class="back-top-box" @click="$emit('click', $event)">
  <slot>
    UP
  </slot>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.back-top-box{
  position: fixed;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #409eff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 6px 0px;
  cursor: pointer;
  z-index: 5;
  right: 40px;
  bottom: 40px;
}
</style>
