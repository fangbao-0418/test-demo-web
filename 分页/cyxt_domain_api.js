$(".Q-mid-content").html('<div style="text-align:center;margin-bottom:20px;"><img src="/file/image/loading.gif" /></div>');

function get_html(list){
	var html = "";
	for(k in list){
	html += '<div class="Q-box">';
	html +=	'<input type="checkbox" class="Q-left Q-box-input"  id="'+list[k].itemid+'" onclick="add_goods(this,'+list[k].itemid+')">';
	html +=	'<input type="hidden" class="Q-id" value="'+list[k].itemid+'">';
	html +=	'<a href="'+list[k].linkurl+'"><img src="'+list[k].sptp[0]+'" width="200" height="200"> </a>';
	html +=	'<div class="Q-box-content Q-right">';
	html +=	'<ul><li><a href="'+list[k].linkurl+'" class="Q-left"><h3 class="Q-goods-title">'+list[k].sptym+'</h3></a><img src="/file/vip2/images/icon.png"></li>';
	html +=	'<li class="cf"><span>商品名称：</span>'+list[k].spmc+'</li>';
	
	if(list[k].pzwh){
	html +=	'<li><span>批准文号：</span>'+list[k].pzwh+'</li>';
	}else if(list[k].cpzczh){
	html +=	'<li><span>产品注册证号：</span>'+list[k].cpzczh+'</li>';
	}

	if(list[k].spgg){
	html +=	'<li><span>商品规格：</span>'+list[k].spgg+'</li>';
	}else if(list[k].ggxh){
	html +=	'<li><span>规格型号：</span>'+list[k].ggxh+'</li>';
	}

	html +=	'<li><span>分类商品：</span>'+list[k].catlev+'</li>';
	
	html +=	'<li><a href="'+list[k].linkurl+'" class="Q-one">查看详情</a>';
	html +=	'<a href="" class="Q-two">我要收藏</a>';
	html +=	'<a href="'+list[k].linkurl+'#message" class="Q-three">我要代理</a></li></ul>';
	html +=	'</div></div>';
	}

	if(html){
		return html;
	}else{
		return '<p class="Q-return">没有符合条件的记录！</p>';
	}
}
function jsonp(obj){
	var list = obj.list;
	var html = get_html(list);
	var current = obj.page;

	
	
	$(".Q-mid-content").html(html);
	var count = obj.count;
	var num = Math.ceil(count/10);


	if(count > 0){
	var page ='<ul class="cf Q-mid-page-ul"><input type="hidden" value="1" id="Q-current" /> ';
	
	
	page += '<li id="pre" onclick="page(1)"><a href="#Q-mid-content1">首页</a></li>';

	if(num <= 5 || current <=3 ){
		if(num > 5){
			var max = 5;
		}else{
			var max = num;
		}
		
		for(i=1;i<=max;i++){
			if(i == 1){
				page += '<li id="d_'+i+'" class="Q-li-avtive" onclick="page('+i+')"><a href="#Q-mid-content1">'+i+'</a></li>';
			}else{
				page += '<li id="d_'+i+'" onclick="page('+i+')"><a href="#Q-mid-content1">'+i+'</a></li>';
			}
		}
	}else if(current >= 3 && num >= 6 && current <= num-2 ){
		for(i=current-2;i<current;i++){
			if(i == 1){
				page += '<li id="d_'+i+'" class="Q-li-avtive" onclick="page('+i+')"><a href="#Q-mid-content1">'+i+'</a></li>';
			}else{
				page += '<li id="d_'+i+'" onclick="page('+i+')"><a href="#Q-mid-content1">'+i+'</a></li>';
			}
		}
		page += '<li id="d_'+current+'" onclick="page('+current+')" ><a href="#Q-mid-content1">'+current+'</a>  </li>';
		for(var i=current+1;i<=current+2;i++){
			page += '<li id="d_'+(i)+'" onclick="page('+(i)+')" ><a href="#Q-mid-content1">'+(i)+'</a></li>';
		}	
		
	}else{
		for(i=num-4;i<=num;i++)	{
			page += '<li id="d_'+i+'" onclick="page('+i+')" ><a href="#Q-mid-content1">'+i+'</a></li>';
		}	
	}

	page += '<li id="aft" onclick="page('+num+')"><a href="#Q-mid-content1">尾页</a></li></ul>';
	
	}else{
		page = "";
	}	
	$('.Q-mid-page').html(page);	
	$(".Q-box:odd").addClass("Q-left");
    $(".Q-box:even").addClass("Q-right");		
}


function page(page){
	$(".Q-mid-content").html('<div style="text-align:center;"><img src="/file/image/loading.gif" /></div>');	
	var type = $('#Q-type').val();
	var kw = $('#Q-key').val();
	$.get('/api/vip2/json.php','username='+username+'&type='+type+'&kw='+kw+'&page='+page,function(html){
		var obj = eval("("+html+")");
		jsonp(obj);
		$("#d_"+page).addClass("Q-li-avtive").siblings().removeClass("Q-li-avtive");
		var current = parseInt($("#Q-current").val())+1;
		$("#Q-current").val(current);
	});

}

function search(){
	$(".Q-mid-content").html('<div style="text-align:center;margin-bottom:20px;"><img src="/file/image/loading.gif" /></div>');
	var type = $('#Q-type').val();
	var kw = $('#Q-key').val();
	$.get('/api/vip2/json.php','username='+username+'&type='+type+'&kw='+kw,function(str){

	var obj = eval("("+str+")");
	jsonp(obj);

});
}

$("#other_channels").click(function(){
	if($("#other_channels").prop("checked")){	
		$(".sales_channel").show();
	}else {
		$(".sales_channel").hide();
	}
})

