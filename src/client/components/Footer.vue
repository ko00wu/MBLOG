<template>
  <footer id="footer">
      <p>
        <a v-for="b in brands" class="brand" :href="b.url" target="_blank">
          <svg>
            <use :xlink:href="`#${b.name}`"></use>
          </svg>
        </a>
      </p>
      <p class="copyright">Copyright &copy; ko00 2018</p>
    </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data() {
    // 配置项
    const brandList = [
      {
        name: 'douban',
        url: ''
      },
      {
        name: 'github',
        url: 'https://github.com/KloveML'
      },
      {
        name: 'jianshu',
        url: ''
      },
      {
        name: 'zhihu',
        url: ''
      }
    ]
    const curBrands = brandList.filter(b => !!b.url)
    return {
      brands: curBrands
    }
  }
}
</script>


<style lang="scss" scoped>
#footer {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
}
.brand {
  box-sizing: border-box;
  display: inline-block;
  width: 48px;
  height: 48px;
  padding: 12px;
  margin-right: 10px;
  background-color: #404040;
  border-radius: 50%;
  &:hover {
    opacity: 0.7;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: #fff;
  }
}
.copyright {
  font-size: 12px;
  color: #666;
}
</style>
