$(function() {
	/*头部nav鼠标hover特效*/
	$(".navbox").on("mouseover", "img", function() {
		$(this).attr("src", $(this).attr("src").substring(0, $(this).attr("src").length - 4) + "h.jpg");
	}).on("mouseleave", "img", function() {
		$(this).attr("src", $(this).attr("src").substring(0, $(this).attr("src").length - 5) + ".jpg");
	});

	/*bigbox_right_nav3的hover特效，伪遮罩层*/
	$(".bigbox_right_nav3").on("mouseover", "img", function() {
		$(this).attr("src", $(this).attr("src").substring(0, $(this).attr("src").length - 4) + "h.jpg");
	}).on("mouseleave", "img", function() {
		$(this).attr("src", $(this).attr("src").substring(0, $(this).attr("src").length - 5) + ".jpg");
	});
	
	/*右边漂浮栏hover效果*/
	$(".rightSideBar").on("mouseover", "img", function() {
		$(this).attr("src", $(this).attr("src").substring(0, $(this).attr("src").length - 4) + "h.png");
	}).on("mouseleave", "img", function() {
		$(this).attr("src", $(this).attr("src").substring(0, $(this).attr("src").length - 5) + ".png");
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
		$(this).siblings().css({
			"backgroundColor": "white"
		}).children("a").css({
			"color": "black"
		}).next("span").css({
			"display": "none"
		});
		var idx = $(this).index();
		for(var i = 0; i < 4; i++) {
			$(".bigbox_right_nav" + i + "").css({
				"display": "none"
			});
		}
		$(".bigbox_right_nav" + idx + "").css({
			"display": "block"
		});
	})
})

/*hover的时候有红色框*/
/*此次仍有一个BUG，就是速度过快时候不会触发out*/
$(function() {
	var alist = $(".bigbox_right_nav1 a");
	var eleWidth, eleHeight;
	alist.hover(function() {
		eleWidth = parseInt($(this).children("img").css("width")) - 3;
		eleHeight = parseInt($(this).children("img").css("height")) - 3;
		$(this).children("img").css({
			"border": "1px solid red",
			"width": eleWidth,
			"height": eleHeight
		});
	}, function() {
		$(this).children("img").css({
			"border": "none",
			"width": eleWidth + 3,
			"height": eleHeight + 3
		});
	});
});

/*hover的时候图片居中*/
$(function() {
	$(".bigbox_right_nav2").on("mouseover", "img", function() {
		$(this).animate({
			"left": 0
		});
	}).on("mouseleave", "img", function() {
		$(this).stop().animate({
			"left": 10
		});
	});
});

/*左侧浮动栏*/
$(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() < 500) {
			$(".leftSideBar,.rightSideBar").css("display", "none");
		}else{
			$(".leftSideBar,.rightSideBar").css("display", "block");
		}
	});
});

$(function(){
	$(".list_group").on("mouseover","dl",function(){
		$(this).css("background-color","#d2005c").children("dd").css("display","block");
	}).on("mouseleave","dl",function(){
		$(this).css("background-color","#090909").children("dd").css("display","none");
	});
});

/*登录转过来有用户名*/
$(function(){
	if($.cookie("username")!=undefined){
		$("#login").html("欢迎登录:"+$.cookie("username"));
	}
});