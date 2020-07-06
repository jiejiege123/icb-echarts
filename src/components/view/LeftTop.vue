<template>
	<dv-border-box-8 :reverse="true">
		<div class="left-top-outbox">
			<p>当前时间</p>
			<dv-digital-flop :config="config" style="width:100%;height:100%;" />
		</div>
	</dv-border-box-8>
</template>

<script>
export default {
  name: 'barCharts',
  data () {
    return {
      config: {
        number: [],
        content: '{nt}:{nt}:{nt}',
        style: {
          fill: '#04fcfc'
        }
      }
    }
  },
  /* 		props: ["theTotalNum"], //接收父组件传递过来的值
		computed: {
			theNum: function() {
				var theTotalNum = Number(this.theTotalNum); //这儿模拟的时候，传递过来的是字符串，但是配置的类型应该是数值，所以，转换一次
				return Object.assign({}, this.config, {
					number: [theTotalNum]
				});
			}
		}, */
  created: function () {
    this.getTime()
  },
  mounted: function () {
    this.topTimer()
  },
  methods: {
    topTimer: function () {
      const that = this
      setInterval(function () {
        that.getTime()
      }, 1000)
    },
    getTime: function () {
      let date = new Date()

      // eslint-disable-next-line one-var
      let hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds()
      // console.log(hour, minute, second)
      // eslint-disable-next-line one-var
      let _hour = String(hour >= 10 ? hour : ('0' + hour)),
        _minute = String(minute >= 10 ? minute : ('0' + minute)),
        _second = String(second >= 10 ? second : ('0' + second))
      let timeConfig = {
        number: [_hour, _minute, _second]
      }

      this.config = Object.assign({}, this.config, timeConfig)
    }
  },
  beforeDestroy: function () {
    clearInterval(this.topTimer)
  }
}

</script>

<style>
	.left-top-outbox {
		height: 65%;
		padding-top: 8%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.left-top-outbox p {
		width: 100%;
		text-align: center;
		margin: 0;
		letter-spacing: 2px;
	}
</style>
