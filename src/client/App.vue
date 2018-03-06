<template>
  <div id="app">
    <nav id="nav" class="clear nav" :class="{fixed}">
      <div class="nav__author"><router-link to="/" v-text="author"></router-link></div>
      <ul class="nav__right">
        <li v-for="item in navlist">
          <router-link :to="item.path" v-text="item.name"></router-link>
        </li>
      </ul>
      <div class="ta-right h-50"><button class="nav__toggleBtn" @click="handleToggleMiniNav">&#9776;</button></div>
      <ul v-show="isMiniBar" class="nav__minibar clear">
        <li v-for="item in navlist" :key="item.name" :class="{firstItem:item.name === 'home'}">
          <router-link :to="item.path" v-text="item.name"></router-link>
        </li>
      </ul>
    </nav>
    <div id="banner" ref="banner" :style="{'background-image':`url(${currentPage.image || ''})`}">
      <div class="banner__pageTitle">
        <h1 v-text="currentPage.title || ''"></h1>
        <hr>
        <p v-text="currentPage.subtitle || ''"></p>
      </div>
    </div>
    <transition name="fade">
      <router-view class="rootContainer" @onIsShowLoading="onSwitchShowLoading"></router-view>
    </transition>
    <div id="loading" v-show="isShowLoading">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    const navlist = [
      {
        name: 'Home',
        path: '/',
        image: require('./assets/image/home-bg.jpg'),
        title: 'Ko00 Blog',
        subtitle: 'Live Simply'
      },
      {
        name: 'About',
        path: '/about',
        image: require('./assets/image/about-bg.jpg'),
        title: 'About',
        subtitle: 'ko00'
      },
      {
        name: 'Tags',
        path: '/tags',
        image: require('./assets/image/tags-bg.jpg'),
        title: 'Tags',
        subtitle: ''
      }
    ]
    return {
      // 配置部分
      config: {
        /**
         * 为了应对loading一闪而过的问题，设置最小的loading存在时间
         * */
        minLoadTime: 500
      },
      // 作者
      author: 'Ko00',
      // 当前页面信息
      currentPage: {},
      // 导航列表
      navlist,
      // 标记minibar是否显示
      isMiniBar: false,
      // 超过768的时候，用来控制是否固定导航
      fixed: false,
      // loading的显示隐藏
      isShowLoading: false
    }
  },
  computed: mapState(['timeDiff']),
  watch: {
    $route() {
      this.getCurPage()
    }
  },
  beforeMount() {
    this.getCurPage()
  },
  mounted() {
    this.checkIsFixedOByScroll()
  },
  methods: {
    // 事件
    handleToggleMiniNav() {
      this.isMiniBar = !this.isMiniBar
    },
    // 
    // 方法
    checkIsFixedOByScroll() {
      const onscroll = () => {
        const doc_scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        const bannerElHeight = this.$refs['banner'].clientHeight
        this.fixed = doc_scrollTop >= bannerElHeight
      }
      window.addEventListener('scroll', onscroll)
    },
    getCurPage() {
      this.currentPage = this.navlist.find(c => c.name === this.$route.name)
    },
    onSwitchShowLoading(sign) {
      const timeDiff = this.timeDiff
      const minLoadTime = this.config.minLoadTime
      if (!sign && timeDiff < minLoadTime) {
        const timer = setTimeout(() => {
          clearTimeout(timer)
          this.isShowLoading = sign
        }, minLoadTime - timeDiff)
        return
      }
      this.isShowLoading = sign
    }
  }
}
</script>
