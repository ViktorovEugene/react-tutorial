var tableData = [
  {name: "Eggs", value: 15, boolean: "True"},
  {name: 'Spam',value: 30, boolean: 'True'},
  {name: 'Foo', value: 1000, boolean: 'False'}
];

var Table = React.createClass({
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
        <TableDataRows data={this.props.data} />
      </table>
    );
  }
});

var TableDataRows = React.createClass({
  render: function() {
    return (
      <tbody>
        {this.props.data.map(function(item, index) {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.value}</td>
              <td>{item.boolean}</td>
            </tr>
          );
        })}
      </tbody>
    )
  }
});

ReactDOM.render(
  <Table data={tableData} />,
  document.getElementById('content')
);
