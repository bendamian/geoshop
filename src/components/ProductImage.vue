<template>
  <figure class="image-container">
    <img
      :src="image || 'https://via.placeholder.com/600x400'"
      alt="product image"
      class="product-image"
    />
  </figure>
</template>

<script>
export default {
  name: 'ProductImage',
  props: {
    image: String,
  },
}
</script>

<style scoped>
.image-container {
  width: 100%;
  max-width: 600px; /* We can adjust this */
  height: 400px;     /* Fixed height for uniformity */
  margin-bottom: 1.5rem;
  overflow: hidden;
  border-radius: 8px;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image fills the box while maintaining aspect ratio */
  display: block;
}
</style>
