<template>
	<div id="data-view">
		<!-- 全屏 -->
		<dv-full-screen-container>
			<!-- 第一列 -->
			<div style="display: flex;height: 15%;margin-top: 2%;">
				<div class="view-left-top">
					<left-top :number1="number1" />
				</div>
				<div class="view-middle-top">
					<middle-top />
				</div>
				<div class="view-right-top">
					<right-top />
				</div>
			</div>
			<!-- 第二列 -->
			<div style="display: flex;height: 50%;margin-top: 1%;">
				<div class="view-row-middle-left">
					<row-middle-left />
				</div>
				<div class="view-row-middle-map">
					<row-middle-map />
				</div>
				<div class="view-row-middle-right">
					<row-middle-right :rightData="rightData" />
				</div>
			</div>
			<!-- 第三列 -->
			<div style="display: flex;height: 24%;margin-top: 1%;margin-bottom: 2%;">
				<div class="view-row-bottom-left">
					<row-bottom-left></row-bottom-left>
				</div>
				<div style="width: 47%;display: flex;">
					<div class="view-row-bottom-left-one">
						<row-bottom-left-one></row-bottom-left-one>
					</div>
					<div class="view-row-bottom-right">
						<row-bottom-right></row-bottom-right>
					</div>
				</div>
				<div class="view-row-bottom-right-one">
					<row-bottom-right-one></row-bottom-right-one>
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
import RowBottomLeft from './view/RowBottomLeft.vue'
import RowBottomLeftOne from './view/RowBottomLeftOne.vue'
import RowBottomRight from './view/RowBottomRight.vue'
import RowBottomRightOne from './view/RowBottomRightOne.vue'
import { setInterval } from 'timers'

export default {
  name: 'bigshow',
  components: {
    LeftTop,
    MiddleTop,
    RightTop,
    RowMiddleLeft,
    RowMiddleMap,
    RowMiddleRight,
    RowBottomLeft,
    RowBottomLeftOne,
    RowBottomRight,
    RowBottomRightOne
  },
  data () {
    return {
      msg: '欢迎来到菜鸟教程！',
      rightData: [],
      number1: 1234
    }
  },
  mounted () {
    this.setSome()
  },
  methods: {
    setSome () {
      var self = this
      setInterval(getTotelNumber, 6000)
      function getTotelNumber () {
        self.number1 = Number(Math.floor(Math.random() * (9999 - 1000)) + 1000)
      }
      getTotelNumber()
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
