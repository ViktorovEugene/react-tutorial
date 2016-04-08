var MyContainer = React.createClass({
  getInitialState: function() {
    return {value: '0'}
  },
  render: function() {
      return <MyChild value={this.state.value} />
  }
});

var MyChild = React.createClass({
    render: function() {
        return <p>{this.props.value}</p>
    }
});

ReactDOM.render(
  <MyContainer />,
  document.getElementById('content')
);
