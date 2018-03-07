import axios from 'axios';

const $http = axios;

$http.defaults.baseURL = 'http://localhost:3000/api/';

class UserApi{
  constructor($http) {
    this.$http = $http;
  }

  getSingleUser(id) {
    return this.$http.get(`user/${id}`)
      .then(res => res.data);
  }

  getUsers() {
    return this.$http.get('users')
      .then(res => res.data);
  }
}

const userApi = new UserApi($http);

export default userApi;
