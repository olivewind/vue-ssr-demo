<template>
  <div>
    <h2>Boy PAGE</h2>
    <item-list sex="boy"></item-list>
  </div>
</template>

<script>

  import ItemList  from '../components/item-list.vue';

  export default {
    name: 'boy',

    title: 'Boy',

    asyncData (data) {
      return data.store.dispatch('getUsers', { });
    },

    components: {
      ItemList,
    },
  }
</script>

<style lang="stylus">
  h2
    text-align: center
</style>
