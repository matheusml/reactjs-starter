var React = require('react');
var UserRepos = require('./user-repos');

function UserInfo(props) {
  if (props.user) {
    return (
      <div className="row">
        <div className="col-lg-4">
          <img className="img-circle" src={props.user.avatar_url} alt="avatar" width="140" height="140" />
          <h2>{props.user.login}</h2>
          <p>{props.user.name}</p>
          <p>Followers: {props.user.followers} / Following: {props.user.following}</p>
          <p><a className="btn btn-default" href={props.user.html_url} role="button">View details</a></p>
        </div>
        <div className="col-lg-8">
          <UserRepos repos={props.repos} />
        </div>
      </div>
    );
  }
  else {
    return (null);
  }
}

module.exports = UserInfo;