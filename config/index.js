import en from '../lang/en-US.js'
import fa from '../lang/fa-IR.js'


export const I18N = {
    locales: [{
            code: 'en',
            iso: 'en-US',
            name: 'English',
            dir: 'ltr',
        },
        {
            code: 'fa',
            iso: 'fa-IR',
            name: 'persian',
            dir: 'rtl',
        }
    ],
    defaultLocale: 'en',
    vueI18n: {
        fallbackLocale: 'en',
        messages: { en, fa }
    }
}