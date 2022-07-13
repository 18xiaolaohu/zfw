import request from '@/utils/request'

/**
 * 获取城市列表数据
 * @returns
 */
export const getCity = () => {
  return request({
    url: 'area/city?level=1'
  })
}

/**
 * 获取热门城市
 * @returns
 */
export const getHot = () => {
  return request({
    url: 'area/hot'
  })
}
