#### BOM 游览器对象模型
- 核心对象:window 游览器对象的一个实例
- window:双角色 即是js访问游览器的有个接口 又是js的全局对象
#### 全局理解window
- 全局下定义的变量、函数 ==> 相当于在window全局作用域下加了对象的属性或者方法即全局变量 但是在*delete*方法时全局变量和全局直接加的属性属性 有区别
```
var age = 18 // 作用域
window.color = 'red' // window对象加属性
console.log(delete window.age) // false
console.log(delete window.color) //true
```
- 原理：通过var添加的window属性有一个{{configurable}}的特效值为false 所以全局变量不可被delete操作符删除
- window查询未声明的变量是否存在
```
console.log(window.A) // undefined
console.log(A) // error
```
###### 了解窗口关系及框架iframe
- window.frames 获取全局框架[]
- window.parent 返回父窗口
- window.self 当前窗口
- window.top 返回顶层窗口
###### 了解窗口位置(窗口距离左/上距离) == 兼容性
- window.screenLeft/window.screenTop
- window.screenX/window.screenY
- window.moveTo()
- window.moveBy()
```
var leftPos = (typeof window.screenLeft == 'number') ? window.screenLeft : window.screenX
var topPos = (typeof window.screenTop == 'number') ? window.screenTop : window.screenY
window.moveTo(0, 0) // 移动x y 坐标
window.moveBy(0, 100) // 向下移动100px
```
###### 游览器窗口大小(不同游览器不同) 及 可视窗口大小
- window.innerWidth/window.innerHeight
- window.outerWidth/window.outerHeight
- document.documentElement.clientWidth/clientHeight(标准模式) || document.body.clientWidth/clientHeight(混杂模式)
- document.compatModel 检测游览器渲染方式(针对标准 混杂)
- resizeTo(width, height) 游览器新宽度高度
- resizeBy(differW, differH) 新窗口与原窗口的宽高差
