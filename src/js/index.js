
$(function(){
	/*头部nav鼠标hover特效*/
	$(".navbox").on("mouseover","img",function(){
		$(this).attr("src",$(this).attr("src").substring(0,12)+"h.jpg");
	}).on("mouseleave","img",function(){
		$(this).attr("src",$(this).attr("src").substring(0,12)+".jpg");
	});

	/*微博、手机、微信二维图展现特效*/
	$(".tel").on("mouseover",function(){
		$(this).children("img").css("display","block");
	}).on("mouseleave",function(){
		$(this).children("img").css("display","none");
	});
	$(".weibo").on("mouseover",function(){
		$(this).children("img").css("display","block");
	}).on("mouseleave",function(){
		$(this).children("img").css("display","none");
	});
		$(".weixin").on("mouseover",function(){
		$(this).children("img").css("display","block");
	}).on("mouseleave",function(){
		$(this).children("img").css("display","none");
	});
});


