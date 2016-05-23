var React = require('react');
var SearchUser = require('./search-user');
var UserInfo = require('./user-info');

var GitHub = React.createClass({
  getInitialState: function() {
    return {
      user: null,
      repos: []
    };
  },

  updateUserInfo: function(user) {
    this.setState({ user: user });
  },

  updateUserRepos: function(repos) {
    this.setState({ repos: repos });
  },

  render: function() {
    return (
      <div className="container">
        <SearchUser
          updateUserInfo={this.updateUserInfo}
          updateUserRepos={this.updateUserRepos}
        />
        <UserInfo user={this.state.user} repos={this.state.repos} />
      </div>
    );
  }
});


module.exports = GitHub;