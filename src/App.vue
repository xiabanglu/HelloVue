<template>
  <div class="App">
    <HmHeader></HmHeader>
    <HmMain></HmMain>
    <HmFooter></HmFooter>
    <CodeButton></CodeButton>
  </div>
</template>

<script>
import HmHeader from './components/HmHeader.vue';
import HmMain from './components/HmMain.vue';
import HmFooter from './components/HmFooter.vue';
export default {
  components: {
    HmHeader,
    HmMain,
    HmFooter,
  }
}
</script>

<style>
.App {
  width: 600px;
  height: 700px;
  background-color: #3faac5;
  margin: 0 auto;
  padding: 20px;
}
</style>
