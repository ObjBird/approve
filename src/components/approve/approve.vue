<template>
  <div style="height:100%;">
    <div id="approve-header">
      <div id="user-detail">
        <div class="user-avatar">
          <x-img :src="require('../../assets/2.jpg')"
          :delay="50"></x-img>
        </div>
        <div class="user-message">
          <span style="font-size: 1.1rem;">梧桐的事项办理</span>
        </div>
        <div class="user-avatarTwo">
          <x-img :src="require('../../assets/agree.png')"
          :delay="50"></x-img>
        </div>
      </div>
      <tab>
        <tab-item selected @on-item-click="clickTab('approve-form')" style="font-size: 1.1rem;">单据内容</tab-item>
        <tab-item @on-item-click="clickTab('approve-history')" style="font-size: 1.1rem;">审批历史</tab-item>
        <tab-item @on-item-click="clickTab('approve-accessory')" style="font-size: 1.1rem;">附件</tab-item>
      </tab>
    </div>
    <div id="approve-container">
      <keep-alive>
        <component :is="currentList"></component>
      </keep-alive>
    </div>
    <flexbox id="approve-footer">
      <flexbox-item class="approve-button" style="margin-left:0;">
        <x-button type="primary" @click.native="clickButton('approve')">同意</x-button>
      </flexbox-item>
      <flexbox-item class="approve-button" style="margin-left:0;">
        <x-button type="warn" @click.native="clickButton('reject')">驳回</x-button>
      </flexbox-item>
      <flexbox-item class="approve-button" style="margin-left:0;">
        <x-button type="default" @click.native="clickButton('assign')">改派</x-button>
      </flexbox-item>
      <flexbox-item class="approve-button" style="margin-left:0;">
        <x-button class="warn trust" @click.native="clickButton('delegate')">委托</x-button>
      </flexbox-item>
    </flexbox>
    <popup class="approve-popup" v-model="popupVisible" position="bottom" @on-hide="popupHide">
      <group>
        <x-textarea title="审批意见" v-model="opinion" :rows="2"></x-textarea>
        <template v-if="action === 'reject'">
          <selector title="驳回至" v-model="rejectMode" :options="rejectModes"></selector>
          <selector :title="rejectMode === 'person' ? '人员' : '节点'" v-model="rejectTo" :options="rejectMode === 'person' ? personList : nodeList"></selector>
        </template>
        <selector v-else title="人员" v-model="person" :options="personList"></selector>
        <x-button type="primary" @click.native="confirm" style="margin-top:2rem;">确定</x-button>
        <x-button type="warn" @click.native="cancel">取消</x-button>
      </group>
    </popup>
  </div>
</template>

<script>
import {
  Tab,
  TabItem,
  Flexbox,
  FlexboxItem,
  XButton,
  XImg,
  Popup,
  Group,
  XTextarea,
  Selector,
  Checker,
  CheckerItem
} from 'vux'
export default {
  data () {
    return {
      person: '',
      action: '',
      rejectTo: '',
      rejectMode: 'person',
      rejectModes: [{
        key: 'person',
        value: '人员'
      }, {
        key: 'node',
        value: '节点'
      }],
      personList: [{
        key: 0,
        value: '梧桐'
      }, {
        key: 1,
        value: '王帅'
      }, {
        key: 2,
        value: '金府'
      }, {
        key: 3,
        value: '贝贝'
      }],
      node: '',
      nodeList: [{
        key: 0,
        value: '节点0'
      }, {
        key: 1,
        value: '节点1'
      }, {
        key: 2,
        value: '节点2'
      }, {
        key: 3,
        value: '节点3'
      }],
      currentList: 'approve-form',
      popupVisible: false,
      opinion: ''
    }
  },
  components: {
    Tab,
    TabItem,
    Flexbox,
    FlexboxItem,
    XButton,
    XImg,
    Popup,
    Group,
    XTextarea,
    Selector,
    Checker,
    CheckerItem,
    'approve-form': () => import('./form.vue'),
    'approve-history': () => import('./history.vue'),
    'approve-accessory': () => import('./accessory.vue')
  },
  methods: {
    clickTab (name) {
      this.currentList = name
      console.log(arguments)
    },
    clickButton (action) {
      console.log(action)
      this.action = action
      this.popupVisible = true
    },
    confirm () {
      alert('confirm')
    },
    cancel () {
      this.popupVisible = false
    },
    reset () {
      this.opinion = ''
      this.person = ''
      this.node = ''
    },
    popupHide () {
      this.reset()
    }
  }
}
</script>

<style scoped>
  #approve-header {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 100;
  }
  #approve-container {
    height: 100%;
    /*padding-top: 45px;
    padding-bottom: 55px;*/
    padding-top: 8.5rem;
    padding-bottom: 2.66rem;
    overflow: auto;
    box-sizing: border-box;
  }
  #approve-footer {
    position: absolute;
    bottom: 0;
    height: 2.625rem;
    z-index: 100;
    background-color: white;
  }
  #user-detail {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 6rem;
    background-color: white;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .user-avatar {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 1.8rem;
    overflow: hidden;
    /* margin-left: 2rem; */
  }
  /* .user-message {
    margin-left: 0.8rem;
  } */
  .user-avatarTwo{
    width:  5.5rem;
    height: 5.5rem;
    border-radius: 1.8rem;
    overflow: hidden;
    /* margin-left: 3rem; */
  }
  .vux-tab .vux-tab-item.vux-tab-selected{
    color: #7ab4bf;
    border-bottom: 3px solid #54a7d1;
  }
</style>

<style>
.approve-popup .weui-cells.vux-no-group-title {
  margin-top: 0;
}
.approve-button .weui-btn {
  height: 2.625rem;
  border-radius: 0;
}
.approve-button .weui-btn:after {
  border-radius: 0;
}
.weui-btn_primary{
  background: #5be3a5!important;
}
.weui-btn_warn {
  background: #eb596c!important;
}
.weui-btn_default{
  background: #60cbf7!important;
  color: #fff!important;
}
.warn{
  color: red;
}
.vux-tab-ink-bar{
  background-color: #54a7d1 !important;
}
.trust{
  background-color: #2A70AC !important;
}
</style>
