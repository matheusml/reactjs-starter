var React = require('react');
var ReactDOM = require('react-dom');
var SearchUser = require('./search-user');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <SearchUser />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));