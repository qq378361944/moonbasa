<%@ page contentType="text/html; charset=utf-8" language="java" import="java.sql.*" errorPage="" %>
<%  response.setHeader("Access-Control-Allow-Origin", "*");  %>
<%
//验证用户名是否存在；
//服务器端如何接收客户端传来的数据;

	
  String username = request.getParameter("username");
  String psd = request.getParameter("psd");
	if(username.equals("liuyu")&&psd.equals("123456")){
		out.print("true");	
	}else{
		out.print("用户名或密码不正确");	
	}

%>