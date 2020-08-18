<template id ="NewsSection">
  <h1>{{ message }}</h1>
</template>

<script>
console.log('working')

export default {
  name: 'NewsSection',
  props: {
    msg: String
  },
  data () {
    return {
      message: 'message'
    }
  }
}
</script>

<style scoped lang="scss">
  h1 {
    color: purple
  }
</style>
