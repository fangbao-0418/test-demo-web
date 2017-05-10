### react.js 是react的核心库；react-dom.js是提供与DOM相关的功能在window下增加reactDOM属性；babel.js将JSX语法转为js语法
### 利用script标签引入babel.js时候 需要type=text/babel
### ReactDOM.render 是react的最基本方法 用于将标签模板转为HTML语言,并插入指定的DOM节点
### JSX语法{}js,<>html,style为css;注意样式类用className 不能用class因为是js关键字
### 组件理解:有单独功能 可重用即有独立功能可用在不同场景 可维护即只包含自己的逻辑
1. 组件类的第一个字母大写 有且只能包含一个顶层标签
2. 创建组件类`var Message(组件类名)=React.createClass({render:function(){return }});ReactDOM.render(<Message/>,要插入的DOM节点位置)`
3. 组件的属性: propTypes:{} 定义传入属性的名称和类型;getDefaultProps:function(){} 定义默认属性; this.props用来取出属性
* this.props.children表示组件的所有子节点，React.Children.map工具方法 实现数组映射
4. state状态: getInitialState定义初始状态
* 常用事件 剪贴板事件 onKeyDown onKeyPress onKeyUp 键盘事件 onFocus onBlur 焦点事件 onChange onInput onSubmit 鼠标事件 onClick onDoubleClick onMouseDown onMouseEnter onMouseLeave
5. 表单元素双向数据绑定 `注意: 如果给表单元素设置了value属性，则必须指定onChange事件处理函数，否则 此字段会变成只读状态`
6. 复合组件
### 组件生命周期
