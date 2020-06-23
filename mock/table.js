/*
 * @Author: your name
 * @Date: 2020-06-23 17:12:25
 * @LastEditTime: 2020-06-23 17:26:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \bpsp-uie:\ICBC\my\mock\table.js
 */
import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        Status: 200,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
