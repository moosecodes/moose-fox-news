<template>
  <div class="cart">
    <p><b>Shopping Cart {{ items.length < 1 ? 'Empty' : '' }}</b></p>
    <div v-if="items.length">
      <p><b>{{ items.length }} items</b></p>
      <p><b>Total <span v-if="totalPrice">{{ totalPrice(items) }}</span></b></p>
      <div 
        v-for="item in items" 
        :key="item" 
        class="cart-items"
      >
        <p>{{ item.title }}</p>
        <p>${{ item.price }}</p>
        <button @click="$emit('someEvent', item)">
            remove
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
  min-width: 150px;
  padding: 10px;
}
.cart-items {
  border: 1px solid gray;
  padding: 10px;
  margin-bottom: 10px;
}
</style>