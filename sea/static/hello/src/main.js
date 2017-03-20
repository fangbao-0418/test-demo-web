define(function(require,exports,module){
	
	//jQuery 1.9以上版本不再支持IE9以下版本

	require("jquery");
	// require("person");
	// console.log(person);
	var doc = document.getElementById('doc');
	console.log(doc);
	doc.innerHTML = "hello seajs";
	$("#doc").html("hello seajs by jquery");

	 new Swiper('.swiper-container-top', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,

        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });

	 new Swiper('.swiper-container-bottom', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,

        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });
})