import Vue from 'vue'

export default {
  SET_USERS: (state, { users }) => {
    state.users = users;
  },
}
