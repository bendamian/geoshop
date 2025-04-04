<template>
  <div class="column is-3">
    <h2 class="subtitle">Product Price</h2>
    <p><strong>Price:</strong> ${{ price }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  props: {
    price: Number,
  },
}
</script>

