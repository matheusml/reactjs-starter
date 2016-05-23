var React = require('react');

var UserRepos = React.createClass({
  render: function() {
    var repo = {
      stargazers_count: '',
      name: '',
      description: '',
      html_url: '',
      open_issues: '',
    };
    return (
      <div>
        <h2>Repositories</h2>
        <div ng-repeat="repo in repos">
          <div className="thumbnail">
            <div className="caption">
              <h3>{repo.name}}
                <span className="badge">{repo.stargazers_count}} STARS</span>
              </h3>
              <p>{repo.description}}</p>
              <p>
                <a href={repo.html_url} className="btn btn-primary" role="button">Repository</a>
                <a href={repo.html_url + '/issues'} className="btn btn-default" role="button">Issues ({repo.open_issues}})</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserRepos;