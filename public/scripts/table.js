var BestBuyTableRows = React.createClass({
  render: function() {
    return (
      <BestBuyTableRow rank="2" instrumentcode="8604" currency="JPY" buy="0.65" sell="0.18">
      </BestBuyTableRow>
    );
  }
});

var BestBuyTableRow = React.createClass({
  render: function() {
    return (
      <tr>
          <td>{this.props.rank}</td>
          <td>{this.props.instrumentcode}</td>
          <td>{this.props.currency}</td>
          <td>{this.props.buy}</td>
          <td>{this.props.sell}</td>
      </tr>
    );
  }
});

ReactDOM.render(
  <BestBuyTableRows />,
  document.getElementById('best_buy_content')
);
