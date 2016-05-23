var React = require('react');
var UserRepos = require('./user-repos');

var UserInfo = React.createClass({
  render: function () {
    if (this.props.user) {
      return (
        <div className="row">
          <div className="col-lg-4">
            <img className="img-circle" src={this.props.user.avatar_url} alt="avatar" width="140" height="140" />
            <h2>{this.props.user.login}</h2>
            <p>{this.props.user.name}</p>
            <p>Followers: {this.props.user.followers} / Following: {this.props.user.following}</p>
            <p><a className="btn btn-default" href={this.props.user.html_url} role="button">View details</a></p>
          </div>
          <div className="col-lg-8">
            <UserRepos />
          </div>
        </div>
      );
    }
    else {
      return (null);
    }
  }
});

module.exports = UserInfo;