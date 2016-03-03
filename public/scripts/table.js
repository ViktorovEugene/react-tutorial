var data = [
  {rank: 1, instrumentcode: 8674, currency: "JPY", buy: 0.65, sell: 0.18},
  {rank: 2, instrumentcode: 8604, currency: "JPY", buy: 0.65, sell: 0.18},
  {rank: 3, instrumentcode: 8664, currency: "JPY", buy: 0.65, sell: 0.18},
  {rank: 4, instrumentcode: 8404, currency: "JPY", buy: 0.65, sell: 0.18},
  {rank: 5, instrumentcode: 8904, currency: "JPY", buy: 0.65, sell: 0.18},
  {rank: 6, instrumentcode: 8694, currency: "JPY", buy: 0.65, sell: 0.18}
];

var BestBuyTable = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadCommentsFromServer: function() {
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
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
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
          <BestBuyTableRows data={this.state.data} />
      </table>
    );
  }
});

var BestBuyTableRows = React.createClass({
  render: function() {
    var table_rows = this.props.data.map(function(row_data) {
      return (
        <BestBuyTableRow rank={row_data.rank}
                         instrumentcode={row_data.instrumentcode}
                         currency={row_data.currency}
                         buy={row_data.buy}
                         sell={row_data.sell}>
        </BestBuyTableRow>
      );
    });

    return (
      <tbody>
        {table_rows}
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
  <BestBuyTable url="/api/comments" pollInterval={2000} />,
  document.getElementById('best_buy')
);
