<template>
  <div class="home">
    <!-- Hero section with welcome message -->
    <section class="hero is-primary mb-6">
      <div class="hero-body has-text-centered">
        <h1 class="title mb-6">
          Welcome to Vue.js
        </h1>
        <h2 class="subtitle">
          A progressive, incrementally-adoptable JavaScript framework
        </h2>
      </div>
    </section>

    <!-- Product section -->
    <div class="columns is-multiline">
      <!-- Full-width intro text -->
      <div class="column is-12 has-text-centered">
        <p class="is-size-4 has-text-weight-bold">Latest Products</p>
      </div>

      <!-- Loop through latestProducts -->
      <div
        class="column is-3"
        v-for="product in latestProducts"
        :key="product.id"
      >
        <div class="box has-text-centered">
          <!-- Product Image (add :src binding later) -->
          <figure class="image mb-4">
            <!-- Example placeholder image -->
           <img :src="product?.get_thumbnail || 'https://via.placeholder.com/300x200'" alt="product image"
           style="width: 300px; height: 200px; object-fit: cover;"
           />
          </figure>

          <!-- Product name -->
          <h3 class="is-size-4">{{ product.name }}</h3>

          <!-- Product price -->
          <p class="is-size-6 has-text-grey">Rs {{ product.price }}</p>

          <!-- Add to cart button -->
          <router-link :to="`/${product.category.slug}/${product.slug}`"
   class="button is-link is-fullwidth">
          {{ product.name }}
        </router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',

  data() {
    return {
      // List to store the latest products fetched from the backend
      latestProducts: []
    };
  },

  created() {
    // Automatically fetch latest products when the component is created
    this.fetchLatestProducts();
  },

  methods: {
    // Fetches the latest products from the API
    async fetchLatestProducts() {
      // Start loading spinner (if your store uses this for global UI state)
      this.$store.commit('setIsLoading', true);

      try {
        // Make GET request to your Django backend API
        const response = await axios.get('/api/v1/latest-products/');
        this.latestProducts = response.data; // Save the products to local state
      } catch (error) {
        console.error('Error fetching products:', error); // Log any request error
      } finally {
        // Always stop the loading indicator whether request succeeded or failed
        this.$store.commit('setIsLoading', false);
      }
    }
  }
};
</script>
