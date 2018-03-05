<template>
  <div id="app">
    <nav id="nav">
      <router-link v-for="item in navlist" :key="item.title" :to="item.path" v-text="item.title"></router-link>
    </nav>
    <div id="banner">
      <img :src="navlist.filter(c=>c.name === $route.name)[0].image" alt="ko00 Blog">
      <!-- <p>{{$route.name}}</p> -->
    </div>
    <!-- <transition name="fade" mode="out-in"> -->
      <router-view class="view"></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      navlist: [
        {
          name: 'Home',
          title: 'home',
          path: '/',
          image: require('./assets/image/home-bg.jpg'),
          title: 'ko00',
          subtitle: '只想简单生活'
        },
        {
          name: 'About',
          title: 'about',
          path: '/about',
          image: require('./assets/image/about-bg.jpg'),
          title: 'About',
          subtitle: 'ko00'
        },
        {
          name: 'Tags',
          title: 'tags',
          path: '/tags',
          image: require('./assets/image/tags-bg.jpg'),
          title: 'Tags',
          subtitle: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#nav {
  position: absolute;
  top: 0;
  left: 0;
}
#banner {
  img {
    width: 100%;
    height: 15vh;
  }
}
</style>
