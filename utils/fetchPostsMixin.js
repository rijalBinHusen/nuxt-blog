export default {
  async asyncData({ $content, params }) {
    // const posts = await $content().fetch();
    const posts = await $content().only(["slug", "title"]).fetch();
    return { posts };
  },
};
