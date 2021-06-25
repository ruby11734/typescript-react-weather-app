(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,r){e.exports={app:"App_app__1IksY",weather:"App_weather__18FYf",bottom:"App_bottom__1phAf",divider:"App_divider__3TIDT"}},16:function(e,t,r){e.exports={title:"Meta_title__2_3z7"}},17:function(e,t,r){e.exports={block:"Weathers_block__1YnAG",header:"Weathers_header__3OaWT",title:"Weathers_title__1wtVT",icon:"Weathers_icon__EYxuO",temperature:"Weathers_temperature__1etY5"}},28:function(e,t,r){e.exports={loading:"Loading_loading__2nSrA"}},29:function(e,t,r){e.exports={title:"Weather_title__MKNSx",icon:"Weather_icon__3jpCK",temperature:"Weather_temperature__9R3j6"}},34:function(e,t,r){},5:function(e,t,r){e.exports={current:"Current_current__2bCtp",left:"Current_left__3KflQ",temperature:"Current_temperature__3INBI",clouds:"Current_clouds__Ku4k4",bottomMetas:"Current_bottomMetas__3toL-",humidity:"Current_humidity__nzLzK",wind:"Current_wind__354z-",right:"Current_right__3aLAj",location:"Current_location__1OEQx",bottom:"Current_bottom__1ZcpP",divider:"Current_divider__1C6Um"}},61:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(13),i=r.n(c),s=(r(34),r(11)),o=r(10),u=Object(o.b)({name:"weather",initialState:{},reducers:{setCityWeather:function(e,t){e.cityWeather=t.payload}}}),l=u.actions.setCityWeather,d=function(e){return e.setCityWeather},_=u.reducer,p=Object(o.b)({name:"location",initialState:{error:!1},reducers:{setLocationError:function(e){e.error=!0}}}),j=p.actions.setLocationError,h=function(e){return e.setLocationError},m=p.reducer,b=Object(o.a)({reducer:{setCityWeather:_,setLocationError:m}}),O=r(0),f=function(e){return Object(O.jsx)("div",{className:e.className})},v=r(2),x=r.n(v),C=r(3),S=r(6);function E(){return y.apply(this,arguments)}function y(){return(y=Object(C.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){return navigator.geolocation&&navigator.geolocation.getCurrentPosition(e,t)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=r(27),g=r.n(N),A=(Object({NODE_ENV:"production",PUBLIC_URL:"/typescript-react-weather-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_WEATHER_APP_ID:"$APP_ID"}).REACT_APP_AWS_REGION,Object({NODE_ENV:"production",PUBLIC_URL:"/typescript-react-weather-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_WEATHER_APP_ID:"$APP_ID"}).REACT_APP_AWS_ACCESS_KEY_ID,Object({NODE_ENV:"production",PUBLIC_URL:"/typescript-react-weather-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_WEATHER_APP_ID:"$APP_ID"}).REACT_APP_AWS_SECRET_ACCESS_KEY,g.a.create({baseURL:"https://api.openweathermap.org/data/2.5/"}));A.interceptors.request.use((function(e){return e.params.appid="$APP_ID",e})),A.interceptors.request.use((function(e){return e.params.units="metric",e}));var w=A;function T(e){return P.apply(this,arguments)}function P(){return(P=Object(C.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.get("/weather",{params:{lat:t.latitude,lon:t.longitude}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return D.apply(this,arguments)}function D(){return(D=Object(C.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.get("/group",{params:{id:t.join(",")}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=function(e){var t=e.className,r=e.children;return Object(O.jsx)("span",{className:t,children:r})},k=r(16),I=r.n(k),F=function(e){var t=e.className,r=e.title,a=e.value;return Object(O.jsxs)("div",{className:t,children:[r&&Object(O.jsx)(R,{className:I.a.title,children:r}),r&&Object(O.jsx)("br",{}),Object(O.jsx)(R,{className:I.a.value,children:a})]})},K=r(5),L=r.n(K),H=r(8),M=r.n(H),U=r(28),Y=r.n(U),B=function(e){var t=e.loadingStyle,r=M.a.bind(Y.a);return Object(O.jsx)("div",{className:r("loading",t),children:Object(O.jsx)("div",{children:"loading..."})})},V=function(){return Object(s.b)()},q=s.c,z=function(){var e,t,r=Object(a.useState)(!0),n=Object(S.a)(r,2),c=n[0],i=n[1],s=Object(a.useState)(),o=Object(S.a)(s,2),u=o[0],_=o[1],p=q(d).cityWeather,h=V();Object(a.useEffect)((function(){m()}),[]),Object(a.useEffect)((function(){p&&(_(p),i(!p))}),[p]);var m=function(){var e=Object(C.a)(x.a.mark((function e(){var t,r,a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:return t=e.sent,r=t.coords,e.next=7,T(r);case 7:a=e.sent,n=a.data,_(n),i(!n),h(l(n)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),h(j()),alert("Please make sure to enable the location permission!");case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:L.a.current,children:c?Object(O.jsx)(B,{loadingStyle:L.a.loading}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:L.a.left,children:[Object(O.jsx)(F,{className:L.a.temperature,value:"".concat(null===u||void 0===u?void 0:u.main.temp," \xb0")}),Object(O.jsx)(F,{className:L.a.clouds,value:"".concat(null===u||void 0===u?void 0:u.weather[0].main)}),Object(O.jsxs)("div",{className:L.a.bottomMetas,children:[Object(O.jsx)(F,{className:L.a.humidity,title:"HUMIDITY",value:"".concat(null===u||void 0===u||null===(e=u.wind)||void 0===e?void 0:e.speed," %")}),Object(O.jsx)(f,{className:L.a.divider}),Object(O.jsx)(F,{className:L.a.wind,title:"WIND",value:"".concat(null===u||void 0===u||null===(t=u.wind)||void 0===t?void 0:t.speed," K/M")})]})]}),Object(O.jsx)("div",{className:L.a.right,children:Object(O.jsx)(F,{className:L.a.location,value:"".concat(null===u||void 0===u?void 0:u.name)})}),Object(O.jsx)("div",{className:L.a.bottom})]})})};function G(e){return $.apply(this,arguments)}function $(){return($=Object(C.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.get("/forecast",{params:{id:t}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=[{id:2158177,name:"Melbourne"},{id:2147714,name:"Sydney"},{id:2174003,name:"Brisbane"},{id:2063523,name:"Perth"}],Q=["SUN","MON","TUE","WED","THU","FRI","SAT"],Z=r(17),X=r.n(Z),ee=function(e){var t=e.parentStyles,r=e.header,a=e.loading,n=e.children,c=M.a.bind(X.a);return Object(O.jsxs)("div",{className:c("block"),children:[Object(O.jsx)("h2",{className:X.a.header,children:r}),a?Object(O.jsx)(B,{}):Object(O.jsx)("div",{className:t,children:n})]})},te=r(29),re=r.n(te),ae=function(e){var t=e.childrenStyles,r=e.CustomTag,a=e.title,n=e.clouds,c=e.temperature,i=e.onClick,s=M.a.bind(re.a);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(r,{className:t[0],onClick:function(){return i?i():null},children:[Object(O.jsx)("h3",{className:s("title",t[1]),children:a}),Object(O.jsx)("img",{className:s("icon",t[2]),src:"https://openweathermap.org/img/wn/".concat(n.icon,".png"),alt:n.main}),Object(O.jsx)("div",{className:s("temperature",t[3]),children:c})]})})},ne=r(9),ce=r.n(ne),ie=[ce.a.everyday,ce.a.day,ce.a.icon,ce.a.temperature],se=function(){var e,t=Object(a.useState)(),r=Object(S.a)(t,2),n=r[0],c=r[1],i=Object(a.useState)(!0),s=Object(S.a)(i,2),o=s[0],u=s[1],l=null===(e=q(d).cityWeather)||void 0===e?void 0:e.id;Object(a.useEffect)((function(){_()}),[l]);var _=function(){var e=Object(C.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=6;break}return e.next=3,G(l);case 3:t=e.sent.data.list,c(p(t)),u(!t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(e){return e.filter((function(e){return 12===new Date(e.dt_txt).getHours()}))};return Object(O.jsx)("div",{className:ce.a.forecast,children:Object(O.jsx)(ee,{parentStyles:ce.a.weathers,header:"Forecast",loading:o,children:null===n||void 0===n?void 0:n.map((function(e){return Object(O.jsx)(ae,{childrenStyles:ie,CustomTag:"div",title:Q[new Date(e.dt_txt).getDay()],clouds:e.weather[0],temperature:"".concat(Math.round(e.main.temp)," \xb0")},e.dt_txt)}))})})},oe=r(7),ue=r.n(oe),le=[ue.a.city,ue.a.name,ue.a.icon,ue.a.temperature],de=function(){var e=Object(a.useState)(),t=Object(S.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(!0),i=Object(S.a)(c,2),s=i[0],o=i[1],u=Object(a.useState)(!1),_=Object(S.a)(u,2),p=_[0],j=_[1],m=q(d).cityWeather,b=q(h).error,f=V(),v=M.a.bind(ue.a);Object(a.useEffect)((function(){E()}),[b]);var E=function(){var e=Object(C.a)(x.a.mark((function e(){var t,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=J.map((function(e){return e.id})),e.next=3,W(t);case 3:return e.next=5,e.sent.data;case 5:r=e.sent,a=r.list,n(a),o(!a),b&&f(l(a[0]));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:ue.a.otherCities,children:[!p&&Object(O.jsx)("button",{className:ue.a.toggle,onClick:function(){return j(!p)},children:"View More Cities ..."}),Object(O.jsx)("div",{className:v("container",{active:p}),children:Object(O.jsx)(ee,{parentStyles:ue.a.cities,header:"Other Cities",loading:s,children:null===r||void 0===r?void 0:r.map((function(e,t){return Object(O.jsx)(ae,{childrenStyles:le,CustomTag:"button",onClick:function(){return function(e,t){if(r&&m){if(!r.find((function(e){return e.id===m.id}))){var a=r.map((function(e,r){return r===t?m:e}));n(a)}f(l(e))}}(e,t)},title:e.name,clouds:e.weather[0],temperature:"".concat(Math.round(e.main.temp)," \xb0")},e.id)}))})})]})},_e=r(12),pe=r.n(_e),je=function(){return Object(O.jsx)("div",{className:pe.a.app,children:Object(O.jsxs)("div",{className:pe.a.weather,children:[Object(O.jsx)(z,{}),Object(O.jsxs)("div",{className:pe.a.bottom,children:[Object(O.jsx)(de,{}),Object(O.jsx)(f,{className:pe.a.divider}),Object(O.jsx)(se,{})]})]})})};i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(s.a,{store:b,children:Object(O.jsx)(je,{})})}),document.getElementById("root"))},7:function(e,t,r){e.exports={otherCities:"OtherCities_otherCities__jnC3A",toggle:"OtherCities_toggle__A0OLI",container:"OtherCities_container__1xHw4",active:"OtherCities_active__15sNT",city:"OtherCities_city__2YFSc",name:"OtherCities_name__2GjLL",icon:"OtherCities_icon__3qrq-",temperature:"OtherCities_temperature__1GKFk"}},9:function(e,t,r){e.exports={forecast:"Forecast_forecast__3_gmE",weathers:"Forecast_weathers__15OQW",everyday:"Forecast_everyday__3FOrc",day:"Forecast_day__26eWd",icon:"Forecast_icon__JgmAR",temperature:"Forecast_temperature__3KlxT"}}},[[61,1,2]]]);
//# sourceMappingURL=main.cf3d5fdb.chunk.js.map