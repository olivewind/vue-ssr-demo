import UserApi from '../api'

export default {
  getUsers: ({ commit }, {}) => {
    return UserApi.getUsers()
      .then(users => {
        commit('SET_USERS', { users });
      });
  }
}
