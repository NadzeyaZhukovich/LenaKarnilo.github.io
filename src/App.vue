<template>
  <div class="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
