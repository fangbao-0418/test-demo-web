//options：对象统一传值法
//default: 把需要使用的参数设置一个规则和初始值
~(function ajax(options) {
  var _default = {
    url: "",
    type: "get",// 请求方式method
    dataType:"json",// 设置请求回来的内容是什么格式 json就会json格式对象
    async: true,// 同步异步
    data: null,// 请求主体
    getHead:nuii,// 获取请求头后即状态2之后回调函数
    success:null // 状态是4的时候 回调函数
  }
  // 使用用户自己传递进来的值 覆盖默认值 ==>这种方式用在自己封装插件很方便
  for(var key in options) {
    if(options.hasOwnProperty(key)) {//只遍历私有的
      _default[key] = options[key];
    }
  }
  // 如果是get请求需要在url后面加随机数 加随机数之前判断原来有没有问号
  if(_default.type === "get") {
    _default.url.indexOf("?") >= 0 ? _default.url += "&" : _default.url += "?";
    _default.url += Math.random();
  }
  var xhr = createXHR();//创建ajax对象兼容所有游览器
  xhr.open(_default.type,_default.url,_default.async);
  xhr.onreadystatechange = function() {
    if(/^2\d{2}$/.test(xhr.status)){
      //在readyState===2的时候做一些操作 需要保证异步请求 因为同步坚挺不倒2
      if(xhr.readyState === 2) {
        if(typeof _default.getHead === "function") {
          _default.getHead.call(xhr);
        }
      }
      if(xhr.readyState === 4) {
        var val = xhr.responseText;
        //如果传递的数据类型是json 说明获取的内容应该是json格式的对象 需要转成json格式字符串
        if(_default.dataType === "json") {
          val = "JSON" in window?JSON.parse(val) : eval("(" + val ")");//IE不兼容JSON.parse
          _default.success && _default.success.call(xhr,val);//回调函数常用写法 虽然上面更严谨 但下面常用
        }
      }
    }
  };
  xhr.send(_default.data);
}
window.ajax = ajax;//放在私有的全局
)();//自执行函数私有化
ajax({
  url:"data.txt",
  type: "get",
  dataType: "json",
  async: false,
  getHead: function() {
    //this-xhr
  },
  success: function() {
    //this->xhr
    //data:从服务器获取的主体内容
  }
})
