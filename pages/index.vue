<template>
  <!-- <Tutorial/> -->
    <PostPage 
      :posts="post"
      :currentPage="currentPage"
      :firstPage="firstPage"
      :lastPage="lastPage"
    />
</template>

<script>
import PostPage from '@/components/PostPage.vue'
import fetchPostMixins from '@/utils/fetchPostsMixin'

export default {
  mixins: [fetchPostMixins],
  components: { PostPage },
  name: 'IndexPage'
}
</script>
