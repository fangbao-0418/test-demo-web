//var person = ['老大', '老二', '老三'];
//var style  = {color: 'red'};
//ReactDOM.render(
//  <div>
//    {
//      person.map(function(item) {
//        return <p style = {style}>hello! {item}</p>
//      })
//    }
//  </div>,
//    document.getElementById('app')
//);
//组件类
//var Message = React.createClass({
//  render: function() {
//    return <h1>hello</h1>;
//  }
//});
//ReactDOM.render(
//  <Message/>,
//  document.getElementById('app')
//);
//组件属性
//var Person = React.createClass({
//  propTypes: {
//    name: React.PropTypes.string.isRequired,
//    gender: React.PropTypes.string.isRequired,
//    age: React.PropTypes.number.isRequired
//  },
//  getDefaultProps: function() {
//    return {name: 'XXX'}
//  },
//  render: function() {
//    return (
//      //<h1>
//      //  {this.props.name}
//      //  {this.props.gender}
//      //  {this.props.age}
//      //</h1>
//      <ul>
//        {
//          React.Children.map(this.props.children, function(child){
//            return <li>{child}</li>
//          })
//        }
//      </ul>
//    )
//  }
//});
//var props = {
//  gender: '男',
//  age: 20
//};
//ReactDOM.render(
//  //<Person {...props} />,
//  <Person>
//    <span>老大</span>
//    <span>老二</span>
//    <span>老三</span>
//  </Person>,
//  document.getElementById('app')
//);
//组件状态
//var Person = React.createClass({
//  getInitialState: function() {
//    return {happy: true}
//  },
//  getDefaultProps: function() {
//    return {name: 'XXX'}
//  },
//  handleClick: function() {
//    this.setState({happy:!this.state.happy})
//  },
//  render: function() {
//    var heart = this.state.happy ? '开心' : '难过';
//    return (
//      <p>
//        {this.props.name} {heart} <br/>
//        <button onClick={this.handleClick}>改变心情</button>
//      </p>
//    )
//  }
//});
//ReactDOM.render(
//  <Person name='gyr' />,
//  document.getElementById('app')
//);
//表单双向数据绑定
//var Input = React.createClass({
//  getInitialState: function() {
//    return {value: '初始状态'}
//  },
//  handleChange: function(event) {
//    this.setState({value: event.target.value})
//  },
//  render: function() {
//    var value = this.state.value;
//    return (
//      <div>
//        <input style={{color: 'red'}} type="text" value={value} onChange={this.handleChange} />
//        <p>{value}</p>
//      </div>
//    )
//  }
//});
//ReactDOM.render(
//  <Input/>,
//  document.getElementById('app')
//);
//组件嵌套
//var Person = React.createClass({
//  render: function() {
//    return (
//      <div>
//        <PersonHead head = {this.props.head} />
//        <PersonBody body = {this.props.body} />
//      </div>
//    )
//  }
//});
//var PersonHead = React.createClass({
//  render: function() {
//    return (
//      <div>{this.props.head}</div>
//    )
//  }
//});
//var PersonBody = React.createClass({
//  render: function() {
//    return (
//      <div>{this.props.body}</div>
//    )
//  }
//});
//ReactDOM.render(
//  <Person  body='身体' head='头部'/>,
//  document.getElementById('app')
//);