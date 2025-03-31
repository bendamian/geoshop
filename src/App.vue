<template>
  <div id="wrapper">
    <!-- Navbar -->
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <!-- Brand/Logo linking to Home -->
        <RouterLink to="/" class="navbar-item">
          <strong>GeoShop</strong>
        </RouterLink>

        <!-- Burger menu (for mobile) -->
        <a
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
          @click="showMobileMenu = !showMobileMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <!-- Navbar menu items -->
      <div class="navbar-menu" id="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
        <div class="navbar-end">
          <!-- Navigation Links -->
          <RouterLink to="/product" class="navbar-link">Products</RouterLink>
          <RouterLink to="/about" class="navbar-link">About</RouterLink>

          <!-- Auth and Cart Buttons -->
          <div class="navbar-item">
            <div class="buttons">
              <RouterLink to="/login" class="button is-light">Login</RouterLink>
              <RouterLink to="/register" class="button">Register</RouterLink>
              <RouterLink to="/cart" class="button is-success">
                <span class="icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
                <span>Cart</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main content area where routed components will render -->
    <section class="section">
      <RouterView />
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p class="has-text-centered">&copy; 2025 GeoShop. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>

export default{
  name: 'App',
  data() {
    return {
      // Add your app-specific data here
      showMobileMenu: false,
    }
  },

}
</script>

<!-- Scoped styling placeholder -->
<style scoped>
/* Add your component-specific styles here */
</style>
