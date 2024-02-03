<script setup>
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Slider from './components/Slider.vue';
</script>

<template>
    <div class="w-9/12 mx-auto h-screen">
        <Header />

        <Navbar />

        <main class="py-3">
            <section class="mb-7">
                <h2 class="text-2xl font-medium mb-2">Новинки</h2>

                <Slider />
            </section>
            <section class="mb-7">
                <h2 class="text-2xl font-medium mb-2">Пиццы</h2>
            </section>
        </main>
    </div>
</template>
