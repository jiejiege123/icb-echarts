<template>
	<dv-border-box-13 :color="['#235fa7','#4fd2dd']">
		<div class="view-row-middle-left-up">
			<div style="width: 50%;">
				<p class="view-row-middle-left-title">总交易量</p>
				<dv-digital-flop :config="totalNum" style="width:100%;height:40%;" />
			</div>
			<div style="width: 50%;">
				<row-bottom-left :eData="allTransaction" style="width:100%;height:100%" />
			</div>
		</div>
		<dv-decoration-2 style="width:100%;height:10%;" :color="['#235fa7','#4fd2dd']" />
		<div class="view-row-middle-left-down">
			<div style="width: 50%;">
				<p class="view-row-middle-left-title">日交易量</p>
				<dv-digital-flop :config="dayNum" style="width:100%;height:40%;" />
			</div>
			<div style="width: 50%;">
        <row-bottom-left :eData="dayTransaction" style="width:100%;height:100%" />
			</div>
		</div>
	</dv-border-box-13>
</template>

<script>
import RowBottomLeft from '@/components/view/pieCharts'
export default {
  name: 'RowMiddleLeft',
  components: {
    RowBottomLeft
  },
  props: {
    totalNumData: {
      type: Array,
      default () {
        return []
      }
    },
    dayNumData: {
      type: Array,
      default () {
        return []
      }
    },
    dayTransaction: {
      type: Array,
      default () {
        return [
          {
            name: '柜面',
            value: 55
          },
          {
            name: '手机银行',
            value: 120
          },
          {
            name: '网上银行',
            value: 78
          },
          {
            name: '机构客户',
            value: 66
          },
          {
            name: '公司客户',
            value: 80
          },
          {
            name: '个人客户',
            value: 80
          }
        ]
      }
    },
    allTransaction: {
      type: Array,
      default () {
        return [
          {
            name: '柜面',
            value: 55
          },
          {
            name: '手机银行',
            value: 120
          },
          {
            name: '网上银行',
            value: 78
          },
          {
            name: '机构客户',
            value: 66
          },
          {
            name: '公司客户',
            value: 80
          },
          {
            name: '个人客户',
            value: 80
          }
        ]
      }
    }
  },
  watch: {
    dayTransaction (news, old) {
      this.setDay(news)
    },
    allTransaction (news, old) {
      this.setAll(news)
    }
  },
  data () {
    return {
      totalNum: {
        number: [82458957], // 最大效果显示数值  亿
        content: '{nt}',
        textAlign: 'left',
        style: {
          fill: '#04fcfc'
        }
      },
      dayNum: {
        number: [5878463],
        content: '{nt}',
        textAlign: 'left',
        style: {
          fill: '#04fcfc'
        }
      }
    }
  },
  methods: {
    setDay (data) {
      const { totalNum } = this
      totalNum.number = data
      /**
       * 使用ES6拓展运算符生成新的props对象
       * 组件侦知数据变化 自动刷新状态
       */
      this.totalNum = { ...totalNum }
    },
    setAll (data) {
      const { dayNum } = this
      dayNum.number = data
      /**
       * 使用ES6拓展运算符生成新的props对象
       * 组件侦知数据变化 自动刷新状态
       */
      this.dayNum = { ...dayNum }
    }
  }
}
</script>

<style>
	.view-row-middle-left-up,
	.view-row-middle-left-down {
		display: flex;
		height: 45%;
	}

	.view-row-middle-left .border-box-content {
		padding: 7%;
		width: 86%;
		height: 85%;
	}

	.view-row-middle-left-title {
		margin: 0px;
		height: 15%;
		padding-top: 30%;
		text-indent: 1%;
	}

	.view-row-middle-left .dv-digital-flop {
		line-height: 60px;
	}
</style>
