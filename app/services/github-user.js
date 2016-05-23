var axios = require('axios');

var GitHubUserService = {
  getByUsername: function (username) {
    return axios.get('https://api.github.com/users', {
      params: {
        username: username
      }
    });
  }
};


module.exports = GitHubUserService;