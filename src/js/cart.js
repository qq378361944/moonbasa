$(function(){
	/*购物车*/
	if($.cookie("shopping")==undefined){
		$(".shopping").children().css({"display":"none"});
		$("<img/>").attr("src", "../img/nogoods.png").appendTo($(".shopping"));
	}else{
		var shopping = JSON.parse($.cookie("shopping"));
		$("<img/>").attr("src", shopping.imgsrc).appendTo($("#imgsrc"));
		$("<div/>").html("<i>" + shopping.goodsname + "</i><em>品牌：梦芭莎&nbsp;尺寸：" + shopping.size + "&nbsp;颜色：" + shopping.color + "</em>").appendTo($("#goods"));
		$("<div/>").html("￥"+shopping.money+".00").appendTo($("#money"));
		$("<div/>").html("￥"+shopping.money * shopping.num+".00").appendTo($("#hj"));
		$(".num").val(shopping.num);
		$(".fukuan").css({"display":"block"});
		
	}
	/*换一组*/
	$(".cart_footer button").click(function(){
		$(this).prevAll("img.on").removeClass("on").siblings().addClass("on");
		return false;
	});
	/*+和-*/
	$(".min").click(function(){
		var num=$(this).next().val();
		if(num-->1){
			$(this).next("input").val(num);
			$(".pics").text(num+"件");
			$(".howmuch").text($("#money div").text().substring(1)*$(".num").val());
		}
		
	});
	$(".plus").click(function(){
		var num=$(this).prev("input").val();
		num++;
		$(this).prev("input").val(num);
		$(".pics").text(num+"件");
		$(".howmuch").text($("#money div").text().substring(1)*$(".num").val());
	});
	
	/*数量改变引起总价和数量变化*/
	$(".num").on("blur",function(){
		$(".pics").text($(".num").val()+"件");
		$(".howmuch").text($("#money div").text().substring(1)*$(".num").val());
	
	});
});

