//@createXHR 创建ajax对象兼容所有游览器 封装
//惰性思想思路:第一次执行完把原来的方法覆盖掉 这样在同一游览器就只会执行一次 不会每次请求都执行
function createXHR() {
  var xhr = null,
      flag = false,
      ary = [
        function() {
          return new XMLHttpRequest;
        },
        function() {
          return new ActiveXObject("Microsoft.XMLHTTP");
        },
        function() {
          return new ActiveXObject("Msxm12.XMLHTTP");
        },
        function() {
          return new ActiveXObject("Msxm13.XMLHTTP");
        }
      ];
  for(var i = 0, len = ary.length; i < len; i++) {
    var curFn = ary[i];
    try {
      xhr = curFn;//本次循环获取的方法没有错误，这个方法使我们需要的，下次执行的时候只需要把createXHR写成小方法
      createXHR = curFn;
      flag = true;
      break;//得到需要的方法后 退出循环
    }catch(e) {
      //本次循环出现错误，继续下次循环 所以不需要任何操作
    }
  }
  if(!flag) {//如果是false 证明所以方法都不支持ajax
    throw new Error ("你的游览器不支持ajax")
  }
  return xhr
}
