<template>
  <div>
    <!-- 登录-顶部导航栏 -->
    <van-nav-bar title="账号登录" @click-left="$router.back()">
      <template #left >
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <!-- 提交表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        label-width="10px"
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
      />
      <div style="margin: 16px">
        <van-button round block native-type="submit" class="login-btn"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: 'itheima',
      password: '123456'
    }
  },
  methods: {
    async onSubmit (values) {
      console.log('submit', values)
      try {
        const res = await login(values)
        console.log(res)
        this.$store.commit('setUser', res.data.data)
        this.$router.push({ name: 'my' })
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
.van-icon {
  font-size: 25px;
}
.login-btn {
  width: 345px;
  height: 50px;
  background-color: #21b97a;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
}
</style>
