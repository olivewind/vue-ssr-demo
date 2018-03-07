<template>
  <div>
    <h2>User PAGE</h2>
    <div class="user-detail">
      <div>
        <b>ID:</b> {{user.id}}
      </div>
      <div>
        <b>Name:</b> {{user.name}}
      </div>
      <div>
        <b>Sex:</b> {{user.sex === 'boy' ? '男' : '女'}}
      </div>
      <div>
        <b>Followers:</b> {{user.dollowers}}
      </div>
      <div>
        <b>Following:</b> {{user.following}}
      </div>
      <div>
        <b>Desc:</b> {{user.desc}}
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'user',

    asyncData (data) {
      return data.store.dispatch('getUsers', { });
    },

    computed: {
      user () {
        return this.$store.state.users.find(user => user.id === this.$route.params.id);
      }
    },
  }
</script>

<style lang="stylus">
  h2
    text-align: center
  .user-detail
    background-color: #FFF
    padding: 20px
    div
      margin: 10px;
</style>
