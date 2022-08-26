<template>
  <article>
    <h1>{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const slug = params.slug;
      const post = await $content(slug).fetch();

      return { post };
    },
  };
</script>