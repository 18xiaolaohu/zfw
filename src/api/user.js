import request from '@/utils/request'
import store from '@/store'

/**
 * 登录
 * @param { username, password } param0
 * @returns
 */
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: 'user/login',
    data: {
      username,
      password
    }
  })
}

/**
 * 获取用户个人资料 token值
 * @returns
 */
export const getUserInfo = () => {
  return request({
    url: 'user',
    headers: {
      authorization: store.state.user.token
    }
  })
}
/**
 * 刷新token
 * @param {String} refreshToken - 保存的refresh_token
 * @returns
 */
