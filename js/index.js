// $(".iconfont").click(function() {
// 		$(this).css("color","red");


//   });
$(".list-hide-ul li").click(function() {

		
		 var num = $(this).index();

		 $(this).find("h4").css("background","#fff");
		 $(this).siblings().children("h4").css("background","#d3d3d3")
		 

		$(".hide-bottom").eq(num).addClass("flex").siblings("div").removeClass("flex")
});

$(".icon-liebiao").click(function(){

	if($(".list-hide-one").css("display")=="none"){
		$(".list-hide-one").show();
	}else{
		$(".list-hide-one").hide();
	}
});

