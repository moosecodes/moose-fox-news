<template>
  <div>
    <div v-if="data.products">
      <div v-for="p in data.products" :key="p.id">
        <ProductInfoCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('https://dummyjson.com/products')
  if(!data.value.products.length) {
    // handle error
  }
</script>