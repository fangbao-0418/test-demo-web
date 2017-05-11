var Board = React.createClass({
  getInitialState: function() {
    return {
      msg: "请输入",
      messages:this.props.messages
    };
  },
  render: function() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input type="text" defaultValue={this.state.msg} onClick={this.clear} ref="textMsg" />
        <input type="button" value="发言" onClick={this.leave} />
        <ul>
          {
            this.state.messages.map(function(item,index) {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  },
  clear: function() {
    this.refs.textMsg.value = "";
  },
  leave: function() {
    this.state.messages.push(this.refs.textMsg.value);
    localStorage.setItem('messages',JSON.stringify(this.state.messages));
    this.setState({
      messages: this.state.messages
    },function() {
      this.refs.textMsg.value = ""
    });
  }
});
var data = {
  title: "留言板",
  messages: JSON.parse(localStorage.getItem('messages')) || []
};
ReactDOM.render(
  <Board {...data} />,
  document.getElementById('app')
);
