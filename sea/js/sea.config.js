seajs.config({
  base: "./",
  // 路径配置
  paths:{
  	'app':"static"
  },
  // 别名配置
  alias: {
    "person": "app/hello/src/person.js",
    "jquery": "js/jquery.min.js",
    "main": "app/hello/src/main",
    "swiper": "js/swiper.min.js"
  },
  // 变量配置
  vars: {
    'locale': 'zh-cn'
  },
  // 映射配置
  map: [
    [".js?" + new Date().getTime(),'http://example.com/js/app/', 'http://localhost/js/app/']
  ],
  // 预加载项
  preload: [
    Function.prototype.bind ? '' : 'es5-safe',
    this.JSON ? '' : 'json',
    console.log(21),
    
  ],
  // 调试模式
  debug: true,
  // 文件编码
  charset: 'utf-8'
})