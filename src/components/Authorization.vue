<script setup>
import { nextTick, ref, watch } from 'vue';
import AppButton from '@/components/UI/AppButton.vue';
import router from '@/router/router.js';
import { useUserStore } from '@/stores/userStore.js';

const props = defineProps({
    fromCart: { type: Boolean, default: false },
});

const emit = defineEmits(['closePopup']);

const userStore = useUserStore();

const isValid = ref(false);
const isSentMessage = ref(false);

const inputNumber = ref('');

let otp_id;

const otp_form = ref(null);
const otp_form_submit = ref(null);
const otp_form_isValid = ref(false);

const formatPhoneNumber = (phoneNumber) => {
    // Удаляем все символы кроме цифр
    phoneNumber = phoneNumber.replace(/\D/g, '');

    // Добавляем код страны
    phoneNumber = '+' + phoneNumber;

    return phoneNumber;
};

const checkIsValid = () => {
    const regex = /^\+7\s\(?\d{3}\)?\s\d{3}-\d{2}-\d{2}$/;
    isValid.value = regex.test(inputNumber.value);
};

const sendMessage = async () => {
    try {
        const formatedPhoneNumber = formatPhoneNumber(inputNumber.value);
        const response = await userStore.sendOtp(formatedPhoneNumber);
        otp_id = response.data.otp_id;
        isSentMessage.value = true;
    } catch (e) {
        alert(e.response.data.message);
    }
};

const sendVerificationCode = async () => {
    if (isSentMessage.value) {
        try {
            const formatedPhoneNumber = formatPhoneNumber(inputNumber.value);
            const inputs = [...otp_form.value.querySelectorAll('input[type=text]')];
            const verificationCode = inputs.reduce((acc, curr) => acc + curr.value, '');
            userStore.user = await userStore.login(formatedPhoneNumber, verificationCode, otp_id);
            userStore.isAuth = true;
            inputs.forEach((input) => input.value = '');
            emit('closePopup');
            await (props.fromCart ? router.push('/checkout') : router.push('/profile'));
        } catch (e) {
            console.log(e);
            alert(e.response.data.message);
        }

    }
};

watch(isSentMessage, async () => {
    if (isSentMessage.value) {
        await nextTick();
        const inputs = [...otp_form.value.querySelectorAll('input[type=text]')];

        const validateOtp = (inputs) => {
            let isValid = true;
            for (let input of inputs) {
                if (input.value === '') {
                    isValid = false;
                }
            }

            otp_form_isValid.value = isValid;
        };

        const handleKeyDown = (e) => {
            if (
                !/^[0-9]{1}$/.test(e.key)
                && e.key !== 'Backspace'
                && e.key !== 'Delete'
                && e.key !== 'Tab'
                && !e.metaKey
            ) {
                e.preventDefault();
            }

            if (e.key === 'Delete' || e.key === 'Backspace') {
                const index = inputs.indexOf(e.target);
                if (index > 0) {
                    inputs[index - 1].value = '';
                    inputs[index - 1].focus();
                }
                validateOtp(inputs);
            }
        };


        const handleInput = (e) => {
            console.log(e);
            const { target } = e;
            const index = inputs.indexOf(target);
            if (target.value) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }

            validateOtp(inputs);
        };

        const handleFocus = (e) => {
            e.target.select();
        };

        const handlePaste = (e) => {
            e.preventDefault();
            const text = e.clipboardData.getData('text');
            if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
                return;
            }
            const digits = text.split('');
            inputs.forEach((input, index) => input.value = digits[index]);

            validateOtp(inputs);
        };

        inputs.forEach((input) => {
            input.addEventListener('input', handleInput);
            input.addEventListener('keydown', handleKeyDown);
            input.addEventListener('focus', handleFocus);
            input.addEventListener('paste', handlePaste);
        });

    }
});

watch(isValid, () => {
    document.getElementById('submitRegBtn').disabled = !isValid.value;
});
</script>

<template>
    <div>
        <h2 class="text-2xl font-medium mb-5">Вход на сайт</h2>

        <div v-if="!isSentMessage">
            <form ref="otp_form" class="flex flex-col flex-1 w-96" action="" method="post">
                <label class="text-slate-500 mb-3" for="">Введите номер телефона</label>
                <input
                    v-model="inputNumber"
                    v-mask="'+7 (###) ###-##-##'"
                    @input="checkIsValid"
                    class="border border-slate-300 font-medium focus:border-slate-700 rounded-md py-1.5 px-2 outline-none transition duration 300"
                    type="tel"
                    placeholder="+7 (999) 999-99-99"
                />
                <input
                    @click.prevent="sendMessage"
                    disabled
                    id="submitRegBtn"
                    type="submit"
                    value="Отправить смс"
                    class="disabled:cursor-default cursor-pointer disabled:bg-stone-500 bg-red-500 text-white rounded-xl py-2 mt-5"
                />
            </form>
        </div>
        <div v-else>
            <form ref="otp_form" class="flex flex-col flex-1 w-96">
                <div class="flex items-center justify-center gap-3">
                    <input
                        type="text"
                        class="w-12 h-12 text-center text-lg border border-slate-300 font-medium focus:border-slate-700 rounded-xl py-1.5 px-2 outline-none transition duration 300"
                        pattern="\d*" maxlength="1" />
                    <input
                        type="text"
                        class="w-12 h-12 text-center text-lg border border-slate-300 font-medium focus:border-slate-700 rounded-xl py-1.5 px-2 outline-none transition duration 300"
                        maxlength="1" />
                    <input
                        type="text"
                        class="w-12 h-12 text-center text-lg border border-slate-300 font-medium focus:border-slate-700 rounded-xl py-1.5 px-2 outline-none transition duration 300"
                        maxlength="1" />
                    <input
                        type="text"
                        class="w-12 h-12 text-center text-lg     border border-slate-300 font-medium focus:border-slate-700 rounded-xl py-1.5 px-2 outline-none transition duration 300"
                        maxlength="1" />
                </div>
                <AppButton
                    @click.prevent="sendVerificationCode"
                    :disabled="!otp_form_isValid"
                    class="disabled:cursor-default cursor-pointer disabled:bg-stone-500 bg-red-500 text-white rounded-xl py-2 mt-5">
                    Подтвердить
                </AppButton>
            </form>
            <div class="text-sm text-slate-500 mt-2">
                <span class="mr-1">Не пришел код?</span>
                <span
                    class="font-medium text-sm text-indigo-500 hover:text-indigo-600 cursor-pointer"
                    @click.prevent="sendMessage">Отправить ещё раз</span>
            </div>
        </div>

    </div>
</template>

<style scoped></style>
