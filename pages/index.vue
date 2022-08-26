<template>
  <!-- <Tutorial/> -->
    <ul>
    <li v-for="post in posts" :key="post.slug">
      <nuxt-link :to="`/${post.slug}`"> {{ post.title }} </nuxt-link>
    </li>
  </ul>
</template>

<script>
import fetchPostMixins from '@/utils/fetchPostsMixin'

export default {
  mixins: [fetchPostMixins],
  name: 'IndexPage'
}
</script>
