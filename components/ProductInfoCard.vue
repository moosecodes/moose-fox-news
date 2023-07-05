<template>
    <div>
      <p><b>{{ product.title }}</b></p>
      <p><b>${{product.price}}</b></p>
      <p>
        <img :src="product.thumbnail" />
      </p>
      <p>{{product.description}}</p>
      <p>{{product.stock > 0 ? '' : 'Out of Stock' }}</p>
    </div>
  </template>
  
  <script setup>
    const { product } = defineProps(['product'])
  </script>
  
  <style scoped>

  </style>