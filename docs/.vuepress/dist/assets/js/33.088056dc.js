(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{587:function(t,e,n){"use strict";n.r(e);var r=n(3),a=(n(51),n(138),{name:"Sidebar",computed:{items:function(){var t=this;return this.$site.pages.filter(function(t){return!!t.frontmatter.label}).map(function(e){var n=e.frontmatter,a=function(t){var e=(t.path||"/").substr(1).split("/"),n=e.pop().replace(/.html$/gi,"");return{parentId:e.join("::"),id:n}}(e),i=a.id,s=a.parentId;return Object(r.a)({},n,{title:n.label||n.title||e.title,to:{path:e.path},expanded:!1,selected:t.$route.path===e.path,parentId:s,id:i})})}}}),i=n(0),s=Object(i.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("n-div",{attrs:{bg:"white"}},[e("n-menu",{attrs:{items:this.items}})],1)},[],!1,null,null,null);e.default=s.exports}}]);