var React = require('react');
var ReactDOM = require('react-dom');
var GitHub = require('./github/github');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <GitHub />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));