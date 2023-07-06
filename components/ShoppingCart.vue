<template>
  <div class="cart">
    <p><b>Shopping Cart</b></p>
    <button 
      v-if="items.length"
      @click="$emit('clear-cart')"
    >
      Clear Cart
    </button>
    <p v-else><b>No Items In Cart</b></p>
    <div v-if="items.length">
        <p><b>{{ items.length }} items</b></p>
        <p><b>Total <span v-if="totalPrice">{{ totalPrice(items) }}</span></b></p>
      <div 
        v-for="item in items" 
        :key="item" 
        class="cart--items"
      >
        <div>{{ item.title }}</div>
        <p>${{ item.price }}</p>
        <button @click="$emit('removeItem', item)">
            Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { product } = defineProps(['items'])

  const totalPrice = (items) => {
    const total = items.reduce((total, item) => total + item.price, 0)
    return `$ ${total}`
  }
</script>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 150px;
  padding: 10px;
}
.cart--items {
  border: 1px solid gray;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
