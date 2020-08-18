<template>
  <div class="home">
    <!-- <Nav /> -->
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
    // Nav
  }
}
</script>
