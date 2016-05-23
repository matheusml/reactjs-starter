var React = require('react');
var SearchUser = require('./search-user');
var UserInfo = require('./user-info');

var GitHub = React.createClass({
  getInitialState: function() {
    return {
      user: null
    };
  },

  updateUserInfo: function(user) {
    this.setState({ user: user });
  },

  render: function() {
    return (
      <div className="container">
        <SearchUser updateUserInfo={this.updateUserInfo} />
        <UserInfo user={this.state.user} />
      </div>
    );
  }
});


module.exports = GitHub;