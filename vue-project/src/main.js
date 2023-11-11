import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//Store 
// import store from "./store"

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Use solid icons

const app = createApp(App)

// Register Font Awesome component
app.component('font-awesome-icon', FontAwesomeIcon);
library.add(fas);

// Function to register a Vue component

function registerComponent(context, app) {
    for (const path in context) {
    const component = context[path].default;
    const componentName = path
    .replace(/^.+\/([^/]+)\.vue$/, '$1')
    .replace(/\//g, '-');

    app.component(componentName, component);
}
}
// Dynamically import and register all components from the 'components' directory and its subfolders
const componentContext = import.meta.globEager('./components/**/*.vue');

registerComponent(componentContext, app);
app.use(createPinia())
app.use(router)

app.mount('#app')
