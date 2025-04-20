<template>
  <div class="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center border hover:shadow-xl transition">
    <img :src="image" alt="product" class="w-full h-32 object-contain mb-3 rounded" />
    <h3 class="text-lg font-semibold text-center mb-1">{{ name }}</h3>
    <p class="text-indigo-600 font-bold text-md">${{ price }}</p>
    <button @click="addToCart" class="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
      Añadir al carrito
    </button>
  </div>
  
</template>

<script setup>
defineProps(['name', 'price', 'image'])
const emit = defineEmits(['add-to-cart'])

function addToCart() {
  emit('add-to-cart')
}
</script>
