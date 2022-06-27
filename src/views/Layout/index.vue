<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/home" icon="home-o"
        >首页
        <template #icon>
          <van-icon name="wap-home-o" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/seek" icon="search"
        >找房
        <template #icon>
          <van-icon name="search" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/counsel" icon="friends-o"
        >咨询
        <template #icon>
          <van-icon name="description" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="setting-o"
        >我的
        <template #icon>
          <van-icon name="user-o" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      active: 0
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
.van-icon {
  font-size: 25px;
}
/deep/.van-tabbar-item__text {
  font-size: 15px;
}
</style>
