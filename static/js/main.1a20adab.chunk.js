(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){t.exports={input:"_2VdU9",pressure:"_1Pu6H",condition:"_2JsL5",date:"_2BL8U",img_star:"_3vEQ_",input_wrapper:"-qZt8",oneDayWrapper:"_3E_dl"}},17:function(t,e,a){t.exports={main_img:"_2YD0X",favorite__button:"zQAMn"}},18:function(t,e,a){t.exports={input:"_20M3W",pressure:"_7WN_X",date:"_3e_F-",img_star:"_3kOCM",input_wrapper:"_1IPqT",parameters_wrapper:"_36y8I",condition:"_3UjK7"}},19:function(t,e,a){t.exports={card:"_3wGdU",card_column:"_1wa2g",icon_img:"_2264w",chart:"_1bkDO"}},292:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(85),o=a.n(r),c=a(294),s=(a(99),a(93)),l=a(37),u=a(38),m=a(42),d=a(39),p=a(43),f=a(86),g=a.n(f),h=a(17),v=a.n(h),y=a(296),_=a(293),E=a(44),F=a.n(E),C=a(295),w=function(){return i.a.createElement("div",null,i.a.createElement("ul",{className:F.a.nav},i.a.createElement("li",null,i.a.createElement(C.a,{className:F.a.li,to:"/"},"Today")),i.a.createElement("li",null,i.a.createElement(C.a,{className:F.a.li,to:"/fivedays"},"Five days"))))},L=a(14),b=a.n(L),N=a(18),S=a.n(N),x=a(88),k=a.n(x),D=function(t){var e=t.input,a=t.fetchData,n=(t.pressure,t.temp,t.date),r=(t.city,t.favoriteCityListFunction);t.condition;return i.a.createElement("div",{className:S.a.oneDay},i.a.createElement("form",{action:"",onSubmit:a},i.a.createElement("div",{className:S.a.input_wrapper},i.a.createElement("input",{type:"text",placeholder:"Enter name of city",className:S.a.input,onChange:e,required:!0}),i.a.createElement("img",{src:k.a,alt:"Add to favorite",className:S.a.img_star,onClick:r})),i.a.createElement("p",{className:S.a.date},n)))},W=a(26),O=a.n(W),A=a(89),I=a.n(A),M=a(19),j=a.n(M),P=a(90),T=a(92),q=a.n(T),J=function(t){var e=t.allweatherArr,a={labels:e[9],datasets:[{label:"Morning",borderColor:"#0000ff",data:e[0]},{label:"Afternoon",borderColor:"#00ff00",data:e[3]},{label:"Evening",borderColor:"#ff0000",data:e[6]}]};return i.a.createElement("div",{className:q.a.main},i.a.createElement("div",null,i.a.createElement(P.a,{data:a,options:{tooltips:{mode:"index"},legend:{position:"top",display:!0,labels:{fontColor:"white",fontSize:10}},title:{display:!0,text:"Temp Chart ",position:"top",fontColor:"white",fontSize:20},scales:{yAxes:[{scaleLabel:{fontFamily:"Yarta",display:!0,labelString:"Temp C",fontColor:"white",fontSize:15},gridLines:{color:"white"},ticks:{fontFamily:"Yarta",fontSize:12,fontColor:"white"}}],xAxes:[{scaleLabel:{fontFamily:"Yarta",display:!0,fontColor:"white",fontSize:15},gridLines:{color:"white"},ticks:{fontFamily:"Arial",fontSize:12,fontColor:"white"}}]}}})))},K=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={fiveDaysData:[],data:{},isLoadingFivedays:!0,modalStatus:!1,toggleStatus:!1,allweatherArr:[],toggleChart:!1},a.getWeatherFiveDays=function(){var t=a.props.input;b.a.get("https://api.openweathermap.org/data/2.5/forecast?APPID=8defc985a5e2c764076c53bf90c6c44e&units=metric&lang=ru&q=".concat(t||"Kiev")).then(function(t){return t.data.list}).then(function(t){var e=t.filter(function(t){return t.dt_txt.includes("06:00:00")}).map(function(t){return t.main.temp}),n=t.filter(function(t){return t.dt_txt.includes("06:00:00")}).map(function(t){return t.weather}),i=t.filter(function(t){return t.dt_txt.includes("06:00:00")}).map(function(t){return t.main.humidity}),r=t.filter(function(t){return t.dt_txt.includes("15:00:00")}).map(function(t){return t.main.temp}),o=t.filter(function(t){return t.dt_txt.includes("15:00:00")}).map(function(t){return t.weather}),c=t.filter(function(t){return t.dt_txt.includes("15:00:00")}).map(function(t){return t.main.humidity}),s=t.filter(function(t){return t.dt_txt.includes("21:00:00")}).map(function(t){return t.main.temp}),l=t.filter(function(t){return t.dt_txt.includes("21:00:00")}).map(function(t){return t.weather}),u=t.filter(function(t){return t.dt_txt.includes("21:00:00")}).map(function(t){return t.main.humidity}),m=t.filter(function(t){return t.dt_txt.includes("21:00:00")}).map(function(t){return O.a.unix(t.dt).format("MMM Do YY")}),d=[];d.push(e,n,i,r,o,c,s,l,u,m);for(var p=[],f=function(t){var e={};d.map(function(a,n){switch(n){case 0:e.morningTemp=a[t];break;case 1:e.morningWeather=a[t];break;case 2:e.morningHumidity=a[t];break;case 3:e.afterTemp=a[t];break;case 4:e.afterWeather=a[t];break;case 5:e.afterHumidity=a[t];break;case 6:e.eveningTemp=a[t];break;case 7:e.eveningWeather=a[t];break;case 8:e.eveningHumidity=a[t];break;case 9:e.date=a[t],p.push(e)}})},g=0;g<5;g++)f(g);a.setState({fiveDaysData:p,isLoadingFivedays:!1,allweatherArr:d})}).catch(function(t){console.log(t)})},a.componentDidMount=function(){a.getWeatherFiveDays()},a.toggleChartFunction=function(){a.setState(function(t){return{toggleChart:!t.toggleChart}})},a}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidUpdate",value:function(t){t.input!==this.props.input&&this.getWeatherFiveDays()}},{key:"render",value:function(){var t=this,e=this.state,a=e.fiveDaysData,n=e.allweatherArr,r=e.toggleChart;return console.log(n),i.a.createElement("div",null,this.state.isLoadingFivedays?i.a.createElement("p",null,"Loading"):i.a.createElement("div",{className:j.a.card},a.map(function(e){return i.a.createElement("div",{className:j.a.card_column},i.a.createElement("p",null,"City : ",t.props.cityName," "),i.a.createElement("p",null,e.date),i.a.createElement("p",null,"Morning t : ",e.morningTemp," \xb0 C"),i.a.createElement("p",null,"Evening t : ",e.eveningTemp," \xb0 C"),i.a.createElement("p",null,e.morningWeather[0].main),i.a.createElement("p",{className:j.a.condition},i.a.createElement("img",{className:j.a.icon_img,src:"http://openweathermap.org/img/w/".concat(e.morningWeather[0].icon,".png"),alt:""})))})),i.a.createElement("p",{className:j.a.chart,onClick:this.toggleChartFunction},"Temperature Chart"),r?i.a.createElement(J,{allweatherArr:n}):null)}}]),e}(n.Component),z=a(15),H=a.n(z),U=function(t){var e=t.pressure,a=t.temp,n=t.cityName,r=t.condition,o=t.data;return i.a.createElement("div",{className:H.a.oneDay},i.a.createElement("div",{className:H.a.oneDayWrapper},i.a.createElement("p",{className:H.a.pressure},"City:",n),i.a.createElement("p",{className:H.a.pressure},"Temperature :",a," \xb0 C"),i.a.createElement("p",{className:H.a.pressure},"Pressure :",(e/1.33).toFixed(2)," mm Hg"),i.a.createElement("p",{className:H.a.condition},"Condition :",r," ",i.a.createElement("img",{src:"https://openweathermap.org/img/w/".concat(o.weather[0].icon,".png"),alt:""}))))},Y=a(45),B=a.n(Y),R=function(t){var e=t.favoritList,a=t.deleteFavoriteCityFromListFunction,n=t.getWeatherFromFavList;t.getWeatherFiveDays;return i.a.createElement("div",null,i.a.createElement("ul",{className:B.a.citylist},e.map(function(t){return i.a.createElement("li",{className:B.a.liStyle,key:t.id,onClick:n,"data-id":t.id},t.favoriteCityName," ",i.a.createElement("span",{"data-id":t.id,onClick:a,className:B.a.delete},"X")," ")})))},X=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={input:"",data:{},picturesCity:{},cityName:"",condition:"",pressure:"",temp:"",favoritList:JSON.parse(localStorage.getItem("favoritList"))||[],isLoaded:!0,modalStatus:!1,toggleStatus:!1,cityNameFromFavList:""},a.toggleStatusFunction=function(){a.setState(function(t){return{toggleStatus:!t.toggleStatus}})},a.favoriteCityListFunction=function(t){t.preventDefault();var e={id:I()(),favoriteCityName:a.state.input};a.setState(function(t){return{favoritList:Object(s.a)(t.favoritList).concat([e])}});var n=JSON.parse(localStorage.getItem("favoritList"))||[];n.push(e),localStorage.setItem("favoritList",JSON.stringify(n))},a.deleteFavoriteCityFromListFunction=function(t){var e=t.target.dataset.id;a.setState({favoritList:a.state.favoritList.filter(function(t){return t.id!==e})});var n=JSON.parse(localStorage.getItem("favoritList")).filter(function(t){return t.id!==e});localStorage.setItem("favoritList",JSON.stringify(n))},a.inputFunction=function(t){var e=t.target.value;a.setState({input:e})},a.timeFunction=function(){setInterval(function(){var t=O()().format("LLLL");a.setState({date:t})},1e3)},a.getWeatherFromFavList=function(t){var e=t.target.dataset.id,n=a.state.favoritList.filter(function(t){return t.id===e})[0].favoriteCityName,i=n;b.a.get("https://api.openweathermap.org/data/2.5/weather?APPID=8defc985a5e2c764076c53bf90c6c44e&units=metric&lang=ru&q=".concat(i||"Kiev")).then(function(t){a.setState(function(e){return{data:t.data,pressure:t.data.main.pressure,temp:t.data.main.temp,cityName:t.data.name,condition:t.data.weather[0].main,isLoaded:!1,cityNameFromFavList:n}})}).catch(function(t){console.log(t)}),b.a.get("https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=".concat(i||"Kiev")).then(function(t){a.setState({picturesCity:t.data.hits[Math.floor(Math.random()*t.data.hits.length)].largeImageURL})}).catch(function(t){console.log(t)})},a.getWeather=function(){var t=a.state.input;b.a.get("https://api.openweathermap.org/data/2.5/weather?APPID=8defc985a5e2c764076c53bf90c6c44e&units=metric&lang=ru&q=".concat(t||"Kiev")).then(function(t){a.setState(function(e){return{data:t.data,pressure:t.data.main.pressure,temp:t.data.main.temp,cityName:t.data.name,condition:t.data.weather[0].main,isLoaded:!1}})}).catch(function(t){console.log(t)})},a.fetchDataFunction=function(t){t.preventDefault(),a.getWeather(),a.getCity()},a.componentDidMount=function(){a.getWeather(),a.getCity(),a.timeFunction()},a.getCity=function(){var t=a.state.input;b.a.get("https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=".concat(t||"Kiev")).then(function(t){a.setState({picturesCity:t.data.hits[Math.floor(Math.random()*t.data.hits.length)].largeImageURL})}).catch(function(t){console.log(t)})},a}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state,e=t.picturesCity,a=t.data,n=t.pressure,r=t.temp,o=t.isLoaded,c=t.date,s=t.cityName,l=t.favoritList,u=t.toggleStatus,m=t.condition,d=t.nameCityState,p=t.cityNameFromFavList;t.input;return i.a.createElement("div",{className:v.a.wrapper},i.a.createElement("div",{className:v.a.main_img,style:{backgroundImage:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(".concat(e,")")}},i.a.createElement("button",{className:v.a.favorite__button,onClick:this.toggleStatusFunction},"Favorite list"),u?i.a.createElement(R,{favoritList:l,getWeatherFromFavList:this.getWeatherFromFavList,deleteFavoriteCityFromListFunction:this.deleteFavoriteCityFromListFunction}):null,o?i.a.createElement(g.a,{type:"Puff",color:"#00BFFF",height:"100",width:"100",className:v.a.puff}):i.a.createElement("div",{className:v.a.card_wrapper},i.a.createElement(D,{input:this.inputFunction,fetchData:this.fetchDataFunction,data:a,pressure:n,temp:r,date:c,city:s,condition:m,favoriteCityListFunction:this.favoriteCityListFunction}),i.a.createElement(w,null),i.a.createElement(y.a,null,i.a.createElement(_.a,{exact:!0,path:"/",render:function(){return i.a.createElement(U,{temp:r,pressure:n,cityName:s,condition:m,data:a})}}),i.a.createElement(_.a,{path:"/fivedays",render:function(){return i.a.createElement(K,{input:p,cityName:s,favoritList:l,nameCityState:d})}})))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(c.a,null,i.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},44:function(t,e,a){t.exports={nav:"_1Pudy",li:"_1q1xK"}},45:function(t,e,a){t.exports={citylist:"_10CZY",liStyle:"_3l0dX",imgList:"_2rHmO",imgContainer:"_18sbF",overlay:"_3m2JR",modal:"_1_Soe",delete:"_2RKC7"}},88:function(t,e,a){t.exports=a.p+"static/media/Harwen-Simple-Favorites.d3196385.ico"},92:function(t,e,a){t.exports={main:"_288j2"}},94:function(t,e,a){t.exports=a(292)},99:function(t,e,a){}},[[94,2,1]]]);
//# sourceMappingURL=main.1a20adab.chunk.js.map