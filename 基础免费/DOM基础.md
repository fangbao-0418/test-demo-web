### DOM
* **DOM** 文档对象模型 document object model ==> 就是描述整个html页面中节点关系的图谱
### DOM获取节点
1. **document.getElementById("idName")** (上下文只能是document)通过这个方法获得的只是一个元素(如果重名 只会获取到第一个id) ==>在ie6 7中会把表单元素的input的name属性当做ID使用；如果没有获取到元素返回null 在ie6 7中不区分ID大小写 ==> **实战注意** 不要让表单元素的name和其他元素id重复 不要让大小写区分不同的ID==>**快捷获取div的方式** 直接console.log(IDName)及 即直接使用id就可以获取到id(不推荐使用)
2. **context.getElementsByTagName** 通过元素的标签名获取一组元素 ==>类数组
3. **context.getElementsByName** 通过元素的name属性获取一组元素(在IE下只对表单元素起作用)==?练习1性别单选练习
4. **context.getElementsByClassName** 通过元素类名获取(这个方法不兼容ie6 7 8)
5. **document.documentElement** 获取html元素 **document.body** 获取body元素 这两个方法一般用于获取当前屏幕的位置`document.documentElement.clientWidth || document.body.clientWidth;`
6. **document.querySelector("#tab li")** 获取一个 **document.querySelectorAll()** 获取多个 移动端用来获取元素的方法(跟样式的选择器写法一致)
### DOM节点之间的属性
1. childNodes 获取所有的子节点
2. children 获取所有的元素子节点
3. parentNode 获取父亲节点
4. previousSibling/previousElementSibling 获取上一个哥哥节点/获取上一个哥哥元素节点
5. nextSibling/nextElementSibling 获取下一个弟弟节点/下一个弟弟元素节点
6. firstChild/firstElementChild 获取所有儿子节点第一个
7. lastChild/lastElementChild 获取所有儿子节点最后一个/最后一个元素节点
* 在js中需要掌握的节点类型
1. 元素节点(元素标签) 1(nodeType) 大写的标签名(nodeName) null(nodeValue)
2. 文本节点(文字) 3(nodeType) #text(nodeName) 文字内容(nodeValue)
3. 注释节点(注释) 8(nodeType) #comment(nodeName) 注释内容(nodeValue)
4. document 9(nodeType) #document(nodeName) null(nodeValue)
5. 在标准游览器下我们把空格(space)回车(enter)都当做文本节点处理
6. 注意函数写注释(方法干嘛的 参数 返回)；函数参数传递可以根据传递没传递这个参数进行一些其他的操作(见练习)
### DOM操作
1. document.createElement() 创建元素
2. document.createDocumentFragment() 创建文档碎片(向文档添加段落防止每次添加刷新页面)
3. appendChild() 追加新的子元素
4. insertBefore(newItem,existingItem) 在当前元素之前插入
5. cloneNode(true/false)  为true表示也克隆子元素/为 false表示 只克隆当前标签
6. replaceChild() 替换子元素
7. removeChild() 移除子元素
8. get set removeAttribute() 获取/设置/移除自定义属性(方法返回指定属性名的属性值)
### DOM盒子模型(js盒子模型)
clientWidth/clientHeight内容宽度/高度 + 左右/上下padding ==如何给盒子加上box-sizing：border-box属性 那么 clientWidth/clientHeight 内容宽度/高度-左右/上下border
clientTop/clientLeft 上/左 边框宽度

offsetWidth/offsetHeight clientWidth/clientHeight + 左右/上下边框
offsetTop/offsetLeft border外距离body上边/左边的距离(如果用定位就是距离父级盒子的上/左距离)
offsetParent 一般是body 定位之后改变

scrollWidth/scrollHeight 容器没有溢出的情况下和clientWidth/clientHeight一样；如果容器中内容有溢出，获取的结果如下规则： scrollWidth：真实内容的宽度（包含溢出）+左填充 scrollHeight：真实内容的高度（包含溢出）+上填充 获取到的结果都是“约等于”的值，因为：同一个浏览器，我们是否设置overflow="hidden 在不同的浏览器中我们获取到的结果也是不相同的
scrollTop/scrollLeft 滚动条卷去的宽度/高度
1. 之前我们学习的js盒子模型中：client系列/offset系列/scrollWidth/scrollHeight都是“只读”属性->只能通过属性获取值，不能通过属性修改元素的样式
2. scrollTop/scrollLeft：滚动条卷曲的高度/宽度(这两个属性是唯一“可读写”属性) scrollTop的值是存在边界值（最大和最小值的），我们设置的值比最小值小或者比最大值大时都没用，起到效果的依然是边界的值。 [最小值是零][最大值=真实的高度-当前容器一屏幕的高度]

getComputedStyle
currentStyle



