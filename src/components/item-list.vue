<template>
  <div class="items-view">
    <transition name="slide-right">
      <div class="item-list">
        <transition-group tag="ul" name="item">
            <item v-for="item in items" :key="item.id" :item="item">
            </item>
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
  import Item from '../components/item.vue';

  export default {
    name: 'item-list',

    props: {
      sex: String
    },

    computed: {
      items () {
        return this.$store.state.users.filter(user => user.sex === this.sex).sort((a, b) => b.followers - a.followers);
      }
    },

    components: {
      Item
    },
  }
</script>

<style lang="stylus">
    a
        cursor pointer
    .disabled
        pointer-events none
    .items-view

    .item-list-nav, .item-list
        background-color #fff
        border-radius 2px

    .item-list-nav
        padding 15px 30px
        position fixed
        text-align center
        top 55px
        left 0
        right 0
        z-index 998
        box-shadow 0 1px 2px rgba(0, 0, 0, .1)
        a
            margin 0 1em
        .disabled
            color #ccc

    .item-list
        position absolute
        margin 0
        width 100%
        transition all .5s cubic-bezier(.55, 0, .1, 1)
        ul
            list-style-type none
            padding 0
            margin 0

    .slide-left-enter, .slide-right-leave-to
        opacity 0
        transform translate(30px, 0)

    .slide-left-leave-to, .slide-right-enter
        opacity 0
        transform translate(-30px, 0)

    .item-move, .item-enter-active, .item-leave-active
        transition all .5s cubic-bezier(.55, 0, .1, 1)

    .item-enter
        opacity 0
        transform translate(30px, 0)

    .item-leave-active
        position absolute
        opacity 0
        transform translate(30px, 0)

    @media (max-width 600px)
        .item-list
            margin 10px 0
</style>
