import './assets/main.css';
import '../node_modules/@splidejs/splide/dist/css/splide.min.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { mask } from 'vue-the-mask';

import App from './App.vue';
import router from '@/router/router.js';

const app = createApp(App);

app.directive('mask', mask);

app.use(autoAnimatePlugin);
app.use(createPinia());
app.use(router);
app.mount('#app');
