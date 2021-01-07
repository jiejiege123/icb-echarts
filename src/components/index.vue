<template>
	<div id="data-view">
		<!-- 全屏 -->
		<dv-full-screen-container :style="bgstyle">
			<!-- 第一列 -->
			<div style="display: flex;height: 15%;margin-top: 2%;">
				<div class="view-left-top">
					<left-top/>
				</div>
				<div class="view-middle-top">
					<middle-top/>
				</div>
				<div class="view-right-top">
					<right-top :eData="resTimes" />
				</div>
			</div>
			<!-- 第二列 -->
			<div style="display: flex;height: 50%;margin-top: 1%;">
				<div class="view-row-middle-left">
					<!-- 交易量 -->
					<row-middle-left
						:totalNumData="totalNumData"
						:dayNumData="dayNumData"
						:dayTransaction="dayTransaction"
						:allTransaction="allTransaction"
					/>
				</div>
				<div class="view-row-middle-map">
					<!-- 地图 -->
					<row-middle-map01 :lines="mapLines"  :points="mapData" />
					<!-- <row-middle-map :lines="mapLines"  :points="mapData" /> -->
				</div>
				<div class="view-row-middle-right">
					<!-- 响应时间 -->
					<row-middle-right
            :timeData="transactionRateXData"
						:severResTime="severResTime"
						:xData="transactionRankXData"
						:transactionRank="transactionRank" />
				</div>
			</div>
			<!-- 第三列 -->
			<div style="display: flex;height: 24%;margin-top: 1%;margin-bottom: 2%;">
				<div class="view-row-bottom-left">
					<!-- <line-charts title="交易率(笔/分钟)" :eData="transactionRate" /> -->
          <line-echarts :interval="4" :xData="transactionRateXData" title="交易率(笔/分钟)" :eData="transactionRate"
          idNo="trRate" />
				</div>
				<div style="width: 47%;display: flex;">
					<div class="view-row-bottom-left-one">
						<!-- <line-charts title="交易成功率(笔/分钟)" :eData="transactionSuccessRate" /> -->
            <line-echarts :interval="4" :xData="transactionRateXData" title="交易成功笔数(笔/分钟)" :eData="transactionSuccessRate"
            idNo="trSuccess" />
					</div>
					<div class="view-row-bottom-right">
						<!-- <line-charts
							title="交易并发量(笔/秒)"
							:eData="throughputMap"
							:formatter="througtputMapFormatter"
							:xData="througtputMapXData" /> -->
              <line-echarts
                title="交易并发量(笔/秒)"
                :eData="throughputMap"
                :xData="througtputMapXData"
                idNo="jiuy" />
					</div>
				</div>
				<div class="view-row-bottom-right-one">
					<radar-charts title="渠道种类交易占比"
						:list="channelTransactionList"
						:indicator="channelTransactionIndicator"
						:eData="channelTransaction" />
				</div>
			</div>
		</dv-full-screen-container>
    <!-- 错误提示 -->
    <div v-if="showError" class="error-warp">
      <div class="error-tip">
        {{error}}
      </div>
    </div>
	</div>
</template>

<script>
import LeftTop from './view/LeftTop.vue'
import MiddleTop from './view/MiddleTop.vue'
import RightTop from './view/RightTop.vue'
import RowMiddleLeft from './view/RowMiddleLeft.vue'
import RowMiddleMap from './view/RowMiddleMap.vue'
import RowMiddleMap01 from './view/RowMiddleMap01.vue'
import RowMiddleRight from './view/RowMiddleRight.vue'
import { getMokeTest } from '@/api/user.js'
import lineCharts from '@/components/view/lineCharts'
import lineEcharts from '@/components/view/lineEcharts'
import radarCharts from '@/components/view/radarCharts'
import { compare } from '@/utils/index'

