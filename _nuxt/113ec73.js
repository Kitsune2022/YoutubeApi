(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{545:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(25);n(77),n(4),n(10),n(12),n(9),n(11),n(15),n(16);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"InspirePage",data:function(){return{totalDesserts:0,pagecount:1,AppData:[],options:{},headers:[{text:"標題",value:"snippet.title"},{text:"publishedAt",value:"snippet.publishedAt"},{text:"etag",value:"videoInfo.items[0].statistics.viewCount"},{text:"預覽圖",value:"actions"}]}},created:function(){this.GetData({})},watch:{options:{handler:function(t){this.GetData(t)},deep:!0}},updated:function(){},methods:{GetData:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var o,r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=e.AppData.nextPageToken,r=e.AppData.prevPageToken,c="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&playlistId=UUMUnInmOkrWN4gof9KlhNmQ&key=我是API&maxResults=10",t&&t.page>e.pagecount?c=c+"&pageToken="+o:t&&t.page<e.pagecount&&(c=c+"&pageToken="+r),e.pagecount=t.page,e.$axios({url:c,method:"get"}).then((function(t){t.data.items.forEach((function(t){e.GetVideo(t.contentDetails.videoId).then((function(n){e.$set(t,"videoInfo",n)}))})),e.AppData=l({},t.data),e.totalDesserts=e.AppData.pageInfo.totalResults})).catch((function(t){console.log(t)}));case 6:case"end":return n.stop()}}),n)})))()},GetVideo:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,o){e.$axios({url:"https://www.googleapis.com/youtube/v3/videos?key=我是API&&part=statistics&id="+t,method:"get"}).then((function(t){n(t.data)})).catch((function(t){console.log(t),o(t)}))})));case 1:case"end":return n.stop()}}),n)})))()}}},d=n(94),h=n(137),m=n.n(h),v=n(542),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.AppData.items,"item-key":"name","total-items":100,"server-items-length":t.totalDesserts,options:t.options},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.actions",fn:function(t){var e=t.item;return[n("img",{staticStyle:{"padding-left":"10px",width:"100px"},attrs:{src:e.snippet.thumbnails.default.url,target:"_blank"}})]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VDataTable:v.a})}}]);