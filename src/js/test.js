$(function(){
	$(".list_group").on("mouseover","dl",function(){
		$(this).css("background-color","#d2005c").children("dd").css("display","block");
	}).on("mouseleave","dl",function(){
		$(this).css("background-color","#090909").children("dd").css("display","none");
	});
});