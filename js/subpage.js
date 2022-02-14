$(function(){
	// tab栏切换
	$(".menu li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		// 点击的同时，得到当前li 的索引号
		var index =$(this).index();
		console.log(index);
		$(".item").eq(index).show().siblings().hide();
	})
	
	// 隔行换色
	$(".opinion").find("div:odd").css("background-color","#f4f4f4");
	
})