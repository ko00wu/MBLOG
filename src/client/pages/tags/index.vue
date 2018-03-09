<template>
  <div class="tags">
    <div v-for="tag in tags" :key="tag.id" class="tag">
      <h2 class="tag__h2">{{tag.label}}</h2>
      <ul>
        <li v-for="post in tag.posts" :key="post.id" class="tag__post">
          <router-link :to="`/post/${post.id}`" class="tag__post__link">{{post.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'tags',
  computed: mapGetters({
    tags: 'tag/tags'
  }),
  asyncData({ store, route }) {
    const tag = route.query.tag
    return store.dispatch('tag/loadTags', {
      tag
    })
  },
  mounted() {
    console.log('tag:', this.tags)
  },
  methods: mapActions(['loadTags'])
}
</script>

<style lang="scss" src="./index.scss" scoped>

</style>
