<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">{{title}}</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >GitHub</a>
      </div>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/users">Users</nuxt-link>
      <nuxt-link to="/photos">photos</nuxt-link>

      <!-- <nuxt-content :document="post"></nuxt-content> -->
      <div v-if="loggedIn" class="links">
        <h1>Hello, {{user.email}}</h1>
        <button @click="logout">logout</button>
        <b-img :src="picture" class="mt-1" rounded="circle" width="30px" height="30px" />
      </div>
      <div v-else>
        <nuxt-link to="/login" class="button--grey">Login</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // async asyncData({ $content }) {
  //   const post = await $content('posts/hello').fetch();
  //   console.log('post', post);
  //   return {
  //     post,
  //     title: post.title,
  //   };
  // },
  data() {
    return {
      title: 'hello-mustofa',
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,
    };
  },
  methods: {
    async logout(e) {
      await this.$auth.logout();
      this.$router.push('login');
    },
  },
  computed: {
    picture() {
      return;
      get(this.$auth.user, 'picture') || // OpenID
        get(this.$auth.user, 'picture.data.url'); // Facebook graph API
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
