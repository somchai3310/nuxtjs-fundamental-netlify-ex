<template>
  <div>
    <h1>About Pages</h1>
    <nuxt-link to="/">Back Home</nuxt-link>
  </div>
</template>
<script>
export default {
  middleware: ['auth'],
  layout: 'admin',
};
</script>