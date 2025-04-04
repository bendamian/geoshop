<template>
  <details class="product-details">
    <h1 class="title">{{ name }}</h1>
    <p>{{ description }}</p>
  </details>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    name: String,
    description: String,
  },
}
</script>
