(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{874:function(e,t,r){"use strict";r.r(t);r(180);var a={data:function(){return{sort:{prop:"rank",order:"ascending"},items:[{rank:1,name:"African Elephant",family:"Elephantidae"},{rank:2,name:"Asian Elephant",family:"Elephantidae"},{rank:3,name:"White Rhinoceros",family:"Rhinocerotidae"},{rank:4,name:"Gaur",family:"Bovidae"},{rank:5,name:"Black Rhinoceros",family:"Rhinocerotidae"}]}},computed:{headers:function(){return[{label:"Rank",prop:"rank",sortable:!0,width:"5%",hidden:this.$viewport.isTabletDown,centered:!0},{label:"Name",prop:"name",sortable:!0,width:"20%"},{label:"Family",prop:"family",sortable:!0,width:"20%"}]},sortedItems:function(){var e,t=this.items.slice(0),r=this.sort.prop,a=this.sort.order;switch(r){case"rank":e=function(e,t){return e[r]-t[r]};break;default:e=function(e,t){return e[r].toLowerCase().localeCompare(t[r])}}var n=t.sort(e);return"descending"===a?n.reverse():n}},methods:{changeSort:function(e){var t=e.prop,r=e.order;this.sort.prop=t,this.sort.order=r}}},n=r(0),o=Object(n.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("n-module",{attrs:{type:"card",title:"Heaviest Land Mammals"}},[t("n-table",{attrs:{headers:this.headers,items:this.sortedItems,defaultSort:this.sort},on:{sort:this.changeSort}})],1)},[],!1,null,null,null);t.default=o.exports}}]);