export default {
  name: 'bigshow',
  components: {
    LeftTop,
    MiddleTop,
    RightTop,
    RowMiddleLeft,
    RowMiddleMap,
    RowMiddleMap01,
    RowMiddleRight,
    lineCharts,
    radarCharts,
    lineEcharts
  },
  data () {
    return {
      bgstyle: {
      // 'background-image': url(/static/bg.png)
        backgroundImage: `url(${require('@/assets/bg.png')})`
      },
      msg: '欢迎来到菜鸟教程！',
      error: '欢迎来到菜鸟教程！',
      showError: false,
      rightData: [],
      number1: 1234,
      timeEr: '',
      timeEr1: '',
      timeEr2: '',
      timeEr3: '',
      timeEr4: '',
      timeEr5: '',
      mapData: [],
      mapLines: [],
      resTimes: [],
      allTransaction: [],
      totalNumData: [],
      dayTransaction: [],
      dayNumData: [],
      severResTime: [],
      severResXData: [],
      transactionRank: [],
      transactionRankXData: [],
      transactionRate: [],
      transactionSuccessRate: [],
      transactionRateXData: [],
      transactionSuccessRateXData: [],
      channelTransaction: [],
      channelTransactionList: [],
      channelTransactionIndicator: [],
      throughputMap: [],
      througtputMapFormatter: (dataItem) => {
        return dataItem.value
      },
      througtputMapXData: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      areaJson: {
        '02302': '攀枝花',
        '02303': '自贡',
        '02304': '泸州',
        '02305': '德阳',
        '02306': '乐山',
        '02307': '内江',
        '02308': '绵阳',
        '02309': '广元',
        '02310': '遂宁',
        '02312': '资阳',
        '02313': '眉山',
        '02314': '宜宾',
        '02315': '南充',
        '02316': '广安',
        '02317': '达州',
        '02318': '巴中',
        '02319': '雅安',
        '02320': '凉山',
        '02321': '甘孜',
        '02322': '阿坝',
        '04402': '成都'
      },
      position: [
        {
          name: '攀枝花',
          code: '02302',
          lonlat: [0.39, 0.82]
        },
        {
          name: '自贡',
          code: '02303',
          lonlat: [0.64, 0.58]
        },
        {
          name: '泸州',
          code: '02304',
          lonlat: [0.71, 0.62]
        },
        {
          name: '德阳',
          code: '02305',
          lonlat: [0.62, 0.40]
        },
        {
          name: '乐山',
          code: '02306',
          lonlat: [0.57, 0.56]
        },
        {
          name: '内江',
          code: '02307',
          lonlat: [0.66, 0.55]
        },
        {
          name: '绵阳',
          code: '02308',
          lonlat: [0.65, 0.38]
        },
        {
          name: '广元',
          code: '02309',
          lonlat: [0.74, 0.29]
        },
        {
          name: '遂宁',
          code: '02310',
          lonlat: [0.72, 0.46]
        },
        {
          name: '资阳',
          code: '02312',
          lonlat: [0.66, 0.50]
        },
        {
          name: '眉山',
          code: '02313',
          lonlat: [0.55, 0.51]
        },
        {
          name: '宜宾',
          code: '02314',
          lonlat: [0.65, 0.66]
        },
        {
          name: '南充',
          code: '02315',
          lonlat: [0.76, 0.45]
        },
        {
          name: '广安',
          code: '02316',
          lonlat: [0.81, 0.48]
        },
        {
          name: '达州',
          code: '02317',
          lonlat: [0.88, 0.40]
        },
        {
          name: '巴中',
          code: '02318',
          lonlat: [0.82, 0.35]
        },
        {
          name: '雅安',
          code: '02319',
          lonlat: [0.49, 0.52]
        },
        {
          name: '凉山',
          code: '02320',
          lonlat: [0.45, 0.71]
        },
        {
          name: '甘孜',
          code: '02321',
          lonlat: [0.40, 0.52]
        },
        {
          name: '阿坝',
          code: '02322',
          lonlat: [0.48, 0.29]
        },
        {
          name: '成都',
          code: '04402',
          lonlat: [0.53, 0.44]
        }

      ],
      channelJson: {
        'channelCounterStaffCount': '柜台及人工',
        'channelSelfHelpCount': '自助',
        'channelNetworkCount': '电子',
        'channelPartnerLinkCount': '合作方直联',
        'channelSystemBatchCount': '批量及系统',
        'channelInfoPublishCount': '信息服务发布',
        'channelManagementCount': '管理'
      }
    }
  },
  created () {
    this.getData()
  },
  mounted () {
  },
  updated () {
  },
  methods: {
    getData () {
      if (this.timeEr) {
        clearTimeout(this.timeEr)
        this.timeEr = null
      }
      getMokeTest().then(res => {
        this.showError = false
        res = {
          'code': 200,
          'msg': '',
          'data': {
            'totalDataVo': {
              'apiTotalCount': 81872,
              'apiRequestCount': 852.5,
              'getApipSeqnoCount': 54.6,
              'qryTrxApipSeqnoCount': 448
            },
            'perDayDataVo': {
              'apiTotalCount': 81870,
              'apiRequestCount': 81870,
              'getApipSeqnoCount': 0,
              'qryTrxApipSeqnoCount': 0,
              'apiSuccessCount': '81870',
              'totalResponseTime': '9800392',
              'avgResponseTime': '119.71',
              'zoneNo04402Count': '80731',
              'zoneNo02302Count': '1139',
              'zoneNo02303Count': '0',
              'zoneNo02304Count': '0',
              'zoneNo02305Count': '0',
              'zoneNo02306Count': '0',
              'zoneNo02307Count': '0',
              'zoneNo02308Count': '0',
              'zoneNo02309Count': '0',
              'zoneNo02310Count': '0',
              'zoneNo02312Count': '0',
              'zoneNo02313Count': '0',
              'zoneNo02314Count': '0',
              'zoneNo02315Count': '0',
              'zoneNo02316Count': '0',
              'zoneNo02317Count': '0',
              'zoneNo02318Count': '0',
              'zoneNo02319Count': '0',
              'zoneNo02320Count': '0',
              'zoneNo02321Count': '0',
              'zoneNo02322Count': '0',
              'channelCounterStaffCount': '120',
              'channelSelfHelpCount': '30',
              'channelNetworkCount': '0',
              'channelPartnerLinkCount': '1139',
              'channelSystemBatchCount': '529',
              'channelInfoPublishCount': '220',
              'channelManagementCount': '60'
            },
            'throughputMap': {
              '2020-06-24 18:17:05': '20',
              '2020-06-24 18:17:06': '22',
              '2020-06-24 18:17:07': '23',
              '2020-06-24 18:17:08': '33',
              '2020-06-24 18:17:09': '44',
              '2020-06-24 18:17:10': '23',
              '2020-06-24 18:17:11': '52',
              '2020-06-24 18:17:12': '45',
              '2020-06-24 18:17:13': '12',
              '2020-06-24 18:17:14': '8'

            },
            'requestedZoneNoList': [
              '04402'
            ],
            'avgResponseTimeList': [
              {
                'tradeDatetime': '2020-06-24 17:17',
                'avgResponseTime': '42.35',
                'apiTotalCount': '1208',
                'apiSuccessTotalCount': '1208'
              },
              {
                'tradeDatetime': '2020-06-24 17:18',
                'avgResponseTime': '74.20',
                'apiTotalCount': '1232',
                'apiSuccessTotalCount': '1232'
              },
              {
                'tradeDatetime': '2020-06-24 17:18',
                'avgResponseTime': '74.20',
                'apiTotalCount': '1232',
                'apiSuccessTotalCount': '1232'
              },
              {
                'tradeDatetime': '2020-06-24 17:18',
                'avgResponseTime': '74.20',
                'apiTotalCount': '1232',
                'apiSuccessTotalCount': '1232'
              },
              {
                'tradeDatetime': '2020-06-24 17:18',
                'avgResponseTime': '74.20',
                'apiTotalCount': '1232',
                'apiSuccessTotalCount': '1232'
              },
              {
                'tradeDatetime': '2020-06-24 17:18',
                'avgResponseTime': '74.20',
                'apiTotalCount': '1232',
                'apiSuccessTotalCount': '1232'
              },
              {
                'tradeDatetime': '2020-06-24 17:18',
                'avgResponseTime': '74.20',
                'apiTotalCount': '1232',
                'apiSuccessTotalCount': '1232'
              }
            ]
          }
        }
        /** 交易量数据 */
        this.setJyData(res.data)

        /** 日平均响应时间 */
        this.setRjXy(res.data)

        /** 交易量饼图 */
        this.setPei(res.data)

        /** 地图 */
        this.setMap(res.data.requestedZoneNoList)

        /** 地区和渠道 */
        this.setBarAndRadar(res.data.perDayDataVo)

        /** 交易率并发量 */
        this.setBfalan(res.data.throughputMap)

        /** 交易折线图 */
        this.setLineData(res.data.avgResponseTimeList)

        /** 轮询 */
        this.timeEr = setTimeout(this.getData, 10000)
      }).catch(err => {
        console.error(err)
        this.error = err || '系统错误'
        this.showError = true
        this.timeEr = setTimeout(this.getData, 10000)
      })
    },
    setJyData (data) {
      this.totalNumData = []
      this.dayNumData = []
      this.totalNumData.push(parseInt(data.totalDataVo.apiTotalCount)) // 总交易量
      // this.dayNumData.push(parseInt(data.perDayDataVo.apiTotalCount)) // 日交易量
      this.dayNumData = [0]
    },
    setRjXy (data) {
      let resTimes = []
      resTimes.push(parseFloat(data.perDayDataVo.avgResponseTime))
      this.resTimes = resTimes
    },
    setPei (data) {
      let allTransaction = [
        {
          name: 'API调用',
          value: parseInt(data.totalDataVo.apiRequestCount)
        },
        {
          name: '前置渠道',
          value: parseInt(data.totalDataVo.getApipSeqnoCount)
        },
        {
          name: '后置渠道',
          value: parseInt(data.totalDataVo.qryTrxApipSeqnoCount)
        }
      ]
      let dayTransaction = [
        {
          name: 'API调用',
          value: parseInt(data.perDayDataVo.apiRequestCount)
        },
        {
          name: '前置渠道',
          value: parseInt(data.perDayDataVo.getApipSeqnoCount)
        },
        {
          name: '后置渠道',
          value: parseInt(data.perDayDataVo.qryTrxApipSeqnoCount)
        }
      ]
      let all = []
      allTransaction.forEach(n => {
        if (n.value) {
          all.push(n)
        }
      })
      let day = []
      dayTransaction.forEach(n => {
        if (n.value) {
          day.push(n)
        }
      })
      this.allTransaction = all
      this.dayTransaction = day
    },
    setMap (data) {
      let requestedZoneNoList = data
      let mapLines = []
      let mapData = []
      requestedZoneNoList.forEach(n => {
        let name = this.position.find(i => i.code === n).name
        let coordinate = this.position.find(i => i.code === n).lonlat
        mapLines.push({
          source: name,
          target: '后台中心'
        })
        mapData.push(
          {
            name: name,
            coordinate: coordinate
          }
        )
      })
      mapData.unshift({
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
      })
      this.mapLines = mapLines
      this.mapData = mapData
    },
    setBarAndRadar (data) {
      let zoneNo = []
      let channel = []
      for (const i in data) {
        if (data.hasOwnProperty(i)) {
          const e = data[i]
          if (i.includes('zoneNo')) {
            let code = i.slice(6, 11)
            let city = this.areaJson[code]
            zoneNo.push({
              label: i,
              value: e,
              name: city
            })
          }
          if (i.includes('channel')) {
            channel.push({
              label: i,
              value: e,
              name: this.channelJson[i]
            })
          }
        }
      }
      /// /  排序
      // 地区
      zoneNo.sort(compare('value'))
      if (zoneNo.length > 5) {
        zoneNo = zoneNo.slice(0, 5)
      }
      let transactionRankXData = []
      let transactionRank = []
      zoneNo.forEach(n => {
        transactionRankXData.push(n.name)
        transactionRank.push(parseInt(n.value / 1000))
      })
      transactionRankXData.push('')
      transactionRankXData.unshift('')
      this.transactionRankXData = transactionRankXData

      transactionRank.push(0)
      transactionRank.unshift(0)
      // console.log(transactionRank)
      this.transactionRank = transactionRank

      // 渠道
      channel.sort(compare('value'))
      channel = channel.slice(0, 7)
      let channelTransactionList = []
      let channelTransactionIndicator = []
      let channelTransaction = []

      channel.forEach((n, index) => {
        channelTransactionList.push(`${String.fromCharCode(index + 65)}：${n.name}`)

        channelTransactionIndicator.push({
          name: String.fromCharCode(index + 65),
          max: parseInt(channel[0].value)
        })
        channelTransaction.push(parseInt(n.value))
      })
      this.channelTransactionList = channelTransactionList
      this.channelTransactionIndicator = channelTransactionIndicator
      this.channelTransaction = channelTransaction
      // console.log(channelTransactionList, channelTransactionIndicator, channelTransaction)
    },
    setBfalan (data) {
      let throughputMap = []
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const n = data[key]
          throughputMap.push(n)
        }
      }
      this.throughputMap = throughputMap
    },
    setLineData (data) {
      let avgResponseTimeList = data
      let severResTime = []
      let transactionRate = []
      let transactionSuccessRate = []
      let transactionRateXData = []
      avgResponseTimeList.forEach(n => {
        severResTime.push(parseFloat(n.avgResponseTime))
        transactionRate.push(parseFloat(n.apiTotalCount))
        transactionSuccessRate.push(parseFloat(n.apiSuccessTotalCount))
        // console.log(n.tradeDatetime)
        transactionRateXData.push(n.tradeDatetime.slice(11, 16))
      })

      this.severResTime = severResTime
      this.transactionRate = transactionRate
      this.transactionSuccessRate = transactionSuccessRate
      this.transactionRateXData = transactionRateXData
      // console.log(transactionRateXData, transactionSuccessRate)
    }
  }
}
</script>
<style scoped>
	#data-view {
		width: 100%;
		height: 100%;
		background-color: #030409;
		color: #fff;
	}

	#dv-full-screen-container {

		background-size: 100% 100%;
		box-shadow: 0 0 3px blue;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}

	.view-left-top {
		width: 25%;
		height: 100%;
		margin: 0px 1%;
		margin-left: 2%;
	}

	.view-middle-top {
		width: 50%;
		height: 100%;
	}

	.view-right-top {
		width: 25%;
		height: 100%;
		margin: 0px 1%;
		margin-right: 2%;
	}

	.view-row-middle-left {
		width: 23.8%;
		height: 100%;
		margin: 0px 1%;
		margin-left: 1.8%;
	}

	.view-row-middle-map {
		width: 47%;
		height: 100%;
		position: relative;
		top: -20%;
	}

	.view-row-middle-right {
		width: 23.8%;
		height: 100%;
		margin: 0px 1%;
		margin-right: 1.8%;
	}

	.view-row-bottom-left {
		width: 23.8%;
		height: 100%;
		margin: 0px 1.2%;
		margin-left: 1.8%;
	}

	.view-row-bottom-left-one {
		width: 49%;
		height: 100%;
		margin-right: 2.6%;
	}

	.view-row-bottom-right {
		width: 49%;
		height: 100%;

	}

	.view-row-bottom-right-one {
		width: 23.8%;
		height: 100%;
		margin: 0px 1.2%;
		margin-right: 1.8%;
	}
  .error-warp{
    top: 2px;
    position: absolute;
    color: red;
    width: 100%;
    z-index: 99999;
  }
  /* .error-tip{
    color: red;
    height: 60px;
    width: 500px;
    line-height: 60px;
    background: #fff;
    border-radius: 10px;
    margin: 0 auto;
    text-align: center;
  } */
  .el-message--error {
    background-color: #fef0f0;
    border-color: #fde2e2;
  }
  .error-tip {
      min-width: 380px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid #ebeef5;
      position: fixed;
      left: 50%;
      top: 2px;
      transform: translateX(-50%);
      background-color: #edf2fc;
      transition: opacity .3s,transform .4s,top .4s;
      overflow: hidden;
      padding: 10px 10px 10px 15px;
      display: flex;
      align-items: center;
      background-color: #fef0f0;
      border-color: #fde2e2;
  }
</style>
