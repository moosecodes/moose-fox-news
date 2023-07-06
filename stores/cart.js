import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return { items: [] }
  },
  actions: {
    addItem(item) {
        this.items.push(item)
    },
    removeItem(item) {
        const index = this.items.indexOf(item)
        if(index > -1) this.items.splice(index, 1)
    },
    clear() {
      this.items = []
    },
  },
})
