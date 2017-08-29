<template>
  <div>
   file
  </div>
</template>

<script>

export default {
  data () {
    return {
      a: 1
    }
  },
  created () {
    console.log('created')
  },
  activated () {
    console.log('activated')
  },
  deactivated () {
    console.log('deactivated')
  }
}
</script>

<style scoped>

</style>
