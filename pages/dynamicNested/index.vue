<template>
  <div>
    <p>{{ $t('paragraph') }}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$dir()); // logs your direction 'ltr' or 'rtl'
    console.log(this.$i18n.locale);
    if (this.$i18n.locale == "fa") {
       // make some action
    }
  },
}
</script>
