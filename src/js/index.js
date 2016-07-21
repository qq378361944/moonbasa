$(function(){
	$(".navbox").on("mouseover","img",function(){
		$(this).attr("src",$(this).attr("src").substring(0,12)+"h.jpg");
	}).on("mouseleave","img",function(){
		$(this).attr("src",$(this).attr("src").substring(0,12)+".jpg");
	});
});
