<script setup>
import SliderItem from './SliderItem.vue';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide';

const sliderOptions = {
    type: 'slide',
    rewind: true,
    speed: 1000,
    gap: '15px',
    pagination: false,
    padding: { left: 5, right: 30 },
    lazyLoad: 'nearby',
    perPage: 4,
    perMove: 1,
    autoHeight: true,
    breakpoints: {
        1280: {
            perPage: 3,
        },

        1024: {
            perPage: 3,
        },

        768: {
            perPage: 2,
        },
        540: {
            perPage: 1,
            padding: { left: 5, right: 150 },
        },
        420: {
            perPage: 1,
            padding: { left: 5, right: 60 },
        },
    },
    autoplay: true,
    interval: 5000,
};
</script>

<template>
    <Splide :has-track="false" :options="sliderOptions" aria-label="">
        <SplideTrack class="py-5">
            <SplideSlide>
                <SliderItem />
            </SplideSlide>
            <SplideSlide>
                <SliderItem />
            </SplideSlide>
            <SplideSlide>
                <SliderItem />
            </SplideSlide>
            <SplideSlide>
                <SliderItem />
            </SplideSlide>
            <SplideSlide>
                <SliderItem />
            </SplideSlide>
            <SplideSlide>
                <SliderItem />
            </SplideSlide>
            <SplideSlide>
                <SliderItem />
            </SplideSlide>
            <SplideSlide>
                <SliderItem />
            </SplideSlide>
        </SplideTrack>

        <div class="splide__progress">
            <div class="bg-red-400 splide__progress__bar" />
        </div>

        <div class="splide__arrows">
            <button class="splide__arrow splide__arrow--prev shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                    <path
                        style="fill: #000000"
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                    />
                </svg>
            </button>
            <button class="splide__arrow splide__arrow--next shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                    <path
                        style="fill: #000000"
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                    />
                </svg>
            </button>
        </div>
    </Splide>
</template>

<style>
.splide__progress {
    margin: 0 auto;
    width: 50%;
}

.splide__arrow {
    background: rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 75px;
    border-radius: 0;
    opacity: 0;

    transition: opacity 0.3s ease-in;
}

.splide__arrow:hover {
    opacity: 1 !important;
}

.splide__arrow svg {
    width: 30px;
    height: 30px;
}

.splide__arrow--next {
    right: 0;
}
.splide__arrow--prev {
    left: 0;
}
</style>
