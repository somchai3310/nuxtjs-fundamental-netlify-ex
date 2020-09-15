<template>
  <div>
    <div class="container">
      <h1>photos</h1>
      <nuxt-link to="/">back to home</nuxt-link>
      <div class="photos">
        <!-- <div class="photos" v-for="photo in photos" :key="photo.id"> -->
        <!-- {{photo}} -->
        <!-- <img :src="photo.download_url" alt="photo" />
        <p>{{photo.author}}</p>
        </div>-->
        <nuxt-link v-for="photo in photos" :to="{ path: `/photos/${photo.id}` }" :key="photo.id">
          {{photo.id}}
          {{ photo.author }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // const photos = await $axios.$get('/find?brand_id=5e84ef7d3eaeae22123ca1f8');
    const photos = await $axios.$get('/v2/list');

    return { photos };
  },
};
</script>

<style scoped>
.container {
  padding: 1em;
  width: 1220px;
  margin: 0 auto;
}
.photos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1em;
  text-align: center;
}
.photo-item {
  width: 100%;
  height: 256px;
  object-fit: cover;
}
</style>