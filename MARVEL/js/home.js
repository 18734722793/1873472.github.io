//轮播菜单
$(function(){
	
	//视频
 	$('nav span').click(function(){
 		$('.media').attr('src','video/fcz2.mp4');
 		$('.X').show(400);
 		$('.media').slideDown(400);
 	})
 	$('.bofang').eq(0).click(function(){
 		$('.media').attr('src','video/cdx2.mp4');
 		$('.X').show(400);
 		$('.media').slideDown(400);
 	})
 	$('.bofang').eq(1).click(function(){
 		$('.media').attr('src','video/cdx2.mp4');
 		$('.X').show(400);
 		$('.media').slideDown(400);
 	})
 	$('.bofang').eq(2).click(function(){
 		$('.media').attr('src','video/cdx2.mp4');
 		$('.X').show(400);
 		$('.media').slideDown(400);
 	})
 	$('.bofang').eq(3).click(function(){
 		$('.media').attr('src','video/america.mp4');
 		$('.X').show(400);
 		$('.media').slideDown(400);
 	})
 	$('.bofang').eq(4).click(function(){
 		$('.media').attr('src','video/america.mp4');
 		$('.X').show(400);
 		$('.media').slideDown(400);
 	})
 	$('.bofang').eq(5).click(function(){
 		$('.media').attr('src','video/america.mp4');
 		$('.X').show(400);
 		$('.media').slideDown(400);
 	})
 	$('.bofang').eq(6).click(function(){
 		$('.media').attr('src','video/gangtiexia.mp4');
 		$('.X').show(400);
 		$('.media').slideDown(400);
 	})
 	$('.bofang').eq(7).click(function(){
 		$('.media').attr('src','video/gangtiexia.mp4');
 		$('.X').show(400);
 		$('.media').slideDown(400);
 	})
 	$('.bofang').eq(8).click(function(){
 		$('.media').attr('src','video/gangtiexia.mp4');
 		$('.X').show(400);
 		$('.media').slideDown(400);
 	})
 	$('.bofang').eq(9).click(function(){
 		$('.media').attr('src','video/zzx2.mp4');
 		$('.X').show(400);
 		$('.media').slideDown(400);
 	})
 	$('.bofang').eq(10).click(function(){
 		$('.media').attr('src','video/zzx2.mp4');
 		$('.X').show(400);
 		$('.media').slideDown(400);
 	})
 	$('.bofang').eq(11).click(function(){
 		$('.media').attr('src','video/zzx2.mp4');
 		$('.X').show(400);
 		$('.media').slideDown(400);
 	})
 	$('.bofang').eq(12).click(function(){
 		$('.media').attr('src','video/zzx2.mp4');
 		$('.X').show(400);
 		$('.media').slideDown(400);
 	})
 	$('.X').click(function(){
 		$('.X').hide();
 		$('.media').slideUp(400).attr('src','');
 	})
 	
	
	//大轮播
	var i=0;
	setInterval(function(){
		if(i>1){
			$('.right').css('color','#C9C9C9');
		}else{
			$('.right').css('color','white');
		}
		if(i<1){
			$('.left').css('color','#C9C9C9');
		}else{						
			$('.left').css('color','white');
		}
	},1)
	$('.left').click(function(){
		i--;
		if(i<=0){
			i=0;
		}
        $('.watch').css('display','none');
        console.log($('.watch').eq(2));
        $('.watch').eq(i).show();
        
	})
	$('.right').click(function(){
		i++;
		if(i>=2){
			i=2;
		}
        $('.watch').css('display','none');
        console.log($('.watch').eq(2));
        $('.watch').eq(i).show();     
	})
	
	//选项卡弹出页面
	$('.m_movieone li').click(function(){
		$('.gtx').eq($(this).index()).css('display','block');		 
		$('.m_movienr').css('display','none');
		$('.m_moviecont').css('background-image','url(img/movie_bj.jpg)')
		$('.gb').click(function(){
			$('.gtx').css('display','none');
			$('.m_movietwo').css('display','none');
			$('.m_movieone').css('display','block');
			$('.m_moviecont').css('background-image','url(img/movie_bj-1.jpg)')
		})
	})
	$('.m_movietwo li').click(function(){
		$('.gtx').eq($(this).index()+6).css('display','block');		 
		$('.m_movienr').css('display','none');
		$('.m_moviecont').css('background-image','url(img/movie_bj.jpg)')
		$('.gb').click(function(){
			$('.gtx').css('display','none');
			$('.m_movieone').css('display','none');
			$('.m_movietwo').css('display','block');
			$('.m_moviecont').css('background-image','url(img/movie_bj-1.jpg)')
		})
	})
})
window.onload=function(){
	//选项卡
	var m_moviecont=document.querySelector('.m_moviecont');
	var lis=document.querySelectorAll('.m_moviejd li');
	var uls=document.querySelectorAll('.m_contwrap ul');
	var gtxs=document.querySelectorAll('.gtx');
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			m_moviecont.style.backgroundImage='url(img/movie_bj-1.jpg)';
			for(var a=0; a<gtxs.length;a++){
				gtxs[a].style.display="none";
			}
			for(var n=0;n<lis.length;n++){
				lis[n].style.color="#333";
				lis[n].style.borderBottom="6px solid transparent";
			}
			for(var j=1;j<uls.length;j++){				
				uls[j].style.display='none';
			}
			this.style.color="#f32b1c";
			this.style.borderBottom="6px solid #f32b1c";
			uls[this.index+1].style.display='block';
		}
	}
	//选项卡
	var zuo1=document.getElementById("zuo1");
	var yuo1=document.getElementById("zuo1");
	var uld=document.getElementById('uld');
	var w=uld.getBoundingClientRect().width;
	zuo1.onclick=function(){
		move(uld,{left:0},1000,'linear',function(){
			zuo1.style.color='#CCC';
			you1.style.color='#333';
		});
	}
	you1.onclick=function(){
		move(uld,{left:-w/2},1000,'linear',function(){
			zuo1.style.color='#333';
			you1.style.color='#ccc';
		});
	}
}
