<template>
  <div>
    <!-- 登录-顶部导航栏 -->
    <van-nav-bar title="城市列表" @click-left="$router.back()">
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <div class="city-list">
      <h3>当前城市</h3>
      <van-cell title="文本" />
      <h3>热门城市</h3>
      <van-cell
        v-for="(item, index) in rmcitylist"
        :key="index"
        :title="item.label"
      />
      <van-index-bar>
        <template>
          <van-index-anchor
            index="2"
            v-for="(item, index) in cityindex"
            :key="index"
            >{{ item }}</van-index-anchor
          >
          <van-cell
            v-for="(item, index) in citylist"
            :key="index"
            :title="item.label"
          />
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { getCity, getHot } from '@/api/area'
export default {
  created () {
    this.getCitylist()
    this.getHotlist()
  },
  data () {
    return {
      list: [],
      rmcitylist: [],
      indexList: ['#', '热', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      citylist: [],
      cityindex: []
    }
  },
  methods: {
    // 城市列表
    async getCitylist () {
      try {
        const res = await getCity()
        console.log('城市列表数据', res)
        this.list = res.data.body
        this.list.forEach(item => {
          const first = item.short.substr(0, 1)
          const cityfenlei = []
          // console.log(first)
          if (this.cityfenlei[first]) {
            cityfenlei[first].push(item)
          } else {
            cityfenlei[first] = [item]
          }
          this.citylist = cityfenlei[first]
          console.log(this.citylist)
        })
        const firstPinyin = Object.keys(this.citylist).sort()
        this.cityindex = firstPinyin
        console.log(this.cityindex)
      } catch (err) {
        console.log(err)
      }
    },
    // 热门城市
    async getHotlist () {
      try {
        const res = await getHot()
        console.log('res', res)
        this.rmcitylist = res.data.body
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.city-list {
  h3 {
    font-size: 15px;
    font-weight: 400;
    padding: 9px 15px;
    color: #999;
  }
}
</style>
