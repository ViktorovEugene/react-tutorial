var data = [
  {rank: 1, instrumentcode: 8674, currency: "JPY", buy: 0.65, sell: 0.18},
  {rank: 2, instrumentcode: 8604, currency: "JPY", buy: 0.65, sell: 0.18},
  {rank: 3, instrumentcode: 8664, currency: "JPY", buy: 0.65, sell: 0.18},
  {rank: 4, instrumentcode: 8404, currency: "JPY", buy: 0.65, sell: 0.18},
  {rank: 5, instrumentcode: 8904, currency: "JPY", buy: 0.65, sell: 0.18},
  {rank: 6, instrumentcode: 8694, currency: "JPY", buy: 0.65, sell: 0.18}
];

var BestBuyTable = React.createClass({
  render : function() {
    return (
      <table className="best_buy">
          <caption>
              Best-Buy
          </caption>
          <colgroup>
              <col id="rank" />
              <col id="instrument_code" />
              <col id="currency" />
              <col id="buy" />
              <col id="sell" />
          </colgroup>
          <thead>
              <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">Instrument Code</th>
                  <th scope="col">Currency</th>
                  <th scope="col">Buy</th>
                  <th scope="col">Sell</th>
              </tr>
          </thead>
          <BestBuyTableRows />
      </table>
    );
  }
});

var BestBuyTableRows = React.createClass({
  render: function() {
    return (
      <tbody>
        <BestBuyTableRow rank="2" instrumentcode="8604" currency="JPY" buy="0.65" sell="0.18">
        </BestBuyTableRow>
      </tbody>
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
  <BestBuyTable />,
  document.getElementById('best_buy')
);
