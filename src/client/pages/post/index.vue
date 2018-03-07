<template>
  <div class="post">
    <h2>post</h2>
  </div> 
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'post',
  computed: mapGetters({
    post: 'post/post'
  }),
  asyncData({ store, route }) {
    const id = route.params.id
    return store.dispatch('post/loadPostById', { id })
  },
  mounted() {
    console.log('post:', this.post)
  }
}
</script>
