<template>
  <div id="app">
    <approve></approve>
  </div>
</template>

<script>
import approve from './components/approve/approve.vue'
export default {
  name: 'app',
  components: {
    approve: approve
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body,html {
  height: 100%;
  width: 100%;
}
body {
  overflow-x: hidden;
  background-color: #fbf9fe;
}
#app {
  height: 100%;
}
</style>
