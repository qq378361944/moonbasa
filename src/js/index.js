$(function() {
	/*头部nav鼠标hover特效*/
	$(".navbox").on("mouseover", "img", function() {
		$(this).attr("src", $(this).attr("src").substring(0, 12) + "h.jpg");
	}).on("mouseleave", "img", function() {
		$(this).attr("src", $(this).attr("src").substring(0, 12) + ".jpg");
	});

	/*微博、手机、微信二维图展现特效*/
	$(".tel").on("mouseover", function() {
		$(this).children("img").css("display", "block");
	}).on("mouseleave", function() {
		$(this).children("img").css("display", "none");
	});
	$(".weibo").on("mouseover", function() {
		$(this).children("img").css("display", "block");
	}).on("mouseleave", function() {
		$(this).children("img").css("display", "none");
	});
	$(".weixin").on("mouseover", function() {
		$(this).children("img").css("display", "block");
	}).on("mouseleave", function() {
		$(this).children("img").css("display", "none");
	});
});

/*轮播图*/
$(function() {
	var lists = $(".banner li");
	var index=0;
	var timer=setInterval(foucs,3000);
	function foucs() {
		if(index >= lists.length) {
			index = 0;
		}
		show();
		index++;
	}
	function show() {
		//把当前的li变成block,把其他li变成none
		for(var i = 0; i < lists.length; i++) {
			if(i == index) {
				lists[i].style.display = 'block';
				lists[i].style.backgroundImage="url(css/img/banner"+(i+1)+".jpg)";
			} else {
				lists[i].style.display = 'none';
			}
		}
	}
	
});