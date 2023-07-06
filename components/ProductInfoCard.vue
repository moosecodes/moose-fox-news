<template>
  <div class="product--card">
    <h2>{{ product.title }}</h2>
    <img 
      :src="product.thumbnail" 
      :alt="product.id" 
    />
    <h3>${{ product.price }}</h3>
    <h4>{{ product.description }}</h4>
    <p>
      <button 
        @click="addItem(product)"
        :disabled="product.stock < 1"
      >
        {{ product.stock > 0 ? 'Add Item' : 'Out of Stock' }}
      </button>
    </p>
  </div>
</template>

<script setup>
  import { useCartStore } from '@/stores/cart'
  
  const { product } = defineProps(['product'])

  const cart = useCartStore()

  const addItem = (item) => {
    cart.addItem(item)
  }
</script>
  
<style scoped>
h4 {
  margin: 0 20px 20px 20px;
}

img {
  max-height: 200px;
  max-width: 100%;
}
.product--card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
  width: 400px;
  margin: 10px;
}
</style>
