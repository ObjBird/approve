<template>
  <div style="height:100%;width:100%;">
    <scroller lock-x :scrollbar-y="false" height="100%" ref="scroller" @on-pulldown-loading="refresh" @on-scroll-bottom="loadMore" use-pulldown :pulldown-config="pulldownConf" class='vux-scroller'>
      <div>
        <div class="history-item" v-for="item in list">
          <div class="timeline">
            <icon class="action-icon" type="success"></icon>
          </div>
          <div class="history-container">
            <div class="history-message">
              <div class="history-avatar-container">
                <x-img
                  :scroller="$refs.scroller"
                  v-if="render"
                  class="history-avatar weui-media-box__thumb"
                  @on-success="success"
                  :src="item.src"
                  :delay="50"
                  @on-error="error">
                </x-img>
              </div>
              <div class="message-container">
                <div class="message-title">
                {{item.title}}
                </div>
                <div class="message-body">
                  {{item.desc}}
                </div>
              </div>
              <div class="message-stamp">
                <span>08.17</span>
              </div>
            </div>
          </div>
        </div>
        <load-more v-if="isLoadingMore" tip="正在加载"></load-more>
      </div>
    </scroller>
  </div>
</template>

<script>
import {
  Panel,
  Scroller,
  XImg,
  LoadMore,
  Icon
} from 'vux'
export default {
  components: {
    Panel,
    Scroller,
    XImg,
    LoadMore,
    Icon
  },
  data() {
    return {
      type: '5',
      render: false,
      isLoadingMore: false,
      pulldownConf: {
        content: 'Pull Down To Refresh',
        height: 60,
        autoRefresh: false,
        downContent: '下拉刷新',
        upContent: '释放刷新',
        loadingContent: '加载中...',
        clsPrefix: 'xs-plugin-pulldown-'
      },
      list: [{
        src: require('../../assets/1.jpg'),
        title: '朱杰',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见：这个可以参考移动，你们先过核销评审，我40左右到'
      }, {
        src: require('../../assets/2.jpg'),
        title: '金府',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意'
      }, {
        src: require('../../assets/4.jpg'),
        title: '朱杰',
        date: (new Date()).toLocaleString(),
        desc: '审批后撤回'
      }, {
        src: require('../../assets/2.jpg'),
        title: '金府',
        date: (new Date()).toLocaleString(),
        desc: '审批后撤回 意见: 测试'
      }, {
        src: require('../../assets/1.jpg'),
        title: '杨立群',
        date: (new Date()).toLocaleString(),
        desc: '提交了申请'
      }, {
        src: require('../../assets/2.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/3.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/1.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/4.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/2.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/4.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/3.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/2.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/1.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/4.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/3.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/2.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/4.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/1.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/3.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/4.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/2.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/3.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }, {
        src: require('../../assets/1.jpg'),
        title: '同意',
        date: (new Date()).toLocaleString(),
        desc: '同意 意见: 同意审批'
      }]
    }
  },
  methods: {
    refresh() {
      console.log('refresh')
      var vm = this
      setTimeout(function() {
        console.log('refresh done')
        vm.$nextTick(() => {
          vm.$refs.scroller.donePulldown()
          vm.$refs.scroller.reset()
        })
      }, 1000)
    },
    loadMore() {
      if (!this.isLoadingMore) {
        console.log('load more data')
        this.isLoadingMore = true
        var vm = this
        setTimeout(function() {
          console.log('load done')
          vm.isLoadingMore = false
          vm.$refs.scroller.reset()
        }, 1000)
      }
    },
    success() {
      console.log('load img success')
    },
    error() {
      console.log('load img error')
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.scroller.reset()
      this.render = true
    })
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  }
}
</script>

<style scoped>
.background-one{
  background-color: #5DF799;
}
.background-two{
  background-color: #63F75D;
}
.background-three{
  background-color: #F7A55D;
}
.background-four{
  background-color:#5DA7F7;  
}
.history-item {
  display: flex;
}
.timeline {
  display: inline-block;
  width: 2rem;
  vertical-align: top;
  height: 100%;
  z-index: 10;
}
.action-icon::before {
  margin-left: calc(2rem - .5em);
  margin-top: calc(3.8rem - 12px);
  background-color: #fbf9fe;
}
.history-container {
  flex:1;
  border-left: 1px solid #bbb;
}
.history-message {
  display: flex;
  vertical-align: top;
  margin: 1.5rem 1.5rem 0 1.5rem;
  position: relative;
  background-color: white;
  padding: 1rem;
  width: calc(90% - 3rem - 3.1px);
  border: 1px solid #eee;
  border-radius: 0.6rem;
  align-items: center;
}

.history-message::before {
  content: '';
  position: absolute;
  top: 2.3rem;
  left: -6.5px;
  width: 10px;
  height: 10px;
  margin-top: -10px;
  background: inherit;
  border: 1px solid #eee;
  transform: rotate(45deg);
  border-style: none none solid solid;
}
/* .history-avatar {
  width: 2.6rem;
  height: 2.6rem;
} */
.history-avatar-container {
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  overflow: hidden;
}
.message-container {
  flex:1;
}
.message-stamp {
  align-self: flex-start;
  width: 2rem;
}
.message-title {
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1rem;
  line-height: 1.6;
}
.message-body {
  margin-left: 1rem;
  /* margin-right: 1rem; */
  font-size: 0.8rem;
  color: #bbbbbb;
  line-height: 1.25;
}
.message-stamp {
  font-size: 0.8rem;
  color: #bbbbbb;
}
.message-name{
  width:100%;
  height:100%;
  line-height:3rem;
  text-indent:0.3rem;
  font-size: 1.2rem;
  color: #FFFFFF;
}
.weui-icon-success{
  color: #63F680;
}
.vux-x-img{
  width: 100%;
  height: 100%;
}
</style>
