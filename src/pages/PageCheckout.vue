<script setup>
import CartList from '@/components/CartList.vue';
import TitleSection from '@/components/UI/TitleSection.vue';
</script>

<template>
    <TitleSection>Ваш заказ</TitleSection>
    <div class="max-w-md">
        <CartList />
    </div>
    <div>
        <form action="">
            <div class="table">
                <label class="table-cell text-md">Имя</label>
                <input
                    class="table-cell border border-slate-300 font-medium focus:border-slate-700 rounded-md py-0.5 px-2 outline-none transition duration 300"
                    type="text"
                />

                <label class="table-cell text-md">Номер телефона</label>
                <input
                    v-model="inputNumber"
                    v-mask="'+7 (###) ###-##-##'"
                    @input="checkIsValid"
                    class="table-cell border border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300"
                    type="tel"
                    placeholder="+7 (999) 999-99-99"
                />

                <select
                    class="table-cell border border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300"
                >
                    <option value="">С доставкой</option>
                    <option value="">В ресторане</option>
                </select>
            </div>
        </form>
    </div>
</template>

<style scoped></style>
