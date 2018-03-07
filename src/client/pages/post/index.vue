<template>
  <div>
    <div id="post" v-html="post.content"></div>
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
  mounted() {}
}
</script>

<style lang="scss">
#post {
  margin: 0 auto;
  p {
    font-size: 18px;
  }
  img {
    max-width: 100%;
  }
  a {
    font-size: inherit;
    color: #0275d8;
  }
  a:hover {
    text-decoration: underline;
    color: #014c8c;
  }
  pre {
    padding: 1rem;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 80%;
    overflow: auto;
  }

  blockquote {
    border-left: 5px solid #eee;
    padding: 0.75rem 1.5rem;
    margin: 0 0 1.5rem;
    color: lighten(black, 50%);
    font-style: italic;
    p {
      margin: 0;
    }
  }
  pre code {
    padding: 0;
    color: inherit;
    font-size: inherit;
    background-color: transparent;
    border-radius: 0;
  }
  code {
    padding: 0.2rem 0.4rem;
    font-size: 90%;
    color: #bd4147;
    background-color: #f7f7f9;
    border-radius: 0.25rem;
  }
  table {
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #dddddd;
    border-collapse: collapse;
    border-left: none;

    th,
    td {
      padding: 6px;
      border-top: 1px solid #dddddd;
      border-left: 1px solid #dddddd;
    }
  }
}
// post mediaQuery
@media (min-width: 992px) {
  #post {
    width: 66%;
  }
}
@media (min-width: 768px) {
  #post {
    width: 80%;
  }
}
</style>
