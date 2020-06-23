<template>
  <div style="width: 50%;">
    <dv-active-ring-chart :config="config" style="width:100%;height:100%" />
  </div>
</template>

<script>
export default {
  name: 'pieCharts',
  props: {
    eData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    eData (news, old) {
      this.setTime(news)
    }
  },
  data () {
    return {
      config: {
        radius: '70%',
        activeRadius: '80%',
        lineWidth: '15',
        digitalFlopStyle: {
          fontSize: 16,
          fill: '#fff'
        },
        data: [
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
  mounted () {
  },
  methods: {
    setTime (data) {
      const { config } = this
      config.data = data
      /**
       * 使用ES6拓展运算符生成新的props对象
       * 组件侦知数据变化 自动刷新状态
       */
      this.config = { ...config }
    }
  }
}
</script>

<style>
	.view-row-middle-right-chartOutBox {
		height: 48.3%;
	}

	.view-row-middle-right-chartOutBox .border-box-content {
		padding: 6%;
		width: 88%;
		height: 90%;
		padding-bottom: 0;
	}

	.view-chart-title {
		margin: 0;
		font-size: 14px;
	}

	.view-row-middle-right-chartbox {
		height: 85%;
	}
</style>
