var axios = require('axios');

var GitHubUserService = {
  getByUsername: function (username) {
    return axios.get('https://api.github.com/users/' + username);
  },

  getReposByUsername: function (username) {
    return axios.get('https://api.github.com/users/' + username + '/repos');
  }
};


module.exports = GitHubUserService;