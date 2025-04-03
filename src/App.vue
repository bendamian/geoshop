<template>
  <div id="wrapper">
    <AppNavbar />

    <section class="section">
      <RouterView />
    </section>

    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppNavbar,
    AppFooter
  },
  data() {
    return {
      
    }
  }
}
</script>

<!-- Scoped styling placeholder -->
<style scoped>
/* Add your component-specific styles here */
</style>
