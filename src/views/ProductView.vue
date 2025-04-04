<template>
  <div class="page-product">
    <div class="columns is-multiline ">
      <figure class="column is-9">
        <ProductImage :image="product.get_image" />
        <figcaption>
          <ProductDetails :name="product.name" :description="product.description" />
        </figcaption>
      </figure>
      <ProductCart :quantity="quantity" @add-to-cart="addToCart" />
      <ProductPrice :price="product.price" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProductImage from '@/components/ProductImage.vue'
import ProductPrice from '@/components/ProductPrice.vue'
import ProductCart from '@/components/ProductCart.vue'
import ProductDetails from '@/components/ProductDetails.vue'

export default {
  name: 'ProductView',
  components: {
    ProductImage,
    ProductPrice,
    ProductCart,
    ProductDetails,
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
