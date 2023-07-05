import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return { items: [] }
  },
  actions: {
    addToCart(item) {
        this.items.push(item)
    },
    removeItem(item) {
      console.log(this.items)
        const index = this.items.indexOf(item)
        if(index > -1) this.items.splice(index, 1)
    },
  },
})