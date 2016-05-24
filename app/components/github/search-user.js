var React = require('react');
var GitHubUserService = require('../../services/github-user');

var SearchUser = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    var self = this;

    GitHubUserService.getByUsername(this.refs.username.value)
      .then(function (response) {
        self.props.updateUserInfo(response.data);
      });

    GitHubUserService.getReposByUsername(this.refs.username.value)
      .then(function (response) {
        self.props.updateUserRepos(response.data);
      });
  },

  render: function () {
    return (
      <div className="jumbotron">
        <h1>GitHub Info</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                ref="username"
                className="form-control"
                placeholder="Ex: matheusml"
              />
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = SearchUser;