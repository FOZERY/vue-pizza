<script setup>
defineProps({
  buttonName: String
})
</script>

<template>
  <button class="rounded-2xl px-3 py-1 transition duration-300">
    {{ buttonName }}
  </button>
</template>
