<template>
	<dv-border-box-13 :color="['#235fa7','#4fd2dd']">
		<div class="view-row-middle-left-up">
			<div style="width: 50%;">
				<p class="view-row-middle-left-title">总交易量</p>
				<dv-digital-flop :config="totalNum" style="width:100%;height:40%;" />
			</div>
			<div style="width: 50%;">
				<dv-active-ring-chart :config="config" style="width:100%;height:100%" />
			</div>
		</div>
		<dv-decoration-2 style="width:100%;height:10%;" :color="['#235fa7','#4fd2dd']" />
		<div class="view-row-middle-left-down">
			<div style="width: 50%;">
				<p class="view-row-middle-left-title">日交易量</p>
				<dv-digital-flop :config="dayNum" style="width:100%;height:40%;" />
			</div>
			<div style="width: 50%;">
				<dv-active-ring-chart :config="config" style="width:100%;height:100%" />
			</div>
		</div>
	</dv-border-box-13>
</template>

<script>
export default {
  name: 'RowMiddleLeft',
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
        number: [5876463],
        content: '{nt}',
        textAlign: 'left',
        style: {
          fill: '#04fcfc'
        }
      },
      config: {
        radius: '70%',
        activeRadius: '80%',
        lineWidth: '15',
        digitalFlopStyle: {
          fontSize: 16,
          fill: '#fff'
        },
        data: [{
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
