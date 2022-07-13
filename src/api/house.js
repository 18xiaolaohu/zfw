import request from '@/utils/request'

export const getHouse = () => {
  return request({
    url: 'houses'
  })
}
