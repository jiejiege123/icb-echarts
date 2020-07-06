<!--
 * @Author: your name
 * @Date: 2020-06-19 14:44:08
 * @LastEditTime: 2020-06-24 17:51:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\my\src\components\view\RowMiddleMap.vue
-->
<template>
	<div style="width: 70%;height: 120%;margin: 0 auto;">
		<dv-flyline-chart-enhanced :dev="true" :config="config" style="width:100%;height:100%;" />
	</div>

</template>

<script>
export default {
  name: 'RowMiddleMap',
  props: {
    lines: {
      type: Array,
      default () {
        return [
          {
            source: '遂宁',
            target: '后台中心'
          },
          {
            source: '攀枝花',
            target: '后台中心'
          },
          {
            source: '宜宾',
            target: '后台中心'
          },
          {
            source: '成都',
            target: '后台中心'
          },
          {
            source: '阿坝',
            target: '后台中心'
          },
          {
            source: '达州',
            target: '后台中心'
          }
        ]
      }
    },
    points: {
      type: Array,
      default () {
        return [
          {
            name: '后台中心',
            icon: {
              src: require('@/assets/mapCenterPoint.png'),
              width: 30,
              height: 30
            },
            coordinate: [0.59, 0.47],
            halo: {
              show: true
            }
          },
          {
            name: '遂宁',
            coordinate: [0.72, 0.46]
          },
          {
            name: '攀枝花',
            coordinate: [0.39, 0.82]
          },
          {
            name: '宜宾',
            coordinate: [0.65, 0.66]
          },
          {
            name: '成都',
            coordinate: [0.53, 0.44]
          },
          {
            name: '阿坝',
            coordinate: [0.48, 0.29]
          },
          {
            name: '达州',
            coordinate: [0.88, 0.40]
          }
        ]
      }
    }
  },
  watch: {
    lines (news, old) {
      this.setLines(news)
    },
    points (news, old) {
      this.setPoints(news)
    }
  },
  data () {
    return {
      config: {
        points: [
          {
            name: '后台中心',
            icon: {
              src: require('@/assets/mapCenterPoint.png'),
              width: 30,
              height: 30
            },
            coordinate: [0.59, 0.47],
            halo: {
              show: true
            }
          },
          {
            name: '遂宁',
            coordinate: [0.72, 0.46]
          },
          {
            name: '攀枝花',
            coordinate: [0.39, 0.82]
          },
          {
            name: '宜宾',
            coordinate: [0.65, 0.66]
          },
          {
            name: '成都',
            coordinate: [0.53, 0.44]
          },
          {
            name: '阿坝',
            coordinate: [0.48, 0.29]
          },
          {
            name: '达州',
            coordinate: [0.88, 0.40]
          }
        ],
        lines: [
          {
            source: '遂宁',
            target: '后台中心'
          },
          {
            source: '攀枝花',
            target: '后台中心'
          },
          {
            source: '宜宾',
            target: '后台中心'
          },
          {
            source: '成都',
            target: '后台中心'
          },
          {
            source: '阿坝',
            target: '后台中心'
          },
          {
            source: '达州',
            target: '后台中心'
          }
        ],
        text: {
          show: true
        },
        icon: {
          show: true,
          src: require('@/assets/mapPoint.png')

        },
        bgImgSrc: require('@/assets/map2.png')

      }
    }
  },
  methods: {
    setLines (data) {
      const { config } = this
      config.lines = data
      this.config = { ...config }
    },
    setPoints (data) {
      const { config } = this
      config.points = data
      this.config = { ...config }
    }
  }
}
</script>

<style>

</style>
