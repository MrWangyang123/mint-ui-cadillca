<template>
 <div class="app-homeContainer">
     <div class="home-header">
      <!--顶部-->
      <a href="#">
       <div class="logo"></div>
      </a>
      <a href="#" class="topdrive"></a>
      <a href="#" id="topkf"></a>
      <a href="#" id="choose"></a>
      <ul class="hidden daohang" style="display: ;border:1px solid red;width:100%;height:180px;position:absolut;top:200px;">
        <li style="width:100%;height:36px;border:1px solid #333;text-align:center;">
         <span style="float:left;text-align:center;font-size:18px;line-height:18px;">预约试驾</span>
         <font style="float:right;">></font>
        </li>
      </ul>
     </div>
    <!--轮播图-->
    <mt-swipe :auto="2000">
        <mt-swipe-item v-for="item in list" :key="item.id">
         <img :src="item.img_url" />
        </mt-swipe-item>    
    </mt-swipe> 
    <div class="indexNav">
        <div class="f1">
         <a href="#">
          <span>
           <img src="../../img/indexL.jpg" alt="">
          </span>
         </a>
        </div>
        <div class="f2">
           <a href="">
            <span>
             <img src="../../img/indexR1.jpg" alt="">
            </span>
           </a>
           <a href="">
            <span>
             <img src="../../img/indexR2.jpg" alt="">
            </span>
           </a>
        </div>
    </div>
    
    
    <div class="daohang"><mt-cell title="所有车型" is-link href="#"></mt-cell></div>
    <mt-cell title="预约试驾" is-link href="#"></mt-cell>
    <mt-cell title="经销商查询" is-link href="#"></mt-cell>
    <mt-cell title="品牌活动" is-link href="#"></mt-cell>
    <mt-cell title="凯迪拉克服务" is-link href="#"></mt-cell>
    <mt-cell title="官方认证二手车" is-link href="#"></mt-cell>
    <mt-cell title="Cadillac Life车主志" is-link href="#"></mt-cell>
    <mt-cell title="Cadillac Life精品馆" is-link href="#"></mt-cell>
    <mt-cell title="留学生免税车服务" is-link href="#"></mt-cell>
    <mt-cell title="CUE移动互联" is-link href="#"></mt-cell>
     <mt-cell title="安吉星" is-link></mt-cell>
      <mt-cell title="品牌公益" is-link></mt-cell>
   
    <div class="tell">
      <a href="#">
       <span>
        <img src="../../img/tel.jpg" alt="">
       </span>
      </a>
    </div>
    <ul>
     <li>
      <a href="http://127.0.0.1:3001/#/try">
       <img src="../../img/wxC.png" alt="">
       <span>官方微信：凯迪拉克</span>
      </a>
     </li>
     <li>
      <a href="#">
       <img src="../../img/wxC.png" alt="">
       <span>官方微信：凯迪拉克</span>
      </a>
     </li>

     <li>
      <a href="#">
       <span>官方微信：凯迪拉克</span>
      </a>
     </li>
     <li>
      <a href="#">
       <span>copyright©2016 上汽通用汽车有限公司</span>
      </a>
     </li>

     <li>
      <a href="#">
       <img src="../../img/beianIcon.png" alt="">
       <span>沪公网安备 05015204号-3</span>
      </a>
     </li>
    </ul>
 </div>
</template>
<script>
    export default {
        name:"homeContainer",
        data(){ return {
            list:[]     //创建data属性保存数据
        }},
         methods:{
             getImage(){
                 var url ="http://127.0.0.1:3000/imagelist";
                // 发送ajax请求并获取图片列表并且显示
                this.$http.get(url).then(result=>{
                   //获取返回数据，保存list属性中
                    this.list = result.body;
                })
             }
         },
         created(){
             this.getImage();
         }
    }
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
/*图片轮播设置高度*/
  .app-homeContainer .mint-swipe{
    height:321px;
  }
  .app-homeContainer .mint-swipe img{
    width:100%;
    height:282px;
  }
  .mint-wsipe-indicators{
      padding:0;
      margin:0;
  }

  .f1{
      width:50%;
      float:left;
  }
  .indexNav span{
      display:block;
  }
  .f1 img{
      width:177.5px;
      height:163.172px;
  }
  .f2{
       display:block;
   width:50%;
   float:right;
  }
  .f2 img{
      width:177.5px;
      height:79.58px;
  }
  .daohang{
      margin-top:130px;
  }
  .tell{
      width:375px;
      height:46px;
      margin-bottom:10px;
      text-align:center;
  }
  .tell img{
      width:140px;
      height:23.5px;
     margin-top:12px;
  }
  ul{
      list-style:none;
      width:100%;
  }
  ul li{
      width:100%;
      height:23px;
      padding-top:10px;
      font-size:14px;
      text-align:center;
  }
  ul li img{
      width:20px;
      height:20px;
  }
  ul li span{
      line-height:25px;
      color:#000;
      padding:2px;
  }
</style>