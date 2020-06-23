<!--
 * @Author: your name
 * @Date: 2020-06-19 14:44:08
 * @LastEditTime: 2020-06-22 15:11:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\my\src\components\view\LeftTop.vue
-->
<template>
	<dv-border-box-8 :reverse="true">
		<div class="left-top-outbox">
			<p>交易总金额</p>
			<dv-digital-flop :config="config" style="width:100%;height:100%;" />
		</div>
	</dv-border-box-8>
</template>

<script>
export default {
  name: 'LeftTop',
  props: {
    number1: {
      type: Number,
      default: 1234
    }
  },
  watch: {
    number1 (news, old) {
      this.setTime(news)
    }
  },
  data () {
    return {
      config: {
        number: [1234],
        content: '{nt}',
        style: {
          fill: '#04fcfc'
        }
      }
    }
  },
  mounted () {
    // setTimeout(() => {
    //   const { config } = this
    //   config.number[0] = 2345
    //   /**
    //    * 使用ES6拓展运算符生成新的props对象
    //    * 组件侦知数据变化 自动刷新状态
    //    */
    //   this.config = { ...config }
    // }, 2000)
  },
  methods: {
    setTime (data) {
      const { config } = this
      config.number[0] = data
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
