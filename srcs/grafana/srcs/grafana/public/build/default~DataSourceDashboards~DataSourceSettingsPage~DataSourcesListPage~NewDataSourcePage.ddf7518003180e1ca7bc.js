(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"5BCB":function(e,t,n){"use strict";var r=n("ZFWI"),a=n("NXk7"),i=n("WnbS"),u=n("3SGO"),o=n("HUMP"),c=n("okuo"),s=n("Vw/f"),d=n("FFN/"),l=n("Obii");function p(e){var t=[{id:"tsdb",title:"Time series databases",plugins:[]},{id:"logging",title:"Logging & document databases",plugins:[]},{id:"tracing",title:"Distributed tracing",plugins:[]},{id:"sql",title:"SQL",plugins:[]},{id:"cloud",title:"Cloud",plugins:[]},{id:"enterprise",title:"Enterprise plugins",plugins:[]},{id:"iot",title:"Industrial & IoT",plugins:[]},{id:"other",title:"Others",plugins:[]}].filter((function(e){return e})),n={},a={},i=[g({id:"grafana-splunk-datasource",name:"Splunk",description:"Visualize & explore Splunk logs",imgUrl:"public/img/plugins/splunk_logo_128.png"}),g({id:"grafana-oracle-datasource",name:"Oracle",description:"Visualize & explore Oracle SQL",imgUrl:"public/img/plugins/oracle.png"}),g({id:"grafana-dynatrace-datasource",name:"Dynatrace",description:"Visualize & explore Dynatrace data",imgUrl:"public/img/plugins/dynatrace.png"}),g({id:"grafana-servicenow-datasource",description:"ServiceNow integration & data source",name:"ServiceNow",imgUrl:"public/img/plugins/servicenow.svg"}),g({id:"grafana-datadog-datasource",description:"DataDog integration & data source",name:"DataDog",imgUrl:"public/img/plugins/datadog.png"}),g({id:"grafana-newrelic-datasource",description:"New Relic integration & data source",name:"New Relic",imgUrl:"public/img/plugins/newrelic.svg"}),g({id:"grafana-mongodb-datasource",description:"MongoDB integration & data source",name:"MongoDB",imgUrl:"public/img/plugins/mongodb.svg"}),g({id:"grafana-snowflake-datasource",description:"Snowflake integration & data source",name:"Snowflake",imgUrl:"public/img/plugins/snowflake.svg"}),g({id:"grafana-wavefront-datasource",description:"Wavefront integration & data source",name:"Wavefront",imgUrl:"public/img/plugins/wavefront.svg"}),g({id:"dlopes7-appdynamics-datasource",description:"AppDynamics integration & data source",name:"AppDynamics",imgUrl:"public/img/plugins/appdynamics.svg"})],u=!0,o=!1,c=void 0;try{for(var s,d=t[Symbol.iterator]();!(u=(s=d.next()).done);u=!0){var p=s.value;n[p.id]=p}}catch(e){o=!0,c=e}finally{try{u||null==d.return||d.return()}finally{if(o)throw c}}var m=r.a.licenseInfo,v=m.edition,h=m.hasValidLicense,b=!0,y=!1,w=void 0;try{for(var x,S=function(){var e,r=x.value,u=i.find((function(e){return e.id===r.id}));(r.enterprise||u)&&(r.category="enterprise",r.unlicensed="Open Source"!==v&&!h,r.info.links=(null==u?void 0:null===(e=u.info)||void 0===e?void 0:e.links)||r.info.links);if(r.info.links){var o=!0,c=!1,s=void 0;try{for(var d,l=r.info.links[Symbol.iterator]();!(o=(d=l.next()).done);o=!0){d.value.name="Learn more"}}catch(e){c=!0,s=e}finally{try{o||null==l.return||l.return()}finally{if(c)throw s}}}(t.find((function(e){return e.id===r.category}))||n.other).plugins.push(r),a[r.id]=r},k=e[Symbol.iterator]();!(b=(x=k.next()).done);b=!0)S()}catch(e){y=!0,w=e}finally{try{b||null==k.return||k.return()}finally{if(y)throw w}}var O=!0,D=!1,j=void 0;try{for(var R,U=t[Symbol.iterator]();!(O=(R=U.next()).done);O=!0){var I=R.value;if("cloud"===I.id&&I.plugins.push({id:"gcloud",name:"Grafana Cloud",type:l.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:"Hosted Graphite, Prometheus and Loki",logos:{small:"public/img/grafana_icon.svg",large:"asd"},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/products/cloud/",name:"Learn more"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}),"enterprise"===I.id){var L=!0,P=!1,T=void 0;try{for(var N,M=i[Symbol.iterator]();!(L=(N=M.next()).done);L=!0){var C=N.value;a[C.id]||I.plugins.push(C)}}catch(e){P=!0,T=e}finally{try{L||null==M.return||M.return()}finally{if(P)throw T}}}f(I.plugins)}}catch(e){D=!0,j=e}finally{try{O||null==U.return||U.return()}finally{if(D)throw j}}return t.filter((function(e){return e.plugins.length>0}))}function f(e){var t={prometheus:100,graphite:95,loki:90,mysql:80,jaeger:100,postgres:79,gcloud:-1};e.sort((function(e,n){var r=t[e.id]||0,a=t[n.id]||0;return r>a?-1:r<a?1:e.name>n.name?-1:1}))}function g(e){return{id:e.id,name:e.name,type:l.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:e.description,logos:{small:e.imgUrl,large:e.imgUrl},author:{name:"Grafana Labs"},links:[{url:r.a.marketplaceUrl+e.id,name:"Install now"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}}var m=n("frIo");function v(e,t,n,r,a,i,u){try{var o=e[i](u),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function u(e){v(i,r,a,u,o,"next",e)}function o(e){v(i,r,a,u,o,"throw",e)}u(void 0)}))}}n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return y})),n.d(t,"f",(function(){return w})),n.d(t,"d",(function(){return x})),n.d(t,"a",(function(){return S})),n.d(t,"e",(function(){return k})),n.d(t,"h",(function(){return O})),n.d(t,"b",(function(){return D}));var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{loadDataSource:x,getDataSource:m.a,getDataSourceMeta:m.b,importDataSourcePlugin:s.b};return(function(){var n=h(regeneratorRuntime.mark((function n(r,a){var i,u,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!isNaN(e)){n.next=3;break}return r(Object(d.g)(new Error("Invalid ID"))),n.abrupt("return");case 3:return n.prev=3,n.next=6,r(t.loadDataSource(e));case 6:if(!a().dataSourceSettings.plugin){n.next=8;break}return n.abrupt("return");case 8:return i=t.getDataSource(a().dataSources,e),u=t.getDataSourceMeta(a().dataSources,i.type),n.next=12,t.importDataSourcePlugin(u);case 12:o=n.sent,r(Object(d.h)(o)),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(3),console.error("Failed to import plugin module",n.t0),r(Object(d.g)(n.t0));case 20:case"end":return n.stop()}}),n,null,[[3,16]])})));return function(e,t){return n.apply(this,arguments)}}())},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{getDatasourceSrv:i.a,getBackendSrv:a.c};return(function(){var n=h(regeneratorRuntime.mark((function n(r,a){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getDatasourceSrv().get(e);case 2:if((i=n.sent).testDatasource){n.next=5;break}return n.abrupt("return");case 5:r(Object(d.o)()),t.getBackendSrv().withNoBackendCache(h(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.testDatasource();case 3:t=e.sent,r(Object(d.p)(t)),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),n="",n=e.t0.statusText?"HTTP Error "+e.t0.statusText:e.t0.message,r(Object(d.n)({message:n}));case 12:case"end":return e.stop()}}),e,null,[[0,7]])}))));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())};function w(){return function(){var e=h(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.c)().get("/api/datasources");case 2:n=e.sent,t(Object(d.e)(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function x(e){return function(){var t=h(regeneratorRuntime.mark((function t(n){var r,i,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.c)().get("/api/datasources/".concat(e));case 2:return r=t.sent,t.next=5,Object(c.a)(r.type);case 5:return i=t.sent,t.next=8,Object(s.b)(i);case 8:l=t.sent,n(Object(d.a)(r)),n(Object(d.b)(i)),n(Object(u.e)(Object(o.a)(r,l)));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function S(e){return function(){var t=h(regeneratorRuntime.mark((function t(n,r){var i,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(w());case 2:return i=r().dataSources.dataSources,o={name:e.name,type:e.id,access:"proxy",isDefault:0===i.length},j(i,o.name)&&(o.name=R(i,o.name)),t.next=7,Object(a.c)().post("/api/datasources",o);case 7:c=t.sent,n(Object(u.d)({path:"/datasources/edit/".concat(c.id)}));case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}function k(){return function(){var e=h(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(d.c)()),e.next=3,Object(a.c)().get("/api/plugins",{enabled:1,type:"datasource"});case 3:n=e.sent,r=p(n),t(Object(d.d)({plugins:n,categories:r}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function O(e){return function(){var t=h(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.c)().put("/api/datasources/".concat(e.id),e);case 2:return t.next=4,U();case 4:return t.abrupt("return",n(x(e.id)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function D(){return function(){var e=h(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().dataSources.dataSource,e.next=3,Object(a.c)().delete("/api/datasources/".concat(r.id));case 3:return e.next=5,U();case 5:t(Object(u.d)({path:"/datasources"}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function j(e,t){return e.filter((function(e){return e.name.toLowerCase()===t.toLowerCase()})).length>0}function R(e,t){for(;j(e,t);)t=I(t)?"".concat(P(t)).concat((n=L(t),isNaN(n)?1:n+1)):"".concat(t,"-1");var n;return t}function U(){return Object(a.c)().get("/api/frontend/settings").then((function(e){r.b.datasources=e.datasources,r.b.defaultDatasource=e.defaultDatasource,Object(i.a)().init()}))}function I(e){return e.endsWith("-",e.length-1)}function L(e){return parseInt(e.slice(-1),10)}function P(e){return e.slice(0,e.length-1)}},HUMP:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("Obii"),a=n("ZFWI");function i(e,t){var n=t.meta,r={img:n.info.logos.large,id:"datasource-"+e.id,subTitle:"Type: ".concat(n.name),url:"",text:e.name,breadcrumbs:[{title:"Data Sources",url:"datasources"}],children:[{active:!1,icon:"sliders-v-alt",id:"datasource-settings-".concat(e.id),text:"Settings",url:"datasources/edit/".concat(e.id,"/")}]};if(t.configPages){var i=!0,u=!1,o=void 0;try{for(var c,s=t.configPages[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var d=c.value;r.children.push({active:!1,text:d.title,icon:d.icon,url:"datasources/edit/".concat(e.id,"/?page=").concat(d.id),id:"datasource-page-".concat(d.id)})}}catch(e){u=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(u)throw o}}}return n.includes&&void 0!==n.includes.find((function(e){return"dashboard"===e.type}))&&r.children.push({active:!1,icon:"apps",id:"datasource-dashboards-".concat(e.id),text:"Dashboards",url:"datasources/edit/".concat(e.id,"/dashboards")}),a.b.licenseInfo.hasLicense&&(r.children.push({active:!1,icon:"lock",id:"datasource-permissions-".concat(e.id),text:"Permissions",url:"datasources/edit/".concat(e.id,"/permissions")}),r.children.push({active:!1,icon:"info-circle",id:"datasource-insights-".concat(e.id),text:"Insights",url:"datasources/edit/".concat(e.id,"/insights")})),r}function u(e){var t,n=i({access:"",basicAuth:!1,basicAuthUser:"",basicAuthPassword:"",withCredentials:!1,database:"",id:1,isDefault:!1,jsonData:{authType:"credentials",defaultRegion:"eu-west-2"},name:"Loading",orgId:1,password:"",readOnly:!1,type:"Loading",typeLogoUrl:"public/img/icn-datasource.svg",url:"",user:"",secureJsonFields:{}},{meta:{id:"1",type:r.PluginType.datasource,name:"",info:{author:{name:"",url:""},description:"",links:[{name:"",url:""}],logos:{large:"",small:""},screenshots:[],updated:"",version:""},includes:[],module:"",baseUrl:""}}),a=!0,u=!1,o=void 0;try{for(var c,s=n.children[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){var d=c.value;if(d.id.indexOf(e)>0){d.active=!0,t=d;break}}}catch(e){u=!0,o=e}finally{try{a||null==s.return||s.return()}finally{if(u)throw o}}return{main:n,node:t}}},frIo:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"g",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"e",(function(){return s}));var r=function(e){var t=new RegExp(e.searchQuery,"i");return e.dataSources.filter((function(e){return t.test(e.name)||t.test(e.database)||t.test(e.type)}))},a=function(e){var t=new RegExp(e.dataSourceTypeSearchQuery,"i");return e.plugins.filter((function(e){return t.test(e.name)}))},i=function(e,t){return e.dataSource.id===parseInt(t,10)?e.dataSource:{}},u=function(e,t){return e.dataSourceMeta.id===t?e.dataSourceMeta:{}},o=function(e){return e.searchQuery},c=function(e){return e.layoutMode},s=function(e){return e.dataSourcesCount}}}]);
//# sourceMappingURL=default~DataSourceDashboards~DataSourceSettingsPage~DataSourcesListPage~NewDataSourcePage.ddf7518003180e1ca7bc.js.map