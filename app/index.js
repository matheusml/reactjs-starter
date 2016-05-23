var React = require('react');
var ReactDOM = require('react-dom');
var GitHub = require('./components/github/github');

var App = React.createClass({
  render: function() {
    return (
      <GitHub />
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));