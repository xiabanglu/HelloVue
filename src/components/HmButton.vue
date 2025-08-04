<template>
  <button @click="handleClick" class="hm-button">通用按钮</button>
</template>
<script>
export default {
  name: "HmButton",
  methods: {
    handleClick() {
      alert('我被点击了')
    }
  }
}
</script>
<style>
.hm-button {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  background-color: green;
  border: none;
  color: white;
  vertical-align: middle;
  cursor: pointer;
}
</style>