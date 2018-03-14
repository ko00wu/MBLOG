<template>
  <div id="banner" :style="{'background-image':`url(${bannerMsg.image || ''})`}">
    <div class="banner__pageTitle container" :class="isMajor ? 'major' : 'minor'">
      <h1 v-text="bannerMsg.title || ''"></h1>
      <template v-if="isMajor">
        <hr>
      </template>
      <p v-text="bannerMsg.subtitle || ''" class="subtitle"></p>
      <template v-if="!isMajor">
        <span class="tip" v-for="(tag,tIndex) in bannerMsg.tags" :key="tag.name">
          <router-link class="a" :to="`/tags?name=${tag.name}`" v-text="tag.label"></router-link>{{tIndex === (bannerMsg.tags.length - 1) ? '':'，'}}
        </span>
        <p class="tip p">Posted on {{bannerMsg.createdTime || ''}}</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    bannerMsg: {
      type: Object,
      defaultValue: {}
    },
    isMajor: Boolean
  }
}
</script>

<style lang="scss" scoped>
// banner
#banner {
  position: relative;
  z-index: 1;
  height: 240px;
  margin-bottom: 32px;
  background: no-repeat 50%;
  background-size: cover;
}
.banner__pageTitle {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  width: calc(100% - 30px);
  transform: translate(-50%, -50%);
  color: #fff;
  h1 {
    margin: 60px 0 0;
    font-size: 50px;
    font-family: Lora, Times New Roman, serif;
  }
  hr {
    width: 100px;
    // 将hr设置成可控的线
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-width: 4px;
    border-color: #fff;
    //
  }
  p {
    margin-top: 10px;
    font-size: 24px;
    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-seri;
    font-weight: 300;
  }

  // 主页面 banner样式
  &.major {
    text-align: center;
  }
  &.minor {
    h1 {
      text-align: left;
      font-size: 35px;
    }
    .subtitle {
      font-size: 24px;
    }
    .tip {
      color: #fff;
      font-family: Lora, Times New Roman, serif;
      font-size: 20px;
    }
    .a {
      color: #fff;
      font-size: 20px;
    }
  }
}
// banner mediaQuery
@media (min-width: 768px) {
  #banner {
    height: 407px;
    h1 {
      margin-top: 0;
      font-size: 80px;
    }
  }
  .banner__pageTitle {
    width: 80%;
    &.minor {
      h1 {
        font-size: 55px !important;
      }
      .subtitle {
        font-size: 30px;
      }
    }
  }
}
// banner mediaQuery
@media (min-width: 992px) {
  .banner__pageTitle {
    width: 60%;
  }
}

// minor tip
.tip {
  $tip_fz: 16px;
  color: gray;
  font-style: italic;
  .a {
    font-size: $tip_fz;
    &:hover {
      text-decoration: underline;
    }
  }
  &.p {
    font-size: $tip_fz;
    margin: 0;
  }
}
</style>
