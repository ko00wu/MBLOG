<template>
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
</template>

<script>
export default {
  name: 'app-nav',
  props: {
    author: String,
    navlist: Array,
    fixed: Boolean
  },
  data() {
    return {
      isMiniBar: false
    }
  },
  methods: {
    // 事件
    handleToggleMiniNav() {
      this.isMiniBar = !this.isMiniBar
    }
  }
}
</script>

<style lang="scss" scoped>
// 头部导航
#nav {
  position: fixed;
  z-index: 3;
  left: 0;
  right: 0;
  width: 100%;
  line-height: 50px;
  background-color: rgba(160, 82, 45, 0.7);
  transition: background-color 0.3s;
  border-radius: 0 0 5px 5px;
  a {
    text-transform: uppercase;
    font-weight: 800;
    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  }
}
.nav__author {
  float: left;
  padding-left: 20px;
  a {
    font-size: 22px !important;
    text-transform: capitalize !important;
    color: hsla(0, 0, 100%, 0.8);
    font-weight: 800;
  }
}
.nav__right {
  display: none;
  float: right;
  margin-right: 15px;
  @mixin activeStyle {
    color: #fff;
  }
  li {
    float: left;
    margin-left: 20px;
    padding-top: 10px;
    line-height: 28px;
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      transform: scaleX(0);
      transition: all 0.2s ease-in-out;
      background-color: hsla(0, 0%, 100%, 0.7);
    }
    &:hover {
      a {
        @include activeStyle;
      }
      &::after {
        transform: scaleX(1);
      }
    }
  }
  a {
    color: hsla(0, 0%, 100%, 0.7);
    &.router-link-exact-active {
      @include activeStyle;
    }
  }
}
.nav__toggleBtn {
  line-height: 1;
  padding: 8px 12px;
  margin-right: 15px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  color: hsla(0, 0, 100%, 0.8);
}
.nav__minibar {
  padding-bottom: 5px;
  li {
    /**
      由于字体的影响，导致第一个li里面的文字对齐方式奇异，必须设置float才可以
    */
    float: left;
    width: 100%;
    line-height: 30px;
    padding-left: 20px;
  }
  a {
    font-size: 12px;
    color: hsla(0, 0, 100%, 0.8);
    &:hover {
      color: #fff;
    }
    &.router-link-exact-active {
      color: #fff;
    }
  }
}

// nav mediaQuery
@media (min-width: 768px) {
  // 头部导航
  #nav {
    background-color: transparent;
    &.fixed {
      background-color: rgba(160, 82, 45, 0.7);
    }
  }
  .nav__toggleBtn {
    display: none;
  }
  .nav__author {
    a {
      color: hsla(0, 0%, 100%, 0.7);
    }
  }
  .nav__right {
    display: block;
  }
  .nav__minibar {
    display: none;
  }
}
</style>
