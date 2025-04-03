<template>
  <div class="column is-3">
    <h2 class="subtitle">Information</h2>
    <p><strong>Price:</strong> ${{ price }}</p>

    <div class="field has-addons mt-6">
      <div class="control">
        <input type="number" class="input" min="1" v-model="localQuantity" placeholder="Qty" />
      </div>
      <div class="control">
        <button class="button is-dark" @click="$emit('add-to-cart', localQuantity)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  props: {
    price: Number,
    quantity: Number,
  },
  data() {
    return {
      localQuantity: this.quantity,
    }
  },
}
</script>
