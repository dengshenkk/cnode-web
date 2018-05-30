<template>
  <div id="app">
    <ds-header></ds-header>
    <router-view/>
  </div>
</template>

<script>
import DsHeader from '@/components/dsHeader'
export default {
  name: 'App',
  components: {DsHeader}
}
</script>

<style>
#app {}
</style>
