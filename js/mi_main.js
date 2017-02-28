var i=1;
var lengVa=0;
var tru=false;
$(function(){
$("#logo_btn li").mouseover(function(){
	$(this).addClass("active").siblings().removeClass("active");
	var index=$("#logo_btn li").index($(this));
	i=index;
	if(tru){
		$("#logo_img img").attr("src","images/lb_"+(4-i)+".png");
		tru=false;
	}else{
		$("#logo_img img").attr("src","images/lb_"+(index+1)+".png");
	}
});
});
var sx=function(){
	$("#logo_btn li").eq(i).trigger('mouseover');
	i++;
	lengVal=$("#logo_btn>li").length-1;
	if(i>lengVal){
		i=0;
	}
}
$("#logo .left").click(function(){
	tru=true;
	$("#logo_btn li").eq(i).trigger("mouseover");
	i--;
	if (i<0)
	{
		i=lengVal+1;
	}
})
$("#logo .right").click(function(){
	$("#logo_btn li").eq(i).trigger("mouseover");
	i++;
	if(i>lengVal){
		i=0;
	}
})
$("#logo .left").hover(function(){
	clearInterval(tag)
},function(){
	tag=setInterval("sx()",3000);
})
$("#logo .right").hover(function(){
	clearInterval(tag)
},function(){
	tag=setInterval("sx()",3000);
})
$("#logo_img li").hover(function(){
		clearInterval(tag)
	},function(){
		tag=setInterval("sx()",3000);
})
var tag=setInterval("sx()",3000);
$(".mi_popularize .mi_right .left").click(function(){
	$(this).css({"background-image":"url(images/back_1.png)"})
	$(".mi_popularize .mi_right .right").css({"background-image":"url(images/more.png)"})
	$(".mi_popularize  .mi_ad ul li").animate({"right":"0px"},500)
	or=true;
})
$(".mi_popularize .mi_right .right").click(function(){
	$(this).css({"background-image":"url(images/more_1.png)"});
	$(".mi_popularize .mi_right .left").css({"background-image":"url(images/back.png)"})
	$(".mi_popularize  .mi_ad ul li").animate({"right":"+1250px"},500)
	or=false;
})
var or=false;
var lunbo= function(){
	if(or==false){
		$(".mi_popularize .mi_right .left").trigger('click');
		or=true;
	}else{
		$(".mi_popularize .mi_right .right").trigger('click');
		or=false;
	}
}
var tab=setInterval("lunbo()",5000)
/*推广轮播的border颜色数组*/
var arr=["#FCB45D","#8CFA97","#71EEF5","red","#3DEEF7","#FCB45D","#8CFA97","#71EEF5","red","#FCB45D"];
for(var color=0;color<arr.length;color++){
	$(".mi_popularize  .mi_ad ul li").eq(color).css({"border-top":"1px solid"+arr[color]})
}
/*商品搭配鼠标移动到当前搭配类型是切换商品*/
$("#mi_1 .match .match_float ul li").mousemove(function(){
	var index=$(this).index();
	$("#mi_1 .match .match_float ul li").removeClass("items").eq(index).addClass("items");
	$("#mi_1 .mi_match_main ul").hide();
	$("#mi_1 .mi_match_main ul").eq(index).show();
})
/*商品搭配鼠标移动到当前搭配类型是切换商品1*/
$("#mi_2 .match .match_float ul li").mousemove(function(){
	var index=$(this).index();
	$("#mi_2 .match .match_float ul li").removeClass("items").eq(index).addClass("items");
	$("#mi_2 .mi_match_main ul").hide();
	$("#mi_2 .mi_match_main ul").eq(index).show();
})
/*商品搭配鼠标移动到当前搭配类型是切换商品2*/
$("#mi_3 .match .match_float ul li").mousemove(function(){
	var index=$(this).index();
	$("#mi_3 .match .match_float ul li").removeClass("items").eq(index).addClass("items");
	$("#mi_3 .mi_match_main ul").hide();
	$("#mi_3 .mi_match_main ul").eq(index).show();
})

