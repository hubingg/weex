<template>
  <div>
    <div class="back"><text @click="toBack" class="back-btn">返回</text></div>
    <div class="goods-info">
      <image :src="goodsInfo.detailHeadPic" resize="cover" class="detail-image"></image>
      <div>
        <text class="item-name">{{goodsInfo.goodsName}}</text>
        <text class="item-price">￥{{goodsInfo.price}}</text>
      </div>
    </div>
    <div class="detail-footer">
      <text class="addcar-btn">加入购物车</text>
      <text class="share-btn">分享</text>
      <text class="buy-btn">立即购买</text>
    </div>
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
      // navigator.push({
      //   url: '/detail',
      //   animated: "true"
      // }, event => {
      //   modal.toast({ message: 'callback: ' + event })
      // })
      this.$router.go(-1)
    }
  },
  created() {
    this.goodsInfo = this.$route.params.row
  },
}

</script>
<style lang='stylus' scoped>
.back
  width 750px
  height 80px
  margin-left 16px
  background-color #f5f5f5
  position fixed
  top 0
  left 0
  &:before
    width 50px
.back-btn
  line-height 80px
.detail-image
  width 750px
  height 450px
.goods-info
  position fixed
  top 80px
  left 0
.detail-footer
  width 750px
  height 80px
  line-height 80px
  position fixed
  bottom 0
  flex-direction row
  justify-content space-between
  border-top-width 1px
  border-top-style solid
  border-top-color #f4f4f4
.buy-btn
  width 300px
  background-color #f88a0b
  color #ffffff
  text-align center
  height 80px
  line-height 80px
.addcar-btn
  width 250px
  background-color #f4f4f4
  text-align center
  height 80px
  line-height 80px
.share-btn
  width 225px
  text-align center
  height 80px
  line-height 80px
  background-color #f4f4f4
</style>