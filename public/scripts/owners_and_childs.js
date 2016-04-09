var data = [1,2,3,4,5,6,7,8,9,10];

var MyContainer = React.createClass({
  getInitialState: function() {
    return {value: '0'}
  },
  handleChange: function(event) {
    var ref_name = "index_" + event.target.value;
    this.setState({value: event.target.value});
    this.refs[ref_name].setState({selected: true});
    console.log("* handle change call");
  },
  makeComponentsByData: function() {
    console.log("* makeComponent call!");
    return this.props.data.map(function(element, index) {
        return <MyChild key={index}
                        ref={"index_" + index}
                        element={element}
                        index={index} />
      }.bind(this)
    )
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
        {this.makeComponentsByData()}
      </main>
    )
  }
});

var MyChild = React.createClass({
  getInitialState: function() {
    return {selected: false};
  },
  render: function() {
    console.log("* render P!");
    return <p className={this.state.selected ? 'selected' : null}>
              {"data[" + this.props.index+ "]: " + this.props.element}
           </p>
  }
});

ReactDOM.render(
  <MyContainer data={data} />,
  document.getElementById('content')
);
