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
        <TableDataRows />
      </table>
    );
  }
});

var TableDataRows = React.createClass({
  render: function() {
    return (
      <tbody>
        <tr>
          <td>Eggs</td>
          <td>10</td>
          <td>True</td>
        </tr>
        <tr>
          <td>spam</td>
          <td>5</td>
          <td>True</td>
        </tr>
        <tr>
          <td>foo</td>
          <td>1000</td>
          <td>False</td>
        </tr>
      </tbody>
    )
  }
});

ReactDOM.render(
  <Table/>,
  document.getElementById('content')
);
