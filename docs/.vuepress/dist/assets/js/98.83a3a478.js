(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{981:function(e,n,t){"use strict";t.r(n);t(259);var r=t(21),s={data:function(){return{model:{username:"",password:""},rules:{username:[r.default.minLength(5,"Usernames must be 5 or more characters long"),r.default.maxLength(12,"Usernames can not be more than 12 character long"),r.default.custom(function(e){if(e.match(/\s/))throw new Error("Usernames can not contain spaces")}),r.default.custom(function(e){return new Promise(function(e,n){setTimeout(function(){n(new Error("This username has been registered"))},2e3)})})]}}},methods:{sendData:function(){return new Promise(function(e){setTimeout(function(){e()},2e3)})},onDone:function(){this.$alert("Data has been sent")}}},a=t(1),o=Object(a.a)(s,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("n-form",{on:{done:e.onDone,submit:e.sendData},scopedSlots:e._u([{key:"footer",fn:function(e){var n=e.saving;return[t("n-div",{attrs:{flex:"","right-center":""}},[t("n-button",{attrs:{loading:n,secondary:"","suffix-icon":"fas fa-arrow-right",text:"Continue",type:"submit"}})],1)]}}])},[t("n-div",{attrs:{flex:""}},[t("n-text-field",{staticClass:"col-12",attrs:{rules:e.rules.username,help:"Please select a username between 5 and 12 characters",label:"Username",required:"",type:"text"},model:{value:e.model.username,callback:function(n){e.$set(e.model,"username",n)},expression:"model.username"}})],1)],1)},[],!1,null,null,null);n.default=o.exports}}]);