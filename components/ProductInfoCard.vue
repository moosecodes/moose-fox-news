<template>
  <div class="card">
    <h2>{{ product.title }}</h2>
    <img 
      :src="product.thumbnail" 
      :alt="product.id" 
    />
    <h3>${{ product.price }}</h3>
    <h4>{{ product.description }}</h4>
    <button 
      @click="addToCart(product)"
      :disabled="product.stock < 1"
    >
      {{ product.stock > 0 ? 'Add Item' : 'Out of Stock' }}
    </button>
  </div>
</template>
  
<script setup>
  import { useCartStore } from '@/stores/cart'
  
  const { product } = defineProps(['product'])

  const cart = useCartStore()

  const addToCart = (item) => {
    cart.addToCart(item)
  }
</script>
  
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid black;
  width: 400px;
  padding: 10px;
}

h4 {
  margin: 0 20px 20px 20px;
}

img {
  max-height: 200px;
  max-width: 100%;
}
</style>