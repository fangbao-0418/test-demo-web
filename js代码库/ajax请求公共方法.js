//options：对象统一传值法
//default: 把需要使用的参数设置一个规则和初始值
function ajax(options) {
  var default = {

  }
  var xhr = createXHR();
  xhr.open("","",true);
  xhr.onreadystatechange = function() {
    if(/^2\d{2}$/.test(xhr.status)){
      //在readyState===2的时候做一些操作 需要保证异步请求 因为同步坚挺不倒2
      if(xhr.readyState === 2) {

      }
      if(xhr.readyState === 4) {

      }
    }
  };
  xhr.send(null);
}
