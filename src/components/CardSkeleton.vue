<template>
    <div
        class="flex pb-3 sm:p-0 gap-2 sm:flex-col border-b last:border-0 sm:border-0 cursor-pointer"
    >
        <div class="card-skeleton border-2 rounded-3xl w-32 h-32 sm:w-56 sm:h-56 sm:mx-auto" />
        <div class="flex flex-col gap-3 justify-between flex-1">
            <div>
                <div class="card-skeleton bg-slate-200 rounded-lg max-w-36 sm:w-40 h-6 mb-1"></div>
                <div
                    class="card-skeleton bg-slate-200 max-w-80 sm:max-w-full rounded-xl h-10"
                ></div>
            </div>
            <div class="flex justify-between items-center">
                <div class="card-skeleton bg-slate-200 rounded-xl h-6 w-16 hidden sm:inline"></div>
                <div class="card-skeleton bg-slate-200 h-6 w-16 rounded-3xl"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes bgAnimate {
    0% {
        background-position: 50% 0;
    }

    100% {
        background-position: -150% 0;
    }
}
.card-skeleton {
    background-image: linear-gradient(
        90deg,
        rgba(210, 210, 210, 1) 0%,
        rgba(255, 255, 255, 1) 19%,
        rgba(210, 210, 210, 1) 64%,
        rgba(210, 210, 210, 1) 100%
    );
    background-size: 200% 100%;
    animation: bgAnimate 2s linear infinite;
}
</style>
