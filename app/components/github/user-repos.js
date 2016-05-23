var React = require('react');

function UserRepos(props) {
  return (
    <div>
      <h2>Repositories</h2>
      <div ng-repeat="repo in repos">
        <div className="thumbnail">
          <div className="caption">
            <h3>{props.repo.name}}
              <span className="badge">{props.repo.stargazers_count}} STARS</span>
            </h3>
            <p>{props.repo.description}}</p>
            <p>
              <a href={props.repo.html_url} className="btn btn-primary" role="button">Repository</a>
              <a href={props.repo.html_url + '/issues'} className="btn btn-default" role="button">Issues ({props.repo.open_issues}}) </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = UserRepos;