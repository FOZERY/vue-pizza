<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    withRouting: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:show']);

const router = useRouter();

const closePopup = () => {
    emit('update:show', false);
    if (props.withRouting) {
        router.push('/');
    }
};
</script>

<template>
    <Transition name="popup">
        <div
            v-if="show"
            @click.self="closePopup"
            class="fixed top-0 bottom-0 left-0 right-0 bg-black/70 h-lvh flex justify-center items-center z-20"
        >
            <div
                class="fixed bg-white opacity-100 overflow-x-none flex flex-col p-3 py-7 sm:p-7 mx-8 sm:mx-auto rounded-2xl z-30"
            >
                <svg
                    @click="closePopup"
                    class="md:fill-white absolute scale-75 hover:scale-90 md:scale-100 md:hover:scale-110 right-3 top-3 md:-right-7 md:top-0 cursor-pointer transition duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0,0,256,256"
                >
                    <g
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                    >
                        <g transform="scale(5.12,5.12)">
                            <path
                                d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z"
                            ></path>
                        </g>
                    </g>
                </svg>

                <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.popup-enter-active,
.popup-leave-active {
    transition: opacity 0.3s ease;
}

.popup-enter-from,
.popup-leave-to {
    opacity: 0;
}
</style>
