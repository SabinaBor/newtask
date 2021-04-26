import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
          },
        themes: {
            light: {
                primary: '#363636',
                accent: '#2EB85C',
                background: '#E5E5E5',
                text: '#FEFEFE',
            }
        }
    }
});
