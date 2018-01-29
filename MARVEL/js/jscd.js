setInterval(function(){
	var w=document.documentElement.clientWidth;
	var xtg=document.getElementsByClassName('xtg');
	var aside=document.getElementsByTagName('aside');
	var h=w/10;
	var art=document.getElementById('art');
	art.style.height=h*3+'px';
	for(var i=0;i<xtg.length;i++){				
		xtg[i].style.width=h+'px';
		xtg[i].style.height=h+'px';
	};
	for(var j=0;j<aside.length;j++){				
		aside[j].style.height=h*3+'px';
	};
},1)
window.onload=function(){
	var xtg=document.getElementsByClassName('xtg');
	var w=document.documentElement.clientWidth;
	var h=w/10;
	var txts=document.getElementsByClassName('txt');
	for(var i=0;i<xtg.length;i++){
		xtg[i].index=i;
		xtg[i].onmouseover=function(){			
			txts[this.index].style.display="block";
			txts[this.index].style.background='rgba(0,0,0,0.5)'
		}
		xtg[i].onmouseout=function(){			
			txts[this.index].style.display="none";
		}
	}
	//轮播功能
	var z=document.getElementById('zuo');
	var y=document.getElementById('you');
	var lbt=document.getElementById('lbt');
	var s=0;
	z.onclick=function(){
		s=s+2;
		move(lbt,{left:-h*s-h*10},500,'linear',function(){
			if(s>9){
				lbt.style.left=-h*10+'px';
				s=0;
			}
		});
	}
	y.onclick=function(){
		s=s-2;
		move(lbt,{left:-h*s-h*10},500,'linear',function(){
			if(s<-9){
				lbt.style.left=-h*10+'px';
				s=0;
			}
		});
	}
}
			
