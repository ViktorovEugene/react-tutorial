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
  getInitialState: function() {
    return {selectedRow: null};
  },
  setSelectRow: function(clickedRow) {
    if (this.state.selectedRow) {
      this.state.selectedRow.setState({className: ''});
    }
    this.setState({selectedRow: clickedRow})
  },
  render: function() {
    var rows = this.props.data.map(function(item, index) {
      return (
        <SingleTableRow key={index}
                        data={item}
                        setSelectRow={this.setSelectRow} />
      );
    }.bind(this)
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
      return;
    } else {
      this.props.setSelectRow(this);
      this.setState({className: 'selected'});
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
