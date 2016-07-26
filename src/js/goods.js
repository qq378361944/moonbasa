/*分享小图标*/
$(function() {
	$(".this_share").hover(function() {
		$(this).children("div").css("display", "block");
	}, function() {
		$(".goshare").css("display", "none");
	})
});
/*hover时候有小黑框以及图片的动态转换*/
$(function() {
	$(".smallPic").on("mouseover", "img", function() {
		$(".smallPic img").css("outline", "none");
		$(this).css("outline", "1px solid black");
		$(".bg img").attr("src", $(this).attr("src"));
	}).on("mouseleave", "img", function() {
		$(".smallPic img").css("outline", "none");
		$(this).css("outline", "1px solid black");
	});
});
/*左右控制图片*/
$(function() {
	var i = 0;
	var length = $(".smallPic li").length - 5;
	$(".bg2 .left").click(function() {
		console.log(i);
		if(i < length) {
			$(".smallPic li")[i].style.display = "none";
			i++;
		}
	});
	$(".bg2 .right").click(function() {
		console.log(i);
		i--;
		if(i > -1) {
			$(".smallPic li")[i].style.display = "block";
		}else if(i=-1){
			i=0;
		}
	});
});

/*收起*/
$(function(){
	$(".up").click(function(){
		$(".youhui")[0].style.border="none";
		$(".youhui")[0].style.backgroundColor="#f4f4f4";
		$(".youhui")[0].style.width="500px";
		for (var i=0;i<$(".youhui li").length;i++) {
			$(".youhui li")[i].style.border="none";
			if(i!=1){
				$(".youhui li")[i].style.display="none";
			}
		}
		$(".down").css("display","block");
		return false;
	});
});
/*下来*/
$(function(){
	$(".down").click(function(){
		$(".youhui li").css({"display":"block","border-bottom":"1px dotted #E8E8E8"});
		$(".youhui").css({"background-color":"#fff","padding":"5px 10px 10px","border":"1px solid #e3e3e3","width":"498px"});
		$(this).css("display","none");
		return false;
	});
});
/*二维码*/
$(function(){
	$(".erweima").on("mouseover","img",function(){
		$(this).attr("src",$(this).attr("src").substring(0,$(this).attr("src").length-5)+"2.gif");
	}).on("mouseleave","img",function(){
		$(this).attr("src",$(this).attr("src").substring(0,$(this).attr("src").length-5)+"1.gif");
	}).on("click","img",function(){
		$(".telerwei").slideDown();
	});
});
/*关闭*/
$(function(){
	$(".close").click(function(){
		$(".telerwei").slideUp();
	});
});
/*lb*/
$(function(){
	var lilength=parseInt($(".lb li").length/3);
	var a=0;
	$("#lb_next").click(function(){
		a++;
		console.log(a);
		if(a<lilength){
			$(".lb li:lt("+a*3+")").slideUp(600);
		}else{
			a--;
		}
	});
	$("#lb_prev").click(function(){
		a--;
		$(".lb li:gt("+(3*a)+")").slideDown();
		
	});
});