var ja=0,jja;//筑基
var jb=0,jjb;//金丹
var jc=0,jjc;//元婴
var jd=0,jjd;//出窍
var je=0,jje;//分神
var jf=0,jjf;//合体
var jg=0,jjg;//洞虚
var jh=0,jjh;//大乘
var ji=0,jji;//渡劫
var xr=0,xxr=0;//仙人
var xjdj=0;//仙界等级
var year=0;//年
var sjs;//随机数
var jsl=0;//晋升减少数
var rk=10000,rkk,rkbs=0;//每年增加数量，增加倍数
var hl=0,xl=0;//灵魂力,仙力
setInterval(
  function years()
  {
  rkk=Math.floor(rk+rk*0.1*rkbs);
  
  sjs = Math.floor(Math.random()*50+100-jsl);
  
  hl=hl+jb*0.05/100000+jc*0.045/10000+jd*0.04/1000+je*0.035/100+jf*0.03/10+jg*0.025+jh*0.02*10+ji*0.01*100;
  xl=xl+xxr*0.001;
  
  jb=jb*0.95;
  jc=jc*0.955;
  jd=jd*0.96;
  je=je*0.965;
  jf=jf*0.97;
  jg=jg*0.975;
  jh=jh*0.98;
  ji=ji*0.99;
  
  xr=xr+ji/30;
  ji=ji-ji/30;
  ji=ji+jh/sjs;
  jh=jh-jh/sjs;
  jh=jh+jg/sjs;
  jg=jg-jg/sjs;
  jg=jg+jf/sjs;
  jf=jf-jf/sjs;
  jf=jf+je/sjs;
  je=je-je/sjs;
  je=je+jd/sjs;
  jd=jd-jd/sjs;
  jd=jd+jc/sjs;
  jc=jc-jc/sjs;
  jc=jc+jb/sjs;
  jb=jb-jb/sjs;
  jb=jb+ja/sjs;
  ja=ja-ja/sjs;
  ja=ja+rkk;
  
  jja=Math.floor(ja);
  jjb=Math.floor(jb);
  jjc=Math.floor(jc);
  jjd=Math.floor(jd);
  jje=Math.floor(je);
  jjf=Math.floor(jf);
  jjg=Math.floor(jg);
  jjh=Math.floor(jh);
  jji=Math.floor(ji);
  xxr=Math.floor(xr);
  
  year +=1;
  
  
  
  

  }
  ,100)

setInterval(
  function timer()
  {
    document.getElementById("tja").innerHTML="筑基期:"+jja+"(+"+rkk+"/年)";
    document.getElementById("tjb").innerHTML="金丹期:"+jjb;
    document.getElementById("tjc").innerHTML="元婴期:"+jjc;
    document.getElementById("tjd").innerHTML="出窍期:"+jjd;
    document.getElementById("tje").innerHTML="分神期:"+jje;
    document.getElementById("tjf").innerHTML="合体期:"+jjf;
    document.getElementById("tjg").innerHTML="洞虚期:"+jjg;
    document.getElementById("tjh").innerHTML="大乘期:"+jjh;
    document.getElementById("tji").innerHTML="渡劫期:"+jji;
    document.getElementById("years").innerHTML="仙历"+year+"年";
    document.getElementById("txr").innerHTML="飞升仙人:"+xxr;
    document.getElementById("thl").innerHTML="灵魂力:(修仙后死亡将会让天道获得灵魂力)"+hl;
    document.getElementById("txl").innerHTML="仙灵之气:(每年每个仙人产生0.001份仙力)"+xl;

    if(rkbs<10){
      document.getElementById("bt2").style.display="none";
    }
    else
    {
      document.getElementById("bt2").style.display="block";
    }
    
    if(rkbs<50)
    {
      document.getElementById("bt1").innerHTML="花费灵魂力增加每年筑基成功人数10%，当前等级:"+rkbs+"级，当前效果:+"+rkbs*10+"%，你需要"+Math.pow(rkbs+1,3)+"灵魂力以升至下一级";
    }
    else
    {
      document.getElementById("bt1").innerHTML="花费灵魂力增加每年筑基成功人数10%，当前等级:50级，当前效果:+500%，你已升至满级";
    }
    if(jsl<50)
    {
      document.getElementById("bt2").innerHTML="花费灵魂力增加突破几率，当前等级:"+jsl+"级，当前效果:突破概率为1/"+(100-jsl)+"-1/"+(150-jsl)+"，你需要"+Math.pow(jsl+1,4)+"灵魂力以升至下一级";
    }
    else
    {
      document.getElementById("bt2").innerHTML="花费灵魂力增加突破几率，当前等级:50级，当前效果:突破概率为50%-100%，你已升至满级";
    }
    if(xjdj!=0)
    {
      if(xjdj<10)
      {
        document.getElementById("bt3").innerHTML="花费仙灵之气提升仙界等级，当前仙界等级："+xjdj+"，你需要"+Math.pow(10,xjdj)*1000+"仙灵之气以升到下一级。";
      }
      if(xjdj==10)
      {
        document.getElementById("bt3").innerHTML="您的仙界已升至满级，当前仙界等级为10级。";
      }
    }
  },2)

  
function sj1() {
  if(Math.pow(rkbs+1,3)<hl&&rkbs<50)
  {
    hl=hl-Math.pow(rkbs+1,3);
    rkbs +=1;
  }
}

function sj2() {
  if(Math.pow(jsl+1,4)<hl&&jsl<50)
  {
    hl=hl-Math.pow(jsl+1,4);
    jsl +=1;
  }
}

function sj3() {
  if(xjdj>0&&xjdj<10&&xl>=Math.pow(10,xjdj)*1000)
  {
    xl=xl-Math.pow(10,xjdj)*1000;
    xjdj +=1;
  }
  if(xl>=1000&&xr>=1000&&xjdj==0)
  {
    xl=xl-1000;
    xjdj=1;
  }
  
}

