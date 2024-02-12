import './assets/main.css';
import '../node_modules/@splidejs/splide/dist/css/splide.min.css';

import { createApp } from 'vue';
import {createPinia} fromm 'pinia';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';

import App from './App.vue';

const app = createApp(App);

app.use(autoAnimatePlugin);
app.use(createPinia());
app.mount('#app');
