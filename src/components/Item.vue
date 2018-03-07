<template>
  <li class="item">
    <span class="title">
      <router-link :to="{ name: 'user', params: { id: item.id }}">{{item.name}}</router-link>
    </span>
    <br>
    <span class="meta">
      <span>
        {{item.followers}} Followers | {{item.following}} Following
      </span>
    </span>
    <p>{{item.desc}}</p>
  </li>
</template>

<script>
import { timeAgo } from '../util/filters'

export default {
  name: 'item',
  props: ['item'],
}
</script>

<style lang="stylus">
.item
  background-color #fff
  padding 20px 30px 20px
  border-bottom 1px solid #eee
  position relative
  line-height 20px
  .title
    font-weight 700
  .meta, .host
    font-size .85em
    color #828282
    .tag
      border 1px solid #828282
      border-radius 2px
      margin-right 10px
    a
      color #828282
      text-decoration underline
      &:hover
        color #ff6600
</style>
