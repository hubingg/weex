<template>
  <div>
    <div class="back" @click="toBack"></div>
    <image :src="goodsInfo.detailHeadPic" resize="cover" class="detail-image"></image>
  </div>
</template>

<script>
let navigator = weex.requireModule('navigator')
let modal = weex.requireModule('modal')
export default {
  name: '',
  data () {
    return {
      goodsInfo: ''
    }
  },
  methods: {
    toBack () {
      navigator.push({
        url: '/home',
        animated: "true"
      }, event => {
        modal.toast({ message: 'callback: ' + event })
      })
    }
  },
  created() {
    this.goodsInfo = this.$route.params.row
  },
}

</script>
<style lang='stylus' scoped>
.back
  height 50px
  width 50px
  border-radius 50%
  margin-left 16px
  background-color #f5f5f5 
  &:before
    content '＜'
    width 50px
    height 50px
    line-height 50px
    color #f88a0b
    font-size 50px
    font-weight 600
    text-align center
.detail-image
  width 750px
  height 450px
</style>