import request from '@/utils/request'

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
