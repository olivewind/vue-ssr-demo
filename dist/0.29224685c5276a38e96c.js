webpackJsonp([0],{49:function(t,e,i){var s=i(50);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(48)("0994eb4b",s,!0,{})},50:function(t,e,i){e=t.exports=i(47)(!1),e.push([t.i,"a{cursor:pointer}.disabled{pointer-events:none}.news-view{padding-top:45px}.news-list,.news-list-nav{background-color:#fff;border-radius:2px}.news-list-nav{padding:15px 30px;position:fixed;text-align:center;top:55px;left:0;right:0;z-index:998;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.1);box-shadow:0 1px 2px rgba(0,0,0,.1)}.news-list-nav a{margin:0 1em}.news-list-nav .disabled{color:#ccc}.news-list{position:absolute;margin:30px 0;width:100%;-webkit-transition:all .5s cubic-bezier(.55,0,.1,1);-o-transition:all .5s cubic-bezier(.55,0,.1,1);transition:all .5s cubic-bezier(.55,0,.1,1)}.news-list ul{list-style-type:none;padding:0;margin:0}.slide-left-enter,.slide-right-leave-to{opacity:0;-webkit-transform:translate(30px);-ms-transform:translate(30px);transform:translate(30px)}.slide-left-leave-to,.slide-right-enter{opacity:0;-webkit-transform:translate(-30px);-ms-transform:translate(-30px);transform:translate(-30px)}.item-enter-active,.item-leave-active,.item-move{-webkit-transition:all .5s cubic-bezier(.55,0,.1,1);-o-transition:all .5s cubic-bezier(.55,0,.1,1);transition:all .5s cubic-bezier(.55,0,.1,1)}.item-enter,.item-leave-active{opacity:0;-webkit-transform:translate(30px);-ms-transform:translate(30px);transform:translate(30px)}.item-leave-active{position:absolute}@media (max-width:600px){.news-list{margin:10px 0}}",""])},51:function(t,e,i){var s=i(52);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(48)("3cbd9c10",s,!0,{})},52:function(t,e,i){e=t.exports=i(47)(!1),e.push([t.i,".news-item{background-color:#fff;padding:20px 30px;border-bottom:1px solid #eee;position:relative;line-height:20px}.news-item .title{font-weight:700}.news-item .host,.news-item .meta{font-size:.85em;color:#828282}.news-item .host .tag,.news-item .meta .tag{border:1px solid #828282;border-radius:2px;margin-right:10px}.news-item .host a,.news-item .meta a{color:#828282;text-decoration:underline}.news-item .host a:hover,.news-item .meta a:hover{color:#f60}",""])},53:function(t,e,i){"use strict";function s(t){i(51)}function n(t){i(49)}function a(t){return{name:t+"-view",asyncData:function(e){return e.store.dispatch("FETCH_LIST_DATA",{type:t})},title:C(t),render:function(e){return e(I,{props:{type:t}})}}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(12),o={name:"news-item",props:["item"],serverCacheKey:function(t){var e=t.item,i=e.id,s=e.__lastUpdated,n=e.time;return i+"::"+s+"::"+Object(r.timeAgo)(n)}},l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"news-item"},[i("span",{staticClass:"title"},[i("a",{attrs:{href:t.item.originalUrl,target:"_blank",rel:"noopener"}},[t._v(t._s(t.item.title))])]),i("br"),i("span",{staticClass:"meta"},[i("span",[t._v("\n      "+t._s(t.item.collectionCount)+"收藏 | "+t._s(t.item.commentsCount)+"评论\n    ")])]),i("p",[t._v(t._s(t.item.content))])])},p=[],c={render:l,staticRenderFns:p},d=c,m=i(6),u=s,f=m(o,d,!1,u,null,null),h=f.exports,v={name:"item-list",components:{Item:h},props:{type:String},data:function(){var t=this.$store.state.lists[this.type];return{transition:"slide-right",displayedPage:Number(this.$route.params.page)||1,displayedItems:t.entrylist}},computed:{prevDisabled:function(){return this.rankIndex.length<=1},rankIndex:function(){return this.$store.state.rankIndex[this.type]}},methods:{next:function(){var t=this;this.$bar.start();var e=this.displayedItems.length,i=this.displayedItems[e-1],s=i&&i.rankIndex||void 0;console.log("before...",s),this.$store.dispatch("FETCH_LIST_DATA",{type:this.type,index:s,action:"next"}).then(function(){var e=t.$store.state.lists[t.type];t.transition="slide-right",t.displayedItems=e.entrylist,t.$bar.finish()})},prev:function(){var t=this;this.$bar.start();var e=this.rankIndex,i=e[e.length-2]||void 0;this.$store.dispatch("FETCH_LIST_DATA",{type:this.type,index:i,action:"prev"}).then(function(){var e=t.$store.state.lists[t.type];t.transition="slide-left",t.displayedItems=e.entrylist,t.$bar.finish()})}}},x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"news-view"},[i("transition",{attrs:{name:t.transition}},[t.displayedPage>0?i("div",{key:t.displayedPage,staticClass:"news-list"},[i("transition-group",{attrs:{tag:"ul",name:"item"}},t._l(t.displayedItems,function(t){return i("item",{key:t.objectId,attrs:{item:t}})}))],1):t._e()]),i("div",{staticClass:"news-list-nav"},[i("a",{class:{disabled:t.prevDisabled},on:{click:t.prev}},[t._v("< prev")]),i("a",{on:{click:t.next}},[t._v("next >")])])],1)},b=[],g={render:x,staticRenderFns:b},w=g,y=i(6),_=n,k=y(v,w,!1,_,null,null),I=k.exports;e.default=a;var C=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}});