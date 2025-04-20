<template>
    <div class="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :price="product.price"
        :image="getImage(product.name)"
        @add-to-cart="addToCart(product)"
      />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import ProductCard from './ProductCard.vue'
  
  const store = useStore()
  const products = computed(() => store.state.products)
  
  const addToCart = (product) => {
    store.commit('addToCart', product)
  }
  
  function getImage(name) {
    return `https://source.unsplash.com/featured/?${encodeURIComponent(name)}`
  }
  </script>
  