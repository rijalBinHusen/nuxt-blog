<template>
    <h1>Hello world</h1>
</template>

<script>
import fetchPostMixins from '@/utils/fetchPostsMixin'

export default {
  mixins: [fetchPostMixins],
  name: 'IndexPage'
}
</script>
