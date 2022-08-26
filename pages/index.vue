<template>
  <!-- <Tutorial/> -->
    <ul>
    <li v-for="post in posts" :key="post.slug">
      <nuxt-link :to="`/${post.slug}`"> {{ post.title }} </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
      // const posts = await $content().fetch();
      const posts = await $content().only(["slug", "title"]).fetch();
      return { posts };
    },
  name: 'IndexPage'
}
</script>
