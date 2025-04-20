<template>
  <div>
    <Navbar :cartCount="cartCount" @toggle-cart="showCart = !showCart" />
    <ProductList />
    <Cart v-if="showCart" />
  </div>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import Navbar from '../components/Navbar.vue'
import ProductList from '../components/ProductList.vue'
import Cart from '../components/Cart.vue'

const store = useStore()
const showCart = ref(false)

onMounted(() => {
  store.dispatch('fetchProducts')
})

const cartCount = computed(() => store.getters.totalCart)
</script>
  
  <style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
  }
  </style>
  