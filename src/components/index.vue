<template>
	<div id="data-view">
		<!-- 全屏 -->
		<dv-full-screen-container>
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
					<row-middle-left
						:totalNumData="totalNumData"
						:dayNumData="dayNumData"
						:dayTransaction="dayTransaction"
						:allTransaction="allTransaction"
					/>
				</div>
				<div class="view-row-middle-map">
					<!-- 地图 -->
					<row-middle-map  :eData="mapData" />
				</div>
				<div class="view-row-middle-right">
					<!-- 交易量 -->
					<row-middle-right
						:severResTime="severResTime"
						:transactionRank="transactionRank" />
				</div>
			</div>
			<!-- 第三列 -->
			<div style="display: flex;height: 24%;margin-top: 1%;margin-bottom: 2%;">
				<div class="view-row-bottom-left">
					<line-charts title="交易率(笔/分钟)" :eData="transactionRate" />
				</div>
				<div style="width: 47%;display: flex;">
					<div class="view-row-bottom-left-one">
						<line-charts title="交易成功率(笔/分钟)" :eData="transactionSuccessRate" />
					</div>
					<div class="view-row-bottom-right">
						<line-charts title="交易并发量(笔/秒)" :eData="transactionSuccessRate" />
					</div>
				</div>
				<div class="view-row-bottom-right-one">
					<radar-charts title="渠道种类交易占比" :eData="channelTransaction" />
				</div>
			</div>
		</dv-full-screen-container>
	</div>
</template>

<script>
import LeftTop from './view/LeftTop.vue'
import MiddleTop from './view/MiddleTop.vue'
import RightTop from './view/RightTop.vue'
import RowMiddleLeft from './view/RowMiddleLeft.vue'
import RowMiddleMap from './view/RowMiddleMap.vue'
import RowMiddleRight from './view/RowMiddleRight.vue'
import { getMokeTest } from '@/api/user.js'
import lineCharts from '@/components/view/lineCharts'
import radarCharts from '@/components/view/radarCharts'
export default {
  name: 'bigshow',
  components: {
    LeftTop,
    MiddleTop,
    RightTop,
    RowMiddleLeft,
    RowMiddleMap,
    RowMiddleRight,
    lineCharts,
    radarCharts
  },
  data () {
    return {
      msg: '欢迎来到菜鸟教程！',
      rightData: [],
      number1: 1234,
      timeEr: '',
      mapData: [],
      resTimes: [],
      allTransaction: [],
      totalNumData: [],
      dayTransaction: [],
      dayNumData: [],
      severResTime: [],
      transactionRank: [],
      transactionRate: [],
      transactionSuccessRate: [],
      channelTransaction: []
    }
  },
  created () {
    this.getData()
  },
  mounted () {
  },
  methods: {
    getData () {
      if (this.timeEr) {
        clearTimeout(this.timeEr)
        this.timeEr = null
      }
      getMokeTest().then(res => {
        this.timeEr = setTimeout(this.getData, 2000)
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>
<style>
	#data-view {
		width: 100%;
		height: 100%;
		background-color: #030409;
		color: #fff;
	}

	#dv-full-screen-container {
		background-image: url(../../static/bg.png);
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
</style>
