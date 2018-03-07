<template>
  <div>
    <h2>Girl PAGE</h2>
    <item-list sex="girl"></item-list>
  </div>
</template>

<script>

  import ItemList  from '../components/item-list.vue';

  export default {
    name: 'girl',

    title: 'Girl',

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
