# slideshowzc

一个轮播插件，样式类似于亚马逊首页的轮播图

1. 可以实现任意个图片的轮播。
2. 有两种轮播方法：无差别滚动(jquery.slideshow.js)和淡入淡出(jquery.slideshowfadein.js)。
3. img的alt值将作为轮播图下方的描述信息,如果没有alt信息，则使用数字索引。
4. 使用Page visibility API使页面不可见时停止轮播动画。

使用方法：

* 加载js文件，
* 一个外层div，假设class为outerbox，必须设置宽度和高度，最好设置overflow：hidden，
* 滚动方式外层div内部嵌套一个div，淡入淡出方式内部不嵌套，
* 内部div内放任意个图片，图片嵌套在<a>标签里，
* $(".outerbox").slideShow({color:"#f77",time:4000});或者$(".outerbox").slideShowFadein({color:"#f77",time:4000});

实参说明：一个设定颜色和轮播间隔的对象。形如{color:"#ff7",time:5000}，对象可接受0~2个属性。
