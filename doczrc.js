import { css } from 'docz-plugin-css';

export default {
  wrapper: 'src/utils/theme-wrapper',
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: true,
    }),
  ],
};
