<!--
 * @Author: your name
 * @Date: 2020-06-19 14:44:08
 * @LastEditTime: 2021-01-08 16:08:21
 * @LastEditors: zzz
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\my\src\components\view\RowMiddleMap.vue
-->
<template>
	<div style="width: 80%;height: 120%;margin: 0 auto;">
    <div id="textfeixian" style="width: 100%;height:100%;"></div>

	</div>

</template>

<script>
import geoJson from '@/utils/sichuan.json'
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

      },
      myChart: '',
      coord: [],
      linesCoord: []

    }
  },
  mounted () {
    // 处理数据 得到飞线图
    this.setData(geoJson)
    this.$echarts.registerMap('SC', geoJson)
    this.myChart = this.$echarts.init(document.getElementById('textfeixian'))
    window.resize = () => {
      this.myChart.resize()
    }
    this.initOption()
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
    },
    setData (mapData) {
      const coord = mapData.features.map(val => {
        return {
          name: val.properties.name,
          value: val.properties.center
        }
      })
      this.coord = coord
      const linesCoord = []
      coord.forEach((v, index) => {
        index > 0 && linesCoord.push({
          coords: [v.value, coord[0].value]
        })
      })
      this.linesCoord = linesCoord
      // 地市取简称
      mapData.features.forEach(v => {
        v.properties.name = v.properties.name.indexOf('攀枝花') > -1 ? v.properties.name.substr(0, 3) : v.properties.name.substr(0, 2)
      })
    },
    initOption () {
      let options = {
        title: {
          text: '四川 （2011）'
        },
        visualMap: {
          show: false,
          min: 800,
          max: 50000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['#3EB9E2', '#3B83B4', '#275574']
          }
        },
        geo: {
          map: 'SC',
          id: 1,
          zlevel: 10,
          show: true,
          layoutCenter: ['50%', '50%'],
          roam: false,
          aspectScale: 0.92,
          layoutSize: '100%',
          zoom: 1,
          label: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 12,
                color: '#ffdb5c'
              }
            }
          },
          itemStyle: {
            normal: {
              color: '#062031',
              borderWidth: 1.1,
              borderColor: '#43D0D6'
            }
          },
          emphasis: {
            areaColor: '#FFB800',
            label: {
              show: false
            }
          }
        },
        series: [
          {
            type: 'effectScatter', // 每个城市都有的
            coordinateSystem: 'geo',
            zlevel: 15,
            symbolSize: 5,
            rippleEffect: {
              period: 4,
              brushType: 'stroke',
              scale: 4
            },
            itemStyle: {
              color: '#FFB800',
              opacity: 1
            },
            data: this.coord.slice(1)
          },
          {
            type: 'effectScatter', // 大的那个
            coordinateSystem: 'geo',
            zlevel: 15,
            symbolSize: 8,
            rippleEffect: {
              period: 6,
              brushType: 'stroke',
              scale: 8
            },
            itemStyle: {
              color: '#FF5722',
              opacity: 1
            },
            data: this.coord.slice(0, 1)
          },
          {
            type: 'lines', // 线数据
            coordinateSystem: 'geo',
            zlevel: 15,
            effect: {
              show: true,
              // period: 5,
              trailLength: 0.5,
              symbol: 'pin',
              symbolSize: 3,
              color: '#ffde93',
              constantSpeed: 35
              // trailLength: 0.1,
              // symbolSize: 1.5
            },
            lineStyle: {
              normal: {
                width: 0.5,
                opacity: 0.2,
                curveness: 0.2,
                color: 'rgba(103, 224, 227, .3)'}
            },
            data: this.linesCoord
          },
          {
            name: '四川',
            type: 'map',
            geoIndex: 0,
            // map: 'SC', // 自定义扩展图表类型
            top: '7%',
            bottom: '7%',
            label: {
              show: true,
              color: '#ffdb5c',
              fontSize: 14
            },
            aspectScale: 0.92,
            // itemStyle: {
            //   areaColor: '#3EB9E2'
            // },
            data: [
              {name: '成都', value: 220057.34},
              {name: '德阳', value: 15477.48},
              {name: '绵阳', value: 31686.1},
              {name: '广元', value: 6992.6},
              {name: '巴中', value: 44045.49},
              {name: '达州', value: 40689.64},
              {name: '南充', value: 37659.78},
              {name: '广安', value: 45180.97},
              {name: '遂宁', value: 55204.26},
              {name: '阿坝', value: 21900.9},
              {name: '甘孜', value: 4918.26},
              {name: '雅安', value: 5881.84},
              {name: '眉山', value: 4178.01},
              {name: '资阳', value: 2227.92},
              {name: '内江', value: 2180.98},
              {name: '乐山', value: 9172.94},
              {name: '自贡', value: 3368},
              {name: '泸州', value: 2368},
              {name: '攀枝花', value: 33268},
              {name: '凉山', value: 3368},
              {name: '宜宾', value: 806.98}
            ]
          }
        ]

      }
      this.myChart.setOption(options)
    }

  }
}
</script>

<style>

</style>
