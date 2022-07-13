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
    <!-- 滚动图 -->

    <!-- 4个选项 -->
    <van-grid>
      <van-grid-item text="整租">
        <template #icon>
          <van-image
            width="50"
            height="50"
            :src="require('@/assets/zhengzu.png')"
          />
        </template>
      </van-grid-item>
      <van-grid-item text="合租">
        <template #icon>
          <van-image
            width="50"
            height="50"
            :src="require('@/assets/hezu.png')"
          />
        </template>
      </van-grid-item>
      <van-grid-item text="地图找房">
        <template #icon>
          <van-image
            width="50"
            height="50"
            :src="require('@/assets/dituzhaofang.png')"
          />
        </template>
      </van-grid-item>
      <van-grid-item text="去出租">
        <template #icon>
          <van-image
            width="50"
            height="50"
            :src="require('@/assets/quchuzu.png')"
          />
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 4个选项 -->

    <!-- 租房小组 -->
    <div class="zfxz-bt">
      <h3>租房小组</h3>
      <p>更多</p>
    </div>
    <van-grid direction="horizontal" :column-num="2" :gutter="10">
      <van-grid-item>
        <template #icon>
          <van-image
            width="60"
            height="60"
            :src="require('@/assets/zhengzu.png')"
          />
        </template>
        <template #text>
          <div class="zfxz-wz">
            <p>家住回龙观</p>
            <p>归属的感觉</p>
          </div>
        </template>
      </van-grid-item>
      <van-grid-item>
        <template #icon>
          <van-image
            width="60"
            height="60"
            :src="require('@/assets/zhengzu.png')"
          />
        </template>
        <template #text>
          <div class="zfxz-wz">
            <p>家住回龙观</p>
            <p>归属的感觉</p>
          </div>
        </template>
      </van-grid-item>
      <van-grid-item>
        <template #icon>
          <van-image
            width="60"
            height="60"
            :src="require('@/assets/zhengzu.png')"
          />
        </template>
        <template #text>
          <div class="zfxz-wz">
            <p>家住回龙观</p>
            <p>归属的感觉</p>
          </div>
        </template>
      </van-grid-item>
      <van-grid-item>
        <template #icon>
          <van-image
            width="60"
            height="60"
            :src="require('@/assets/zhengzu.png')"
          />
        </template>
        <template #text>
          <div class="zfxz-wz">
            <p>家住回龙观</p>
            <p>归属的感觉</p>
          </div>
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 租房小组 -->

    <!-- 搜索 -->
    <div class="sousuok">
      <van-search v-model="value" placeholder="请输入搜索关键词">
        <template #label>
          <p @click="$router.push('/cityist')">北京 ▽ |</p>
        </template>
      </van-search>
      <van-icon name="location-o" @click="$router.push('/map')"/>
    </div>
    <!-- 搜索 -->
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      value: ''
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
  .van-image{
    width: 100%;
    height: 100%;
  }
}
.zfxz-bt {
  padding-top: 20px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f7f9;
  h3 {
    font-size: 15px;
    margin-left: 20px;
  }
  p {
    font-size: 12px;
    margin-right: 20px;
  }
}
.zfxz-wz {
  font-size: 12px;
  font-weight: 700;
  margin-left: 20px;
}
.van-grid {
  background-color: #f5f7f9;
}
.sousuok {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  top: 15px;
  .van-search {
    width: 310px;
    height: 34px;
    // unset:把本来设置的属性去掉
    background-color: unset;
    padding: unset;
  }
  .van-icon {
    color: #fff;
  }
}
</style>
