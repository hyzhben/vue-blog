<template>
    <div class="no-result">
      <div class="no-result-icon"></div>
      <p class="no-result-text">{{title}}</p>
    </div>
</template>

<script>
  export default {
    name: 'no-result',
    props:{
      title:{
        type:String,
        default:''
      }
    }
  }
</script>


<style scoped>

  .no-result{
    text-align: center;
  }
  .no-result-icon{
    margin: 0 auto;
    /*bg-image('no-result');*/
  }
  .no-result-text{
    /*font-size: font-size-medium;*/
    /*color: color-text-d;*/
  }
</style>
