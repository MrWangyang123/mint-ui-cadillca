<template>
<div>
   <div class="home-header">
      <!--顶部-->
      <a href="#">
       <div class="logo"></div>
      </a>
      <a href="#" class="topdrive"></a>
      <a href="#" id="topkf"></a>
      <a href="#" id="choose"></a>
    </div>
    <ul class="wapCom" style="background:#fff;margin-top:10px;padding-bottom:20px;width:375px;height:27px;">
     <h1 style="padding:5px 15px;background:#787878;font-size:1.4em;color:#fff;">预约试驾</h1>
    </ul>
</div>    
</template>
<script>
    
</script>
<style>
     .home-header{
   width:100%;
   height:50px;
   position:fixed;
   background:#fff;
   top:0;
   left:0;
   z-index:99;

   }
.home-header .logo{
        width:142px;
        height:24px;
        background:url("../../img/logo.png") no-repeat;;
        background-size:100%;
        position:absolute;
        left:10px;
        top:10px;
    }
.home-header .topdrive{
    width:21px;
    height:42px;
    background:url("../../img/driveWap.png") no-repeat;
    background-size:21px;
    position:absolute;
    right:50px;
    top:10px;
}   
#topkf{
    width:21.5px;
    height:30px;
    background:url("../../img/topOnline.png") no-repeat;
    background-size:21px;
    position:absolute;
    right:84px;
    top:10px;
} 
#choose{
    width:26px;
    height:15px;
    background:url("../../img/headMenu.png") no-repeat;
    background-size:100%;
    position:absolute;
    right:10px;
    bottom:17px;
}
</style>