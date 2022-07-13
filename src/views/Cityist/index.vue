<template>
  <div>
    <!-- 登录-顶部导航栏 -->
    <van-nav-bar title="城市列表" @click-left="$router.back()">
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell title="北京" />
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        :title="item.label"
        v-for="(item, index) in hotlist"
        :key="index"
      />
      <div v-for="(item, name) in citylish" :key="name">
        <van-index-anchor index="name">{{ name }}</van-index-anchor>
        <van-cell
          :title="item1.label"
          v-for="(item1, index) in item"
          :key="index"
          @click="$toast('该城市暂时没有房源')"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCity, getHot } from '@/api/area'
export default {
  async created () {
    try {
      // 热门城市
      const res = await getHot()
      console.log('热门城市', res)
      this.hotlist = res.data.body
      // 城市列表
      const res1 = await getCity()
      console.log('城市列表', res1)
      // 对城市首字母进行分类
      const citys = {}
      this.cityfenlei.forEach((item) => {
        citys[item] = []
        res1.data.body.forEach((el) => {
          const first = el.pinyin.substring(0, 1).toUpperCase()
          if (first === item) {
            citys[item].push(el)
          }
        })
      })
      this.citylish = citys
      console.log(citys)
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      hotlist: [],
      citylish: [],
      indexList: ['#', '热', 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'Q', 'S', 'T', 'W', 'X', 'Y', 'Z'],
      cityfenlei: ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'Q', 'S', 'T', 'W', 'X', 'Y', 'Z']
    }
  },
  methods: {
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
