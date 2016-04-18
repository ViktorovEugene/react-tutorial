function getDatetimeString(date) {
  var dateArray = [
    date.getFullYear(),
    ('0' + date.getMonth()).slice(-2),
    ('0' + date.getDate()).slice(-2),
    ('0' + date.getHours()).slice(-2),
    ('0' + date.getMinutes()).slice(-2),
    ('0' + date.getSeconds()).slice(-2)
  ];
  return dateArray.slice(0, 3).join('-') + "T" + dateArray.slice(3).join(':');
}


var MyContainer = React.createClass({
  render: function() {
    var d = new Date(Date.now());
    return (
      <main>
        <p>{d.toISOString()}</p>
        <p>{d.toDateString()}</p>
        <p>{d.toUTCString()}</p>
        <p>{getDatetimeString(d).toString()}</p>
      </main>
    )
  }
});

ReactDOM.render(
  <MyContainer />,
  document.getElementById('content')
);
