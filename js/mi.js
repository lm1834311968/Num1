$(function(){
	var indexvar,timer=null,bool=false;;
	$(".nav_subnav ul li").hover(function(){
		index=$(this).index();
		$(".nav_subnav ul li .mi_type").hide();
		if(bool==false){
			bool=true;
			timer=setTimeout(function(){
				$(".nav_subnav ul li").eq(index).find(".mi_type").slideDown(300);
			},200)
		}else{
			$(".nav_subnav ul li").eq(index).find(".mi_type").show();
		}
	},function(){
		clearTimeout(timer);
	})
	$(".nav_subnav ul").mouseleave(function(){
		bool=false;
		$(".nav_subnav ul li").eq(index).find(".mi_type").slideUp(300);
	})
	$(".mi_search .search").focus(function(){
		$(".mi_search .hot").hide();
		$(".mi_search .hot_").hide();
		$(this).css({"border-color":"#ff6700"});
		$(".mi_search .search_submit").css({"border-color":"#ff6700"});
		$(".mi_search ul").show();
	})
	var count;//搜索框下拉部分鼠标经过的时候获取当前li的index
	$(".mi_search ul li").hover(function(){
		count=$(this).index();
	},function(){
		count=null;
	})

	$(".mi_search .search").blur(function(){
		if(count){
		}else{
			$(".mi_search ul").hide();
			$(".mi_search .hot").show();
			$(".mi_search .hot_").show();
			$(this).css({"border-color":"#ddd"});
			$(".mi_search .search_submit").css({"border-color":"#ddd"});
		}
	})
})
