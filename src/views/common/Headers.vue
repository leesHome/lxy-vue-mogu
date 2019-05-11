<template>
  <div id="header">
    <div class="header-nav">
      <div class="header-nav-wrap">
        <div class="header-nav-content">
          <a href="" class="item">
            <i></i>
            首页
          </a>
          <a href="" class="item">
            <i></i>
            商城
          </a>
          <a href="" class="item">
            我的订单
          </a>
          <div class="header-about-us item" @mouseenter="enter" @mouseleave="leave">
            关于我们
            <i id="icon-deltail"></i>
            <div class="header-about-us-detail" v-show="hoverStates">
              hello world
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-wrap"></div>
  </div>

</template>

<script>
export default {
  name: 'Headers',
  data () {
    return {
      msg: 'Welcome',
      hoverStates: false,
    }
  },
  methods: {
    enter () {
      this.hoverStates = true
    },
    leave() {
      this.hoverStates = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #header{
    position: relative;
    clear: both;
    background: #fff;
    z-index: 999;
    .header-nav{
      width: 100%;
      height: 33px;
      border-bottom: 1px solid #F0F0F0;
    }
    .header-nav-wrap {
      width: 1690px;
      margin-left: auto;
      margin-right: auto;
      .header-nav-content{
        width: auto;
        float: right;
        line-height: 33px;
        color: #999;
        .item{
          display: inline-block;
          i {
            width: 10px;
            height: 12px;
            background-repeat: no-repeat;
            display: inline-block;
            vertical-align: middle;
            margin-right: 3px;
            background-size: contain;
          }
        }
        .item:not(:first-child):before {
          content: "|";
          margin: 0 20px;
          font-weight: 300;
        }
        .item:nth-of-type(1){
          i {
            background-image: url(https://s10.mogucdn.com/mlcdn/c45406/181226_5f4j2e62hj1kk9dd49f433b08bfbh_20x20.png);
          }
        }
        .item:nth-of-type(2){
          i {
            background-image: url(https://s10.mogucdn.com/mlcdn/c45406/181212_4c5eb9ijbla4a1948fhjiiiag725h_20x20.png);
          }
        }
      }
    }
    .header-about-us {
      &:hover{
        cursor: pointer;
      }
      #icon-deltail {
        display: inline-block;
        margin-left: 4px;
        width: 6px;
        height: 6px;
        background-image: url(https://s10.mogucdn.com/mlcdn/c45406/181205_8eg8ea1a3k85c16ai1hl4735kalkf_16x10.png);
        background-repeat: no-repeat;
        background-size: 100%;
      }
    }
    .header-about-us-detail{
      position: absolute;
      right: 30px;
      background: #fff;
      z-index: 9999;
      border: 0 solid #E5E5E5;
      box-shadow: 0 0 20px 0 rgba(0,0,0,.05);
      border-top: 1px solid #F0F0F0;
      border-radius: 2px;
    }
    .header-wrap {
      width: 1690px!important;
      margin-left: auto;
      margin-right: auto;
      height: 100px;
    }
  }

</style>
