<!--
 * @Author: your name
 * @Date: 2020-06-24 08:26:32
 * @LastEditTime: 2020-06-28 10:12:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\my\src\components\view\RightTop.vue
-->
<template>
	<dv-border-box-8 :reverse="true">
		<div class="right-top-outbox">
			<p>日平均响应时间</p>
			<dv-digital-flop :config="config" style="width:100%;height:100%;" />
		</div>
	</dv-border-box-8>
</template>

<script>
export default {
  name: 'RightTop',
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
        number: [148.27],
        toFixed: 2,
        content: '{nt}ms',
        style: {
          fill: '#04fcfc'
        }
      }
    }
  },
  mounted () {
  },
  methods: {
    setTime (data) {
      const { config } = this
      config.number = data
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
	.right-top-outbox {
		height: 65%;
		padding-top: 8%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.right-top-outbox p {
		width: 100%;
		text-align: center;
		margin: 0;
		letter-spacing: 2px;
	}
</style>
