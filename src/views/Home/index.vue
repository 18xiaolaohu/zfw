<template>
  <div>
    <!-- 滚动图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image src="http://liufusong.top:8080/img/swiper/1.png" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image src="http://liufusong.top:8080/img/swiper/2.png" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image src="http://liufusong.top:8080/img/swiper/3.png" />
      </van-swipe-item>
    </van-swipe>
    <!-- 4个选项 -->
    <van-grid>
      <van-grid-item text="整租">
        <template #icon>
          <van-image width="50" height="50" src="../../assets/logo.png" />
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="合租" />
      <van-grid-item icon="photo-o" text="地图找房" />
      <van-grid-item icon="photo-o" text="去出租" />
    </van-grid>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.my-swipe .van-swipe-item {
  color: #fff;
  height: 212px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
