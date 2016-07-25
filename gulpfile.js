/*
	使用gulp构建自动化操作
	1>sass编译
	*/
	
//引入gulp包
var gulp=require("gulp");
var sass = require("gulp-sass");
var browserSync=require("browser-sync");
var reload=browserSync.reload;

//新建任务，用来编译sass源文件
gulp.task("buildSass",function(){
	//找到sass源文件
	gulp.src("./src/sass/style.scss")
		//编译sass源文件
		.pipe(sass())
		//输出指定目录
		.pipe(gulp.dest("./src/css"))
		//浏览器自动刷新
		.pipe(reload({stream:true}));
});

gulp.task("autoBuild",function(){
	//创建一个静态服务器
	//server:指定服务器根目录
	browserSync({
		server:"./src"
	});
	//监听文件改变，并且执行对应任务
	//监听sass远吗有没有修改，有就执行buildSass
	gulp.watch("./src/sass/style/scss",["buildSass"])
});