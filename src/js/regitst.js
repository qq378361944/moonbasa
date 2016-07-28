$(function(){
	$("#form").validate({
		rules: {
			email: {
				required: true,
				email:true
			},
			tel: {
				required: true,
				minlength: 11,
				maxlength:11
			},
			userpsd: {
				required: true,
				minlength: 5
			},
			userpsdag: {
				required: true,
				equalTo: "#userpsd"
			}
		},
		messages: {
			username: {
				required: "请输入用户名",
				email:"请输入合法的邮箱地址"
			},
			tel: {
				required: "必须输入手机号码",
				minlength: "手机号码须为11位数",
				maxlength:"手机号码须为11位数"
			},
			userpsd: {
				required: true,
				minlength:"最短都要5位数吖"
			},
			userpsdag: {
				required: true,
				equalTo: "两次密码输入不同"
			}
		},errorPlacement:function(error,element){
			element.next("#loginTip").html("");
			element.css("border-color", "#e60065");
			error.addClass("error").appendTo(element.next("#loginTip"));
		},success:function(label){
			label.parent("#loginTip").prev("input").css("border-color", "#c9c9c9");
			label.addClass("ok").removeClass("error");
			$("#loginTip").remove($("#username-error"));
		},submitHandler:function(form){
            alert("提交事件!");   
            form.submit();
        }    
	});
	
	/*无刷新验证*/
	$("#email").on("change",function(){
		$.ajax({
			type:"get",
			url:"http://localhost:8080/regCheck.jsp",
			dataType:"jsonp",
			data:{"reg":"ok"},
			success:function(msg){
				$.each(msg, function(idx,item) {
					console.log(item.email);
					if($("#email").val()==item.email){
						$("#loginTip").html("邮件已经存在");
					}
				});
			}
		});
	});
	
	/*$("#loginbtn").click(function(){
		window.location.href="login.html"
	});*/
});