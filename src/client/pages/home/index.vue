<template>
  <div>
    <h1>home</h1>
    <ul>
      <li v-for="item in posts.list" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState({
      loading: state => state.home.loading
    }),
    ...mapGetters(['posts'])
  },
  methods: mapActions(['loadPosts']),
  // 预取数据 -- 必须return promise
  asyncData({ store }) {
    if (!store.state.home.posts.list.length) {
      return store.dispatch('loadPosts')
    }
  },
  mounted() {
    console.log('文章列表', this.posts)
  }
}
</script>
