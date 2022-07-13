<template>
  <div>
    <!-- 已登录 -->
    <div
      class="header header-login"
      v-if="$store.state.user && $store.state.user.token"
    >
      <van-image src="http://liufusong.top:8080/img/avatar.png" />
      <div class="my-info">
        <van-image width="60px" height="60px" :src="userInfo.avatar" round />
        <p>{{ userInfo.nickname }}</p>
        <van-button type="primary" size="small" round @click="logout"
          >退出</van-button
        >
        <i>编辑个人资料<span>▶</span></i>
      </div>
    </div>
    <!-- 未登录 -->
    <div class="header header-notlogin" v-else>
      <van-image src="http://liufusong.top:8080/img/profile/bg.png" />
      <div class="my-info">
        <van-image
          width="60px"
          height="60px"
          src="http://liufusong.top:8080/img/profile/avatar.png"
          round
        />
        <p>游客</p>
        <van-button type="primary" size="small" @click="$router.push('/login')"
          >去登录</van-button
        >
      </div>
    </div>
    <!-- 6个选项 -->
    <van-grid :column-num="3">
      <van-grid-item text="我的收藏">
        <template #icon>
          <van-icon name="star-o" />
        </template>
      </van-grid-item>
      <van-grid-item text="我的出租">
        <template #icon>
          <van-icon name="wap-home-o" />
        </template>
      </van-grid-item>
      <van-grid-item text="看房记录">
        <template #icon>
          <van-icon name="underway-o" />
        </template>
      </van-grid-item>
      <van-grid-item text="成为房主">
        <template #icon>
          <van-icon name="paid" />
        </template>
      </van-grid-item>
      <van-grid-item text="个人资料">
        <template #icon>
          <van-icon name="user-o" />
        </template>
      </van-grid-item>
      <van-grid-item text="联系我们">
        <template #icon>
          <van-icon name="service-o" />
        </template>
      </van-grid-item>
    </van-grid>
    <div class="my-ditou">
      <van-image src="http://liufusong.top:8080/img/profile/join.png" />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import { mapState } from 'vuex'
export default {
  name: 'My',
  async created () {
    if (this.$store.state.user && this.$store.state.user.token) {
      try {
        const res = await getUserInfo()
        console.log('re1s', res)
        this.userInfo = res.data.body
      } catch (err) {
        console.log(err)
      }
    }
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({ message: '确认退出吗' })
        this.$store.commit('setUser', {})
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  min-height: 300px;
}
.header-login {
  .van-image {
    width: 100%;
  }
  .my-info {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 318px;
    height: 207px;
    background-color: #fff;
    box-shadow: 0 0 10px 3px #ddd;
    margin: 170px;
    .van-image {
      margin-top: -25px;
      border: 5px solid #f5f5f5;
    }
    p {
      font-size: 13px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .van-button {
      width: 54px;
      height: 20px;
    }
    i {
      color: #999;
      font-size: 12px;
      margin-top: 20px;
      span {
        font-size: 10px;
      }
    }
  }
}
.header-notlogin {
  .my-info {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 318px;
    height: 165px;
    background-color: #fff;
    box-shadow: 0 0 10px 3px #ddd;
    margin: 110px auto 0;
    .van-image {
      margin-top: -25px;
      border: 5px solid #f5f5f5;
    }
    p {
      font-size: 13px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .van-button {
      width: 80px;
      border-radius: 5px;
    }
  }
}
.van-grid {
  margin-bottom: 20px;
}
.my-ditou {
  width: 345px;
  height: 85px;
  margin: 0 auto;
  box-sizing:unset;
}
</style>
