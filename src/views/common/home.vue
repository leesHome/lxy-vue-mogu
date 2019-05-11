/**
* @author miclxy
* @date 2019/5/10 23:38
*/
<template>
  <div>
    <Headers></Headers>
    <Contents></Contents>
    <Footers></Footers>
  </div>
</template>

<script>
  import Headers from './Headers'
  import Contents from './Contents'
  import Footers from './Footers'
  export default {
    name: "home",
    components: {
      Headers,
      Contents,
      Footers
    }
  }
</script>

<style scoped>

</style>
