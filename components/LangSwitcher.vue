<template>
  <span class="lang-switcher">
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </nuxt-link>
  </span>
</template>

<script>
export default {
  name: 'LangSwitcher',
  computed: {
    showLocales () {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    }
  },
  mounted() {
    console.log(this.$dir()); // logs your direction 'ltr' or 'rtl'
    console.log(this.$i18n.locale);
    if (this.$i18n.locale === "fa") {
       // make some action
    }
  },
}
</script>

<style>
section[dir="rtl"]
{
  direction: rtl;
}
</style>