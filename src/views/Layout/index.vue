<template>
  <div>
    <router-view class="main"></router-view>
    <van-tabbar route>
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
.main {
  margin-bottom: 50px;
}
</style>
