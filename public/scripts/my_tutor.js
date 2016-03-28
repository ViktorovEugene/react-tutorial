// tutorial's 1-th step
var data = [
  ['date', 1],
  ['tick', 2],
  ['timeStamp', 3]
];

var CommentBox = React.createClass({
  render: function() {
    return (
        <header>
          <p><span>Date: </span>{this.props.data[0][1]}</p>
          <p><span>Tick: </span>{this.props.data[1][1]}</p>
          <p><span>TimeStamp: </span>{this.props.data[2][1]}</p>
        </header>
    );
  }
});

function ready() {
    ReactDOM.render(
      <CommentBox data={data} />,
      document.getElementById('content')
    );
  }

$(document).ready(ready);
$('.toggle').click(function () {
  data.forEach(function (item) {
    item[1]++;
  });
  ready();
});
