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
        <TableRows data={this.state.data} />
      </table>
    );
  }
});

var TableRows = React.createClass({

  render: function() {
    var rows = this.props.data.map(function(item, index) {
      console.log(item);
      return (
        <SingleTableRow key={index} data={item} />
      );
    }
    );
    return (
      <tbody>
        {rows}
      </tbody>
    )
  }
});

var SingleTableRow = React.createClass({
  getInitialState: function() {
    return { className: '' };
  },
  handleRowClick: function() {
    var className = this.state.className.trim();
    if (className == 'selected') {
      this.setState({className: ''});
    } else {
      this.setState({className: 'selected'})
    }
  },
  render: function() {
    return (
        <tr className={this.state.className}
            onClick={this.handleRowClick}>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.value}</td>
          <td>{this.props.data.boolean}</td>
        </tr>
      );
  }
});

ReactDOM.render(
  <Table url="/api/tableRows" />,
  document.getElementById('content')
);
