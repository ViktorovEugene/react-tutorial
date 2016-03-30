var Table = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <table>
        <caption>The Sampler Table</caption>
        <thead>
          <tr>
            <td>Name</td>
            <td>Value</td>
            <td>Boolean</td>
          </tr>
        </thead>
        <TableDataRows data={this.state.data} />
      </table>
    );
  }
});

var TableDataRows = React.createClass({
  render: function() {
    var rows = this.props.data.map(function(item, index) {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.value}</td>
          <td>{item.boolean}</td>
        </tr>
      );
    });
    return (
      <tbody>
        {rows}
      </tbody>
    )
  }
});

ReactDOM.render(
  <Table url="/api/tableRows" />,
  document.getElementById('content')
);
