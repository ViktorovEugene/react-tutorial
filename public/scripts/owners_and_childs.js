var data = [1,2,3,4,5,6,7,8,9,10];

var MyContainer = React.createClass({
  getInitialState: function() {
    return {value: '0'}
  },
  render: function() {
      console.log(this);
      return <MyChild value={this.state.value}
                      data={this.props.data} />
  }
});

var MyChild = React.createClass({
    render: function() {
      var items = this.props.data.map(function(element, index) {
        return <p key={index}>{"data[" + index+ "]: " + element}</p>
      });
      console.log(items);
      console.log(this.props.data);
      return (
        <main>
          <h1>{"VAlue: " + this.props.value}</h1>
          {items}
        </main>
      )
    }
});

ReactDOM.render(
  <MyContainer data={data} />,
  document.getElementById('content')
);
