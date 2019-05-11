<template>
  <div id="header">
    <div class="header-nav">
      <div class="header-nav-content">
        <a href="" class="item">首页</a>
        <a href="" class="item">商城</a>
        <a href="" class="item">我的订单</a>
        <div class="header-about-us item">
          关于我们
          <div class="header-about-us-detail" style="display: none">

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
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-nav{
    width: 100%;
    height: 33px;
    border-bottom: 1px solid #F0F0F0;
  }
  .header-nav-content{
    width: 328px;
    float: right;
    line-height: 33px;
    color: #999;
  }
  .header-about-us{
    display: inline-block;
    }
  .header-about-us:hover{
    cursor: pointer;
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
    width: 1200px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
