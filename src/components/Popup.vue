<script setup>
defineProps({
    closePopup: Function,
});
</script>

<template>
    <div
        @click.self="closePopup"
        class="modal-backdrop fixed top-0 bottom-0 left-0 right-0 bg-black/70 flex justify-center items-center z-20"
    >
        <div
            class="fixed top-1/4 bg-white opacity-100 overflow-x-none flex flex-col p-7 rounded-2xl z-30"
        >
            <svg
                @click="closePopup"
                class="fill-white hover:scale-95 hover:fill-stone-400 absolute -right-7 top-0 translate-x-0 cursor-pointer transition duration-300"
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
</template>

<style scoped></style>
