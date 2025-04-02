<template>
  <div class="page-product">
    <div class="columns is-multiline">

      <!-- Product Image and Description (Main Content Area) -->
      <div class="column is-9">
        <!-- Product image -->
        <figure class="image mb-6">
          <img
            :src="product.get_image || 'https://via.placeholder.com/600x400'"
            alt="product image"
          />
        </figure>

        <!-- Product name -->
        <h1 class="title">{{ product.name }}</h1>

        <!-- Product description -->
        <p>{{ product.description }}</p>
      </div>

      <!-- Sidebar: Price and Quantity/Cart Controls -->
      <div class="column is-3">
        <h2 class="subtitle">Information</h2>

        <!-- Product price -->
        <p><strong>Price:</strong> ${{ product.price }}</p>

        <!-- Quantity input and Add to Cart button -->
        <div class="field has-addons mt-6">
          <!-- Quantity input -->
          <div class="control">
            <input
              type="number"
              class="input"
              min="1"
              v-model="quantity"
              placeholder="Qty"
            />
          </div>

          <!-- Add to cart button -->
          <div class="control">
            <button class="button is-dark" @click="addToCart()">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Product',
  data() {

    return {
      product: {},
      quantity: 1
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {

    async getProduct() {

            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug

            await axios
                .get(`/api/v1/products/${category_slug}/${product_slug}`)


    }
  }

}

</script>






<style>

</style>
