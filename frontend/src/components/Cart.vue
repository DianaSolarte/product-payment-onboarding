<template>
    <div class="fixed top-0 right-0 w-72 h-full bg-white shadow-xl p-4 overflow-y-auto z-50 border-l">
        <h2 class="text-xl font-bold mb-4 border-b pb-2">🧺 Carrito</h2>
        <ul>
          <li v-for="item in cart" :key="item.id" class="flex justify-between border-b py-2">
            <span>{{ item.name }}</span>
            <span class="font-semibold">${{ item.price }}</span>
          </li>
        </ul>
        <p class="mt-6 text-right text-lg font-bold">Total: ${{ total }}</p>
      </div>

            
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  const store = useStore()
  const cart = computed(() => store.state.cart)
  const total = computed(() =>
    cart.value.reduce((acc, p) => acc + Number(p.price), 0)
  )
  </script>
  