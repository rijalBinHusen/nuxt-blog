<template>
    <PostPage 
      :posts="posts"
      :currentPage="currentPage"
      :firstPage="firstPage"
      :lastPage="lastPage"
    />
</template>

<script>
import PostPage from '@/components/PostPage.vue'
import fetchPostMixins from '@/utils/fetchPostsMixin'

export default {
    components: { PostPage },
  mixins: [fetchPostMixins],
  name: 'IndexPage'
}
</script>
