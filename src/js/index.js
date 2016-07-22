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
	//轮播图下的li
	var lists = $(".bannerp li");
	//轮播图里面的小圆点
	var selectLists = $(".select_banner");
	var index = 0;
	var timer = setInterval(foucs, 2000);

	function foucs() {
		if(index >= lists.length) {
			index = 0;
		}
		show(index);
		index++;
	}

	function show(index) {
		//把当前的li变成block,把其他li变成none
		var selfindex = index;
		for(var i = 0; i < lists.length; i++) {
			if(i == selfindex) {
				lists[i].style.display = 'block';
				lists[i].style.backgroundImage = "url(css/img/banner" + (i + 1) + ".jpg)";
				selectLists.children("li")[i].style.backgroundImage = "url(css/img/redball.png)"
			} else {
				lists[i].style.display = 'none';
				selectLists.children("li")[i].style.backgroundImage = "url(css/img/whileball.png)"
			}
		}
	}
	selectLists.on("mouseover", "li", function(e) {
		index = $(this).index();
		clearInterval(timer);
		$(this).css("background-image", "url(css/img/redball.png)");
		show(index);
	}).on("mouseleave", "li", function() {
		timer = setInterval(foucs, 2000);
	});
});

/*黑标导航*/
$(function() {
	var navlists = $(".bigbox_right_nav ul li");
	navlists.on("mouseover", function() {
		$(this).css({
			"backgroundColor": "black"
		}).children("a").css({
			"color": "white"
		}).next("span").css({
			"display": "block"
		});
	}).on("mouseleave", function() {
		$(this).css({
			"backgroundColor": "white"
		}).children("a").css({
			"color": "black"
		}).next("span").css({
			"display": "none"
		});
	});
})

/*hover的时候有红色框*/
$(function() {
	var alist = $(".bigbox_right_nav2 a");
	alist.hover(function() {
		$(this).children("img").css({
			"border": "1px solid red"
		});
	}, function() {
		$(this).children("img").css({
			"border": "none"
		});
	});

});