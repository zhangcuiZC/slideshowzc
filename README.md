# slideshowzc
一个轮播插件，样式类似于亚马逊首页的轮播图-自用
其实就是一个函数，可以实现任意个图片的轮播。
img的alt值将作为轮播图下方的描述信息。
使用方法：
0、加载js文件，
1、一个外层div，class为outerbox，必须设置宽度和高度，最好设置overflow：hidden，
2、outerbox内部嵌套一个innerbox的div，
3、innerbox内放任意个图片，图片嵌套在<a>标签里，
4、$(function(){
	  slideshow(5000,"#c81623");
  });
  其中第一个参数是轮播间隔（毫秒），第二个参数是颜色。不写参数的话默认是5s，蓝色。
