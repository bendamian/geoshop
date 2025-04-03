<!-- components/AppNavbar.vue -->
<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item">
        <strong>GeoShop</strong>
      </RouterLink>
      <a
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-menu"
        @click="$emit('toggle-mobile')"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="navbar-menu" :class="{ 'is-active': showMobileMenu }">
      <div class="navbar-end">
        <RouterLink to="/product" class="navbar-link">Products</RouterLink>
        <RouterLink to="/about" class="navbar-link">About</RouterLink>
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
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      showMobileMenu: false

    }
  }
}
</script>
