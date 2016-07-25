/*
	ʹ��gulp�����Զ�������
	1>sass����
	*/
	
//����gulp��
var gulp=require("gulp");
var sass = require("gulp-sass");
var browserSync=require("browser-sync");
var reload=browserSync.reload;

//�½�������������sassԴ�ļ�
gulp.task("buildSass",function(){
	//�ҵ�sassԴ�ļ�
	gulp.src("./src/sass/style.scss")
		//����sassԴ�ļ�
		.pipe(sass())
		//���ָ��Ŀ¼
		.pipe(gulp.dest("./src/css"))
		//������Զ�ˢ��
		.pipe(reload({stream:true}));
});

gulp.task("autoBuild",function(){
	//����һ����̬������
	//server:ָ����������Ŀ¼
	browserSync({
		server:"./src"
	});
	//�����ļ��ı䣬����ִ�ж�Ӧ����
	//����sassԶ����û���޸ģ��о�ִ��buildSass
	gulp.watch("./src/sass/style/scss",["buildSass"])
});