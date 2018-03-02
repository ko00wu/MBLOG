<template>
  <div id="app">
    <nav class="inner">
        <router-link v-for="item in navlist" :key="item.title" :to="item.path" v-text="item.title"></router-link>
      </nav>
    <div class="banner">
      banner
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      navlist: [
        {
          title: 'home',
          path: '/'
        },
        {
          title: 'about',
          path: '/about'
        },
        {
          title: 'tags',
          path: '/tags'
        }
      ]
    }
  }
}
</script>
