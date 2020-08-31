import Vue from 'vue'
import App from './App.vue'
import './assets/scss/all.scss'
import VueI18n from 'vue-i18n'
import en from './locales/en'
import ru from './locales/ru'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: new URLSearchParams(window.location.search).get('locale') === null
      ? "en"
      : new URLSearchParams(window.location.search).get('locale'),
  messages: {
    en: { ...en },
    ru: { ...ru }
  }
});

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
