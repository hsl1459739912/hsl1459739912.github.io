//引入gulp
const gulp = require('gulp');//gulp对象
const less = require('gulp-less');//编译less
const babel = require('gulp-babel');//编译es6
const ugly = require('gulp-uglify');//丑化代码
const rename = require('gulp-rename');//重命名
const notify = require('gulp-notify');//发送通知
const plumber = require('gulp-plumber');//发送异常
const rev = require('gulp-rev');//自动注入
const del = require('del');//删除文件
const autopro = require('gulp-autoprefixer');//自动添加前缀
const cleancss = require('gulp-clean-css');//压缩css文件
const concat = require('gulp-concat')//合并
const replace = require('gulp-html-replace')//在html引入文件
const htmlmin = require('gulp-htmlmin')//压缩html


//编译js


//删除文件
gulp.task('del',()=>{
    del.sync(['./dist']);
})


gulp.task('compJS',()=>{
    return gulp.src(['./src/js/tools.js','./src/js/index.js'])
    .pipe(babel({
        presets:['env']
    }))
    //发送异常
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(ugly())
    .pipe(rename({
        suffix:'.min'
    }))
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest('./dist/static/js'))
    //发送通知
    .pipe(notify({message: 'compile-less task is ok.'}));
})

//编译css
gulp.task('compCSS',()=>{
    return gulp.src('./src/less/*.less')
    .pipe(less())
    //浏览器添加前缀
    .pipe(autopro({
        browsers: ['last 2 versions'],      // 浏览器版本
        
        cascade:true,                       // 美化属性，默认true
        add: true,                          // 是否添加前缀，默认true
        remove: true,                       // 删除过时前缀，默认true
        flexbox: true,                      // 为flexbox属性添加前缀，默认true
    }))
    //压缩css文件
    .pipe(cleancss())
    .pipe(concat('index.min.css'))
    //.pipe(rev())  自动生成hash值
    .pipe(gulp.dest('./dist/static/css'));
})

//编译html
gulp.task('compHTML',()=>{
    return gulp.src('./src/*.html')
    .pipe(replace({
        'css':'./css/index.min.css',
        'js':'./js/index.min.js'
    }))
    .pipe(htmlmin({
         // 1. 清除html注释	
         removeComments:true, 
         // 2. 清除空格(压缩)
         collapseWhitespace: true, 
         // 3. 省略布尔属性的值 <input checked="true"/> ==> <input />
         collapseBooleanAttributes: true, 
         // 4. 删除所有空格作属性值 <input id="" /> ==> <input />
         removeEmptyAttributes: true,
         // 5. 删除<script>的type="text/javascript"
         removeScriptTypeAttributes: true,
         // 6. 删除<style>和<link>的type="text/css"
         removeStyleLinkTypeAttributes: true,
         // 7. 压缩页面css
         minifyCSS: true,
         // 8. 压缩页面js
         minifyJS: true
    }))
    .pipe(gulp.dest('./dist/static'));
})

gulp.task('default',['compJS','compCSS','compHTML'],()=>{
    console.log('compileJS is done');
})


//监听文件变化
gulp.task('dev',()=>{
    gulp.watch('./src/less/*.less',['compCSS']);
    gulp.watch('./src/**/*.js',['compJS']);
    gulp.watch('./src/*.html',['compHTML']);

})






//定义任务

gulp.task('one',(cd)=>{
    setTimeout(()=>{
        console.log('one');
        cd();
    },2000)
})
gulp.task('helloWorld',()=>{
    console.log('hello,gulp');
});

