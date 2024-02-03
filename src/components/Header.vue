<script setup>
import Button from './Button.vue'
</script>

<template>
  <header class="flex justify-between items-center py-6">
    <div class="flex header__left gap-11">
      <div class="flex items-center">
        <img class="h-12" src="/mainlogo.png" alt="logo" />
        <div class="flex flex-col ml-1">
          <h1 class="text-3xl font-semibold uppercase tracking-tighter">Roblox</h1>
          <span class="tracking-tight">Пицца & Роллы</span>
        </div>
      </div>
      <div class="header__info flex flex-col justify-between">
        <div class="header__info-top flex gap-5 font-medium">
          <span>Доставка</span>
          <button class="text-orange-500 hover:text-orange-700 transition duration-300">
            Москва
          </button>
        </div>
        <div class="header__info-bottom flex gap-4 text-sm">
          <a
            class="flex items-center gap-2 hover:text-orange-700 transition duration-300"
            href="https://eda.yandex.ru"
          >
            <img class="w-4 h-4" src="/yandexfood.png" alt="Yandex Food Logo" />
            <span>Яндекс еда</span>
          </a>

          <div class="flex gap-1">
            <span>Время доставки от</span>
            <span>31 мин</span>
          </div>
        </div>
      </div>
    </div>
    <div class="header__right">
      <Button
        class="bg-slate-100 text-slate-500 hover:text-black hover:bg-slate-200"
        buttonName="Войти"
      />
    </div>
  </header>
</template>
