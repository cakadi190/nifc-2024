import $ from 'jquery';

/**
 * Initialize jQuery
 * 
 * @see https://stackoverflow.com/questions/76881148/nuxt-3-how-to-use-external-libraries-that-require-jquery
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:beforeMount', () => {
    window.jQuery = window.$ = $;
  });
});
