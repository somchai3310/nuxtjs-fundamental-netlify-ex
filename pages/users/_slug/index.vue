<template>
  <div>
    <h1>User Slug Detail</h1>

    <p>{{slug}}</p>
    <nuxt-link to="/users">Back</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  //   validate({ params }) {
  //     return params.slug === "1" || params.slug === "2";
  //   },
};
</script>

<style lang="scss" scoped>
</style>