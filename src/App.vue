<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div class="w-9/12 mx-auto">
    <Header />

    <nav class="flex items-center justify-between">
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <ul class="flex">
          <li>
            <a href="#" class="text-black">Пицца</a>
          </li>
          <li>
            <a href="#" class="text-black">Пасты</a>
          </li>
          <li>
            <a href="#" class="text-black">Супы</a>
          </li>
          <li>
            <a href="#" class="text-black">Салаты</a>
          </li>
          <li>
            <a href="#" class="text-black">Напитки</a>
          </li>
          <li>
            <a href="#" class="text-black">Десерты</a>
          </li>
          <li>
            <a href="#" class="text-black">Акции</a>
          </li>
          <li>
            <a href="#" class="text-black">Комбо</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
