requirejs.config({
	baseUrl:'scripts/lib',
	paths:{

		app:'../app'
	}
})
require(['jquery','person.class'],function($,Person){

	function setCenter(width,height){
		var clientWidth = document.body.clientWidth;
		var clientHeight = document.body.clientHeight;
		var obj = new Object();
		console.log(clientHeight);
		obj.top = (clientHeight - height)/2;
		obj.left = (clientWidth - width)/2;
		return obj;
	}
	 
	var person = new Person("方宝",23);
	person.say();

	$("#btn1").click(function(){
		var pos = setCenter(410,200);
		$("#oDiv").css({"display":"block","top":pos.top,"left":pos.left,"opacity":1})
		console.log($("#oDiv")[0].clientWidth)
		setTimeout(()=>{
			$("#oDiv").css({"opacity":0,"display":"none"})
		},3000)
	})
	//console.log(person)

})