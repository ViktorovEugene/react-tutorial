var data = [1,2,3,4,5,6,7,8,9,10];

var MyContainer = React.createClass({
  getInitialState: function() {
    return {value: '0'}
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    this.refs.ownee.setState({selectedItem: event.target.value});
    console.log(this.refs.ownee.refs);

  },
  render: function() {
    return (
      <main>
        <input type="number"
               min="0"
               max={this.props.data.length - 1}
               value={this.state.value}
               onChange={this.handleChange}
        />
        <MyChild ref="ownee"
          value={this.state.value}
                 data={this.props.data} />
      </main>
    )
  }
});

var MyChild = React.createClass({
  getInitialState: function() {
    return {selectedItem: null};
  },
  render: function() {
    var items = this.props.data.map(function(element, index) {
        return (
          <p key={index}
             ref={"index_" + index}
             className={this.state.selectedItem == index ? 'selected' : null}
          >
            {"data[" + index+ "]: " + element}
          </p>
        )
      }.bind(this)
    );
    return (
      <div>
        {items}
      </div>
    )
  }
});

ReactDOM.render(
  <MyContainer data={data} />,
  document.getElementById('content')
);
