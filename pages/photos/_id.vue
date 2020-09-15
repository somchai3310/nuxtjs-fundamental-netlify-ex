<template>
  <div>
    <h1>Photo Detail</h1>
    <nuxt-link to="/photos">back photos</nuxt-link>
    <!-- <div v-for="photo in photos" :key="photo.id"> -->
    <img :src="photo.download_url" alt="photo detail" class="image" />
    <p>author: {{photo.author}}</p>
    <p>url: {{photo.url}}</p>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const photo = await $axios.$get(`/id/${params.id}/info`);
    console.log('photo', photo);
    return { photo };
  },
};
</script>

<style scoped>
.image {
  width: 300px;
}
</style>