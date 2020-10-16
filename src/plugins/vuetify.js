import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import th from 'vuetify/lib/locale/th'
import en from 'vuetify/lib/locale/en'
Vue.component('my-component', {
    template:"<v-btn @click='changeLocale'>tt</v-btn>",
    methods: {
      changeLocale () {
        this.$vuetify.lang.current = 'th'
      },
    },
  })
Vue.use(Vuetify);

  
export default new Vuetify({
    lang: {
        locales: { th,en },
        current: 'th',
      },
});
