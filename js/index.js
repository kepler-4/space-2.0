$(function () {

	// 轮播图
	// var size=$(".slides li").size();
	// var fangxiang = 0;
	// for (var i = 1; i <= size;i++){
	// 	var li="<li>"+i+"</li>";
	// 	$(".pointer").append(li);
	// };
	// $(".slides li").eq(0).show();
	// $(".pointer li").eq(0).addClass("active");
	// $(".pointer li").mouseover(function(){
	// 	$(this).addClass("active");
	// 	$(this).siblings().removeClass("active"); 
	// 	var index = $(this).index();
	// 	$(".slides li").eq(index).siblings().fadeOut(500);
	// 	$(".slides li").eq(index).fadeIn(400);
	// 	i=index;
	// })
	// var i = 0;
	// var t = window.setTimeout(move,2000);

	// function move(){
	// 	if (fangxiang == 0){
	// 		i++;
	// 		if (i == size){
	// 			i = 0;
	// 		}
	// 	}
	// 	else{
	// 		i--;
	// 		if (i == -1){
	// 			i = size-1;
	// 		}
	// 	}
	// $(".pointer li").eq(i).addClass("active");
	// $(".pointer li").eq(i).siblings().removeClass("active"); 
	// 	$(".slides li").eq(i).fadeIn(500);
	// 	$(".slides li").eq(i).siblings().fadeOut(500);

	// 	t = window.setTimeout(move,2000);
	// }
	// $(".slideshow").hover(function(){
	// 	window.clearTimeout(t);
	// 	}, function(){
	// 		t = setTimeout(move,2000)
	// })
	// $(".prev").click(function(){
	// 	fangxiang = 1;
	// })
	// $(".next").click(function(){
	// 	fangxiang = 0;
	// });



	// 添加阴影 放大
	$(".project div").mouseover(function () {
		// $(this).css("box-shadow", " 0 15px 30px rgba( 0, 0, 0,.2)");
		$(this).css("transform", "scale(1.1)");
	});
	$(".project div").mouseout(function () {
		// $(this).css("box-shadow", " 0 15px 30px rgba( 0, 0, 0, 0)");
		$(this).css("transform", "scale(1)");
	})

	//图片无缝滚动
	var lv = 0;
	$(function () {
		$("#video3 li").each(function (index, element) {
			$("#video3").append($("#video3 li").eq(index).clone());
		});
		move();
	});

	function move() {
		$("#video3").hover(
			function () {
				$(this).stop(true);
			},
			function () {
				move();
			}
		);
		$("#video3").animate({
			marginLeft: -800
		}, 8000);
		$("#video3").animate({
			marginLeft: 0
		}, 0, move);
	}


	// 电梯导航
	// 互斥锁
	var flag = true;
	// 1.显示隐藏电梯导航
	var toolTop = $(".information").offset().top;
	toggleTool();

	function toggleTool() {
		if ($(document).scrollTop() >= toolTop) {
			$(".elevator").fadeIn();
		} else {
			$(".elevator").fadeOut();
		};
	}

	$(window).scroll(function () {
		toggleTool();
		// 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名

		if (flag) {
			$(".floor .wrap").each(function (i, ele) {
				if ($(document).scrollTop() >= $(ele).offset().top) {
					console.log(i);
					$(".elevator li").eq(i).addClass("current").siblings().removeClass();
				}
			})
		}

	});
	// 2. 点击电梯导航页面可以滚动到相应内容区域
	$(".elevator li").click(function () {
		flag = false;
		console.log($(this).index());
		// 当我们每次点击小li 就需要计算出页面要去往的位置 
		// 选出对应索引号的内容区的盒子 计算它的.offset().top
		var current = $(".floor .wrap").eq($(this).index()).offset().top;
		// 页面动画滚动效果
		$("body, html").stop().animate({
			scrollTop: current
		}, function () {
			flag = true;
		});
		// 点击之后，让当前的小li 添加current 类名 ，其它移除current类名
		$(this).addClass("current").siblings().removeClass();
	})

	// 点击显示与隐藏
	var $hidCategory = $(".product1");
	$hidCategory.hide();
	var $showCategory = $(".more1 p");
	$showCategory.click(function () {
		if ($hidCategory.is(":hidden")) {
			$hidCategory.show();
			$(".space").css("height", "1655px");
		} else {
			$hidCategory.hide();
			$(".space").css("height", "1250px");
		}
		return false; //超链接不跳转
	});


	// 高亮显示
	$(".education ul li").hover(function () {
		$(this).siblings().stop().fadeTo(400, 0.5);
	}, function () {
		$(this).siblings().stop().fadeTo(400, 1);
	});
})
