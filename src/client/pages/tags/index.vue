<template>
  <div>tags</div>
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
