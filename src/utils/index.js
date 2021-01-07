/*
 * @Author: your name
 * @Date: 2020-06-23 17:14:07
 * @LastEditTime: 2020-07-15 15:22:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\my\src\utils\index.js
 */
/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

/**
 * @description 获取两个数之间的随机数
 * @param {Number} maxNum 最大数
 * @param {Number} minNum 最小数
 * @param {Number} decimalNum 如果生成的是带有小数的随机数，则指定随机数的小数点后的位数
 */
export function randomNum (maxNum, minNum, decimalNum) {
  var max = 0
  var min = 0
  minNum <= maxNum ? (min = minNum, max = maxNum) : (min = maxNum, max = minNum)
  switch (arguments.length) {
    case 1:
      return Math.floor(Math.random() * (max + 1))
    case 2:
      return Math.floor(Math.random() * (max - min + 1) + min)
    case 3:
      return (Math.random() * (max - min) + min).toFixed(decimalNum)
    default:
      return Math.random()
  }
}

/**
 * @description 根据数组对象属性值排序
 * @param {String} property 属性名
 * @param {Boolean} true 排序方式
 * 使用方法 arrays.sort(compare("age"))
 */
export function compare (property, desc) {
  return function (a, b) {
    var value1 = a[property]
    var value2 = b[property]
    if (desc === true) {
      // 升序排列
      return value1 - value2
    } else {
      // 降序排列
      return value2 - value1
    }
  }
}

/**
 * @description 从数组中随机取几个
 * @param {String} property 属性名
 * @param {Boolean} true 排序方式
 * 使用方法 arrays.sort(compare("age"))
 */
export function getRandomArrayElements (arr, count) {
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random())
    temp = shuffled[index]
    shuffled[index] = shuffled[i]
    shuffled[i] = temp
  }
  return shuffled.slice(min)
}