/*商品搭配隐藏的评价*/
var tt=null;var tru1=0;
$("#mi_1 .mi_match_main ul li").hover(function(){
	var tru=$(this).find(".ainmate").length;
	var index=$(this).index()
	if(tru){
		tt=setTimeout(function(){
			$("#mi_1 .mi_match_main ul li").eq(index).find("a .ainmate").slideDown(300);
			tru1++;
		},200)
	}
},function(){
	if (tru1) {
		$("#mi_1 .mi_match_main ul li").find("a .ainmate").slideUp(300);
	}
	clearTimeout(tt);
	
})
/*商品搭配隐藏的评价1*/
var tt1=null;var tru2=0;
$("#mi_2 .mi_match_main ul li").hover(function(){
	var tru=$(this).find(".ainmate").length;
	var index=$(this).index()
	if(tru){
		tt1=setTimeout(function(){
			$("#mi_2 .mi_match_main ul li").eq(index).find("a .ainmate").slideDown(300);
			tru2++;
		},200)
	}
},function(){
	if (tru2) {
		$("#mi_2 .mi_match_main ul li").find("a .ainmate").slideUp(300);
	}
	clearTimeout(tt1);
	
})
/*商品搭配隐藏的评价1*/
var tt2=null;var tru3=0;
$("#mi_3 .mi_match_main ul li").hover(function(){
	var tru=$(this).find(".ainmate").length;
	var index=$(this).index()
	if(tru){
		tt2=setTimeout(function(){
			$("#mi_3 .mi_match_main ul li").eq(index).find("a .ainmate").slideDown(300);
			tru3++;
		},200)
	}
},function(){
	if (tru3) {
		$("#mi_3 .mi_match_main ul li").find("a .ainmate").slideUp(300);
	}
	clearTimeout(tt2);
	
})
//为您推荐
var mi_count=0,mi_count_=3;
$(".mi_recommend_1 .right").click(function(){//右
	mi_count++;
	mi_count_--;
	if(mi_count_ < 3){
		$(".mi_recommend_1 .right_").css({"background-image":"url(images/back_1.png)"});		
	}
	if(mi_count==4){
		mi_count=3;
		mi_count_=0;
	}else{
		if(mi_count==3){
			$(this).css({"background-image":"url(images/more.png)"});
		}
		$(".mi_recommend_goods ul li").animate({"right":"+=1250px"},500);
	}
	/*mi_count++;
	if(mi_count%4 == 0){
		mi_count_=false;
		if(mi_count>3){
			mi_count=3;
		}
		return false;
	}
	if(mi_count){
		if(mi_count%3 == 0){
			$(this).css({"background-image":"url(images/more.png)"});
		}
		$(".mi_recommend_1 .right_").css({"background-image":"url(images/back_1.png)"});
		$(".mi_recommend_goods ul li").animate({"right":"+=1250px"},500);
	}*/
})
$(".mi_recommend_1 .right_").click(function(){//左
	mi_count--;
	mi_count_++;
	if(mi_count < 3 && mi_count != -1){
		$(".mi_recommend_1 .right_").css({"background-image":"url(images/back_1.png)"});		
	}
	if(mi_count_==4){
		mi_count=0;
		mi_count_=3;
	}else{
		if(mi_count_==3){
			$(this).css({"background-image":"url(images/back.png)"});
		}
		$(".mi_recommend_1 .right").css({"background-image":"url(images/more_1.png)"});
		$(".mi_recommend_goods ul li").animate({"right":"-=1250px"},500);
	}
/*	mi_count--;
	if(mi_count==0){
		mi_count_=true;
	}
	if(mi_count_==false){
		$(this).css({"background-image":"url(images/back.png)"});
		$(".mi_recommend_goods ul li").animate({"right":"-=1250px"},500);
		$(this).css({"background-image":"url(images/back_1.png)"});
	}
*/})
