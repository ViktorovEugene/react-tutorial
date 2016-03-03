var BestBuyTableRows = React.createClass({
  render: function() {
    return (
      <tr>
          <td>1</td>
          <td>8604</td>
          <td>JPY</td>
          <td>0.65</td>
          <td>0.18</td>
      </tr>
    );
  }
});
ReactDOM.render(
  <BestBuyTableRows />,
  document.getElementById('best_buy_content')
)
