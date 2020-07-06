/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 09:31:42
 * @LastEditTime: 2020-06-24 17:04:32
 * @LastEditors: Please set LastEditors
 */
import request from '@/utils/request'
// import qs from 'qs'

// 获取模拟数据
export function getMokeTest () {
  return request({
    url: '/view',
    method: 'get'
  })
}
