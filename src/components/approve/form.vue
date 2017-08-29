<template>
  <div class="approve-form">
    <div class="form-item" v-for="item in list">
      <label class="form-item-label">{{item.label}}:</label>
      <span class="form-item-value">{{item.value}}</span>
    </div>
  </div>
</template>

<script>
import { FormPreview } from 'vux'
export default {
  components: {
    FormPreview
  },
  data () {
    return {
      list: [{
        label: '自动编号',
        value: '20170039'
      }, {
        label: '日期',
        value: '2017-08-17'
      }, {
        label: '制单人',
        value: '梧桐'
      }, {
        label: '制单人部门',
        value: 'I1链融云-运营部(2017)'
      }, {
        label: '办理事务',
        value: '购买电动打蛋机'
      }, {
        label: '富文本编辑',
        value: '大家一起购买电动打蛋机，大家一起购买电动打蛋机，大家一起购买电动打蛋机，大家一起购买电动打蛋机，大家一起购买电动打蛋机'
      }, {
        label: '抄送人',
        value: '谢杰'
      }
      ]
    }
  },
  created () {
    console.log('created')
  },
  activated () {
    console.log('activated')
  },
  deactivated () {
    console.log('deactivated')
  }
}
</script>

<style scoped>
  .form-item {
    line-height: 2;
    font-size: .9rem;
    background-color: white;
    margin-bottom: 1px;
    padding-top: .5rem;
    padding-bottom: .5rem;
    display: flex;
  }
  .approve-form {
    padding-top: .5rem;
    background-color: #fbf9fe;
  }
  .form-item-label {
   /* min-width: 4rem;
    max-width: 50%;*/
  /*  float: left;*/
    margin-left: 1rem;
    margin-right: 1rem;
    color: #999999;
    width: 28%;
   /* text-align: justify;
    text-align-last: justify;*/
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .form-item-value {
    display: block;
    overflow: hidden;
    word-break: normal;
    word-wrap: break-word;
    color: #555;
    width: 70%;
    padding-right: 10px;
  }
  .weui-btn_primary{
    background: red!important;
  }
</style>
