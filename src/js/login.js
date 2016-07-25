$(function() {
	$("#form").validate({
		errorPlacement: function(error, element) {
			error.appendTo(element.next("#loginTip"));
		},
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			userpsd: {
				required: true,
				minlength: 5
			}
		},
		message: {
			username: {
				required: "请输入用户名",
				minlength: "用户名必需由两个字母组成"
			},
			userpsd: {
				required: "请输入密码",
				minlength: "密码长度不能小于 5 个字母"
			}
		},

	});
});