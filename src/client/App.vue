<template>
  <div id="app">
    <!-- 全局挂载svg -->
    <global-svg></global-svg>
    <app-nav :author="author" :navlist="navlist" :fixed="fixed"></app-nav>
    <banner :bannerMsg="bannerMsg" :isMajor="isMajor" ref="banner"></banner>
    <transition name="fade">
      <router-view class="container" @onIsShowLoading="onSwitchShowLoading"></router-view>
    </transition>
    <loading v-show="isShowLoading"></loading>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GlobalSvg from './components/Svg.vue'
import AppNav from './components/Nav.vue'
import AppFooter from './components/Footer.vue'
import Banner from './components/Banner.vue'
import Loading from './components/Loading.vue'

export default {
  name: 'App',
  components: {
    GlobalSvg,
    AppNav,
    AppFooter,
    Banner,
    Loading
  },
  data() {
    // 导航列表
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
    // 是否是主页
    const isMajor = this.$route.name !== 'Post'
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
      bannerMsg: {},
      // 导航列表
      navlist,
      // 超过768的时候，用来控制是否固定导航
      fixed: false,
      // loading的显示隐藏
      isShowLoading: false,
      // 是否是主页
      isMajor
    }
  },
  computed: mapState(['timeDiff']),
  watch: {
    $route() {
      this.getCurPage()
    }
  },
  beforeMount() {
    this.getBannerMsg()
  },
  mounted() {
    this.checkIsFixedByScroll()
  },
  methods: {
    // 监听函数
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
    },
    // 方法
    checkIsFixedByScroll() {
      const onscroll = () => {
        const doc_scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        const bannerElHeight = this.$refs['banner'].$el.clientHeight
        this.fixed = doc_scrollTop >= bannerElHeight
      }
      window.addEventListener('scroll', onscroll)
    },
    getBannerMsg() {
      this.bannerMsg = this.navlist.find(c => c.name === this.$route.name)
    }
  }
}
</script>
