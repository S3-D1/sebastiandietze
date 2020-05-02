import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
import minifyTheme from 'minify-css-string';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: { minifyTheme },
    themes: {
      dark: {
        primary: colors.deepPurple.darken4,
      },
    },
  },
  icons: {
    iconfont: 'mdiSvg',
  },
});
