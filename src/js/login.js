$(function() {
	$("#form").validate({
		rules: {
			username: {
				required: true,
				minlength: 4,
				maxlength:15,
			},
			userpsd: {
				required: true,
				minlength: 5,
			}
		},
		message: {
			username: {
				required: "请输入用户名",
				minlength: "用户名必需由四个字母组成",
				maxlength:"用户名不能超过15个字母"
			},
			userpsd: {
				required: "请输入密码",
				minlength: "密码长度不能小于 5 个字母"
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
});
