var React = require('react');
var UserRepos = require('./user-repos');

var UserInfo = React.createClass({
  render: function() {
    var user = {
      login: '',
      name: '',
      followers: '',
      following: '',
      html_url: '',
    };
    return (
      <div className="row">
        <div className="col-lg-4">
          <img className="img-circle" src={user.avatar_url} alt="avatar" width="140" height="140" />
          <h2>{user.login}</h2>
          <p>{user.name}</p>
          <p>Followers: {user.followers} / Following: {user.following}</p>
          <p><a className="btn btn-default" href={user.html_url} role="button">View details</a></p>
        </div>
        <div className="col-lg-8">
          <UserRepos />
        </div>
      </div>
    );
  }
});

module.exports = UserInfo;