export default {
  getUsersBySex: (state) => (sex) => {
    return state.users.filter(user => user.sex === 'sex');
  },
}
