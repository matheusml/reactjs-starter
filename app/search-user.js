var React = require('react');

var SearchUser = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>GitHub User's Info</h1>
        <p className="lead">A simple application with AngularJS, build to display GitHub user's info</p>
        <div className="row">
          <div className="col-md-4">
            <form>
              <div className="form-group">
                <label for="username">Username</label>
                <input type="text" className="form-control" placeholder="Ex: matheusml" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SearchUser;