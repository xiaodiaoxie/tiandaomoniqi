
setInterval(
    function color(){
        if(hl>=Math.pow(rkbs+1,3))
        {
            document.getElementById("bt1").style.background="green";
        }
        else
        {
            document.getElementById("bt1").style.background="red";
        }
        if(hl>=Math.pow(jsl+1,4))
        {
            document.getElementById("bt2").style.background="green";
        }
        else
        {
            document.getElementById("bt2").style.background="red";
        }
        if(xl>=Math.pow(10,xjdj)*1000&&xr>=1000)
        {
            document.getElementById("bt3").style.background="green";
        }
        else
        {
            document.getElementById("bt3").style.background="red";
        }
        
    }, 2);