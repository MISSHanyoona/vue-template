<template>
  <div>
    <headerTop></headerTop>
    <headerNavNew></headerNavNew>
    <!-- <headerSearch></headerSearch> -->
    <div class="page-main-nuxt"><nuxt /></div>
    <newfooter></newfooter>
    <globalPinning></globalPinning>
  </div>
</template>

<script>
import headerNavNew from '~/components/header/headerNavNew.vue'
import headerSearch from '~/components/header/headerSearch.vue'
import headerTop from '~/components/header/headerTop.vue'
import newfooter from '~/components/footer/footer.vue'
import globalPinning from '~/components/globalPinning/globalPinning.vue'

export default {
  components: {
    headerNavNew,
    headerSearch,
    headerTop,
    newfooter,
    globalPinning
  },
  data(){
    return{
    }
  },
  
  scrollToTop: true,
  methods: {
    
  },
  mounted(){
  }
}
</script>
<style scoped>

html {
  font-family: "微软雅黑", Arial, "Trebuchet MS", Verdana, Georgia, Baskerville,
    Palatino, Times;
  /* font-size: 16px; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.page-main-nuxt{
  min-height: calc(100vh - 388px);
}
</style>
