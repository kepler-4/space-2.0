$(function() {
	//  导航栏鼠标跟随 悬停
	$(".aside li").hover(function() {
		$(".bottomLine").css("width", parseFloat($(this).width()) + "px");
		$(".bottomLine").css("left", parseFloat($(this)[0].offsetLeft + 70) + "px");
	});
	
	//显示二级导航
	$(".fewer").mouseover(function(){
		$(".triangle").show();
	})
	$(".fewer").mouseout(function(){
		$(".triangle").hide();
	});
	
	// 搜索框
	var flag = 1;
	$("#sub").click(function(){
		if(flag == 1){
			$("#search").css("visibility","visible");
     		flag = 0;
		}else{
			$("#search").css("visibility","hidden");
			flag = 1;
		}
	})
	
	
	

	
})
