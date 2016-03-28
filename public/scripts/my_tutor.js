// tutorial's 1-th step
var date = 1, tick = 2, timeStamp = 3;
var data = {date: 1, tick: 2, timeStamp: 3};

var CommentBox = React.createClass({
  render: function() {
    return (
        <header>
          <p><span>Date</span> { this.props.date } </p>
          <p><span>Tick</span> { this.props.tick  } </p>
          <p><span>TimeStamp</span> { this.props.timeStamp } </p>
        </header>
    );
  }
});

function ready() {
    ReactDOM.render(
      <CommentBox date={date} tick={tick} timeStamp={timeStamp}/>,
      document.getElementById('content')
    );
  }

$(document).ready(ready);
$('.toggle').click(function () {
  date++;
  tick++;
  timeStamp++;
  ready();
});
