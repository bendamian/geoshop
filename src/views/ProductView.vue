<template>
  <div class="page-product">
    <div class="columns is-multiline">
      <div class="column is-9">
        <ProductImage :image="product.get_image" />
        <h1 class="title">{{ product.name }}</h1>
        <p>{{ product.description }}</p>
      </div>

      <ProductInfo :price="product.price" :quantity="quantity" @add-to-cart="addToCart" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProductImage from '@/components/ProductImage.vue'
import ProductInfo from '@/components/ProductInfo.vue'

export default {
  name: 'ProductView',
  components: {
    ProductImage,
    ProductInfo,
  },
  data() {
    return {
      product: {},
      quantity: 1,
    }
  },
  mounted() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      const { category_slug, product_slug } = this.$route.params
      try {
        const response = await axios.get(`/api/v1/products/${category_slug}/${product_slug}`)
        this.product = response.data
      } catch (error) {
        console.log(error)
      }
    },
    addToCart(qty) {
      console.log(`Add ${qty} of ${this.product.name} to cart`)
    },
  },
}
</script>
