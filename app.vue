<template>
  <div class="wrapper">
    <header>
      Mustafa Ishaq - Fox News Take Home Excercise
    </header>
    <main>
      <div 
        v-if="data.products" 
        class="container"
      >
        <ProductInfoCard 
          v-for="p in data.products" 
          :key="p.id"
          :product="p"
          class="card"
        />
      </div>
      <ShoppingCart 
        :items="cart.items" 
        @some-event="someEvent"
        class="cart" 
      />
    </main>

  </div>
</template>

<script setup>
  import { useCartStore } from '@/stores/cart'

  const cart = useCartStore()

  const { data } = await useFetch('https://dummyjson.com/products')
  if(!data.value.products.length) {
    // handle error
  }

  const someEvent = (itemId) => {
    cart.removeItem(itemId)
    console.log(itemId)
  }
</script>
  
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
header {
  display: flex;
  justify-content: center;
  background-color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  color: white;
  padding: 20px;
}
main {
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 10px;
}
.card {
  margin: 10px;
}
</style>