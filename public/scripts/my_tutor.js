// tutorial's 1-th step
var data = [
  ['date', 1],
  ['tick', 2],
  ['timeStamp', 3]
];

var CommentBox = React.createClass({
  render: function() {
    var items = this.props.data.map(function(item, id) {
      return <p key={id}><span>{item[0]}: </span>{item[1]}</p>;
    });
    return (
        <header>
          {items}
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
