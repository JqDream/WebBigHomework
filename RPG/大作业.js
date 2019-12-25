function find(){
	n1.innerHTML="请输入4~10位用户名";
}
function hide(){
	n1.innerHTML="";
}
function find2(){
	n2.innerHTML="请输入6~12位密码";
}
function hide2(){
    n2.innerHTML="";
}
function DNF1(){
    first1.style.backgroundImage="url(DNF.jpg)";
}
function DNF2(){
    first1.style.backgroundImage="url(飞机.jpg)";
}
function ZL1(){
    first1.style.backgroundImage="url(只狼2.jpg)";
}
function ZL2(){
    first1.style.backgroundImage="url(飞机.jpg)";
}
function MS1(){
    first1.style.backgroundImage="url(魔兽.jpg)";
}
function MS2(){
    first1.style.backgroundImage="url(飞机.jpg)";
}
function UN1(){
    first1.style.backgroundImage="url(MC.jpg)";
}
function UN2(){
    first1.style.backgroundImage="url(飞机.jpg)";
}
function xianshi(){
    document.getElementById('div1').style.display='block';
}
function guanbi(){
    document.getElementById('div1').style.display='none';
}
function shipin1(){
    document.getElementById('shipin1').style.display='block';
}
function shipin1hide(){
    var z=document.getElementById("shipin11");
    document.getElementById('shipin1').style.display='none';
    z.load();
}
function shipin2(){
    document.getElementById('shipin2').style.display='block';
}
function shipin2hide(){
    var x=document.getElementById("shipin22");
    document.getElementById('shipin2').style.display='none';
    x.load();
}
function shipin3(){
    document.getElementById('shipin3').style.display='block';
}
function shipin3hide(){
    var c=document.getElementById("shipin33");
    document.getElementById('shipin3').style.display='none';
    c.load();
}
function check(){
    var i=document.getElementById("yhm").value.length;
    var j=document.getElementById("mm").value.length;
    var k=document.getElementById("touxiang");		
    if(i==w&&j==q){
        document.getElementById('div1').style.display='none';
        // k.src="头像.jpg";
        document.getElementById('up').style.display='none';
        document.getElementById('up2').style.display='block';
    }
    else if(i!=w){
        var p1=document.getElementById("n1")
        var text1=document.createTextNode( "用户名不存在" ); 
        p1.appendChild(text1);
    }
    else if(j!=q){
        var p2=document.getElementById("n2")
        var text2=document.createTextNode( "密码错误" ); 
        p2.appendChild(text2);
    }
    else{
        var p1=document.getElementById("n1")
        var text1=document.createTextNode( "请输入用户名" ); 
        p1.appendChild(text1);
        var p2=document.getElementById("n2")
        var text2=document.createTextNode( "请输入密码位" ); 
        p2.appendChild(text2);
    }

}
function tuichu(){
    document.getElementById('up2').style.display='none';
    document.getElementById('up').style.display='block';            
}
function xszc(){
    document.getElementById('div1').style.display='none';
    document.getElementById('div2').style.display='block';
}
function guanbi2(){
    document.getElementById('div2').style.display='none';
}
var w;
function find3(){
	n11.innerHTML="请输入4~10位用户名";
}
function hide3(){
    n11.innerHTML="";
    w=document.getElementById("yhm11").value.length;
    if(w<=10&&w>=4){
        var p1=document.getElementById("n11")
        var text1=document.createTextNode( "账号可用" ); 
        p1.appendChild(text1);
    }
    else if(w>10||w<4&&w>0){
        var p1=document.getElementById("n11")
        var text1=document.createTextNode( "用户名位数不对" ); 
        p1.appendChild(text1);
    }
    else{
        var p1=document.getElementById("n11")
        var text1=document.createTextNode( "请输入4~10位用户名" ); 
        p1.appendChild(text1);
    }
}
var q;
function find4(){
	n22.innerHTML="请输入6~12位密码";
}
function hide4(){
    n22.innerHTML="";
    q=document.getElementById("mm11").value.length;
    if(q<=12&&q>=6){
        var p1=document.getElementById("n22")
        var text1=document.createTextNode( "密码可用" ); 
        p1.appendChild(text1);
    }
    else if(q>12||q<6&&q>0){
        var p1=document.getElementById("n22")
        var text1=document.createTextNode( "密码位数不对" ); 
        p1.appendChild(text1);
    }
    else{
        var p1=document.getElementById("n22")
        var text1=document.createTextNode( "请输入6~12位密码" ); 
        p1.appendChild(text1);
    }
}
var k;
function find5(){
	n33.innerHTML="请再次输入密码";
}
function hide5(){
    n33.innerHTML="";
    var k=document.getElementById("mm12").value.length;
    if(k==q){
        var p1=document.getElementById("n33")
        var text1=document.createTextNode( "密码相同" ); 
        p1.appendChild(text1);
    }
    else{
        var p1=document.getElementById("n33")
        var text1=document.createTextNode( "密码不同" ); 
        p1.appendChild(text1);
    }
}
function zcgb(){
    document.getElementById('div2').style.display='none';
    document.getElementById('div1').style.display='block';
}