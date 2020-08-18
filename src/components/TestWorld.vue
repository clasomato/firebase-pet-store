<template id ="TestWorld">
  <h1>{{ message }}</h1>
</template>

<script>
console.log('working')

export default {
  name: 'TestWorld',
  props: {
    msg: String
  },
  data () {
    return {
      message: 'AYHHHHHH Hello there fine sir'
    }
  }
}
</script>

<style scoped lang="scss">
  h1 {
    color: purple
  }
</style>
