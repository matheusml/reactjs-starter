var React = require('react');
var SearchUser = require('./search-user');
var UserInfo = require('./user-info');

var GitHub = React.createClass({
  render: function() {
    return (
      <div className="container">
        <SearchUser />
        <UserInfo />
      </div>
    );
  }
});


module.exports = GitHub;