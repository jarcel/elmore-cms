import type { StrapiApp } from '@strapi/strapi/admin';
import AuthLogo from '../extensions/el-signature-blue.svg';
import favicon from '../extensions/el-favicon-blue.svg';

export default {
  config: {
    overrides: {
      InputNumber: {
        defaultProps: {
          groupSeparator: '', // Removes commas
        },
      },
    },
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};