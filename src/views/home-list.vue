<template>
  <div class="warp">
    <scroller class="scroller" offset-accuracy="300" loadmoreoffset="300" @loadmore="onloadmore">
      <!-- 轮播图 -->
      <slider class="slider" auto-play="true" interval="1500" infinite="false">
        <div class="frame" v-for="(img, index) in imageList" :key="index">
          <image class="image" resize="cover" :src="img.src"></image>
        </div>
        <indicator class="indicator"></indicator>
      </slider>
    <!-- 商品列表 -->
      <div class="box">
        <div class="box-item" v-for="(item, index) in goodsList" :key="index" @click="onDetail(item)">
          <image class="item-image" :src="item.headPic"></image>
          <text class="item-name">{{item.goodsName}}</text>
          <text class="item-price">￥{{item.price}}</text>
        </div>
      </div>
      <loading class="loading" @loading="onloading" :display="showLoading">
        <text class="indicator">...</text>
      </loading>
    </scroller>
  </div>
</template>

<script>
let modal = weex.requireModule('modal')
export default {
  name: '',
  data () {
    return {
      showLoading: 'hide',
      imageList: [
        {
          src: 'http://a8-domain.pagoda.com.cn:11021/miResourceMgr/group1/M00/00/14/wKgBIFsyBuSAAlUzAANAr8jLXB4802.jpg?width=750&height=420'
        },
        {
          src: 'http://a8-domain.pagoda.com.cn:11021/miResourceMgr/group1/M00/00/18/wKgBIVsqDNKAMEpGAABWiFi9Qfs524.jpg?width=550&height=228'
        },
        {
          src: 'http://a8-domain.pagoda.com.cn:11021/miResourceMgr/group1/M00/00/17/wKgBHltrqj6AAya4AAGSHUsN5pE836.jpg'
        }
      ],
      listData: [
        {
          headPic: 'http://a8-domain.pagoda.com.cn:11021/miResourceMgr/group1/M00/00/0B/wKgAOFZrc6CAFdQvAABrBvmJZ2U367.jpg',
          goodsName: 'A级-进口金奇异果（中）',
          price: 0.01,
          detailHeadPic: 'http://a8-domain.pagoda.com.cn:11021/miResourceMgr//group1/M00/00/0B/wKgAN1Zrc7OAAR5OAAK2hYiOY_I979.jpg?width=0&height=0'
        },
        {
          headPic: 'http://a8-domain.pagoda.com.cn:11021/miResourceMgr/group1/M00/00/14/wKgAOFaCdQSAJo4nAABuo7EI8rU662.jpg',
          goodsName: '进口香蕉',
          price: 10,  
          detailHeadPic: 'http://a8-domain.pagoda.com.cn:11021/miResourceMgr//group1/M00/00/15/wKgAN1aCdRKAHKUYAAKrkL6o314666.jpg?width=750&height=420'
        },
        {
          headPic: 'http://a8-domain.pagoda.com.cn:11021/miResourceMgr/group1/M00/00/00/wKgAPVcpV22AaCE8AACJ8K-dn-E006.jpg?width=180&height=180',
          goodsName: '苹果',
          price: 10,  
          detailHeadPic: 'http://a8-domain.pagoda.com.cn:11021/miResourceMgr/group1/M00/00/06/wKgBIVgHK-OANsBIAAFJe1UW3pA766.jpg?width=750&height=400?width=750&height=400'
        },
        {
          headPic: 'http://a8-domain.pagoda.com.cn:11021/miResourceMgr/group1/M00/00/14/wKgAOFaCdQSAJo4nAABuo7EI8rU662.jpg',
          goodsName: '进口香蕉',
          price: 10,  
        }
      ],
      goodsList: []
    }
  },
  methods: {
    onDetail (row) {
      this.$router.push({name:'GoodsDetail', params: {row}})
    },
    onloadmore () {
      console.log(111)
    },
    onloading () {
      if(this.goodsList.length>20) {
        modal.toast({ message: '没有更多了', duration: 0.3 })
        return
      }
      modal.toast({ message: 'loading', duration: 0.3 })
      this.showLoading = 'show';
      setTimeout(() => {
        this.goodsList.push(...this.listData)
        this.showLoading = 'hide'
      }, 300)
    },
  },
  created() {
    this.goodsList.push(...this.listData)
  },
}

</script>
<style scoped lang="stylus">
.warp{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.image{
  width: 750px;
  height: 430px;
}
.slider{
  width: 750px;
  height: 430px;
}
.frame{
  width: 750px;
  height: 430px;
}
.indicator{
  width: 750px;
  height: 40px;
  position: absolute;
  bottom: 10px;
  right: 0px;
}
.scroller{
  // height: 500px;
  flex: 1;
}
.box{
  width: 750px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.box-item{
  width: 350px;
  height: 450px;
  margin-bottom: 20px;
  float: left;
}
.item-image{
  width: 350px;
  height: 350px;
  background-color: #f4f4f4;
}
.item-price{
  color: #f88a0b;
  font-size: 30px;
}
</style>