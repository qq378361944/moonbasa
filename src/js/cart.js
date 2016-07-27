$(function() {
	var shopping = JSON.parse($.cookie("shopping"));
	$("<img/>").attr("src", shopping.imgsrc).appendTo($("#imgsrc"));
	$("<div/>").html("<i>" + shopping.goodsname + "</i><em>品牌：梦芭莎&nbsp;尺寸：" + shopping.size + "&nbsp;颜色：" + shopping.color + "</em>").appendTo($("#goods"));
	$("<div/>").html("￥"+shopping.money+".00").appendTo($("#money"));
	$("<div/>").html(shopping.money * shopping.num).appendTo($("#hj"));
});