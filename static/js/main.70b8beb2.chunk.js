(window.webpackJsonpunichord=window.webpackJsonpunichord||[]).push([[0],{18:function(e,t,r){e.exports=r(38)},23:function(e,t,r){},24:function(e,t,r){},25:function(e,t,r){},26:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){},29:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(11),c=r.n(o),i=(r(23),r(24),r(5)),s=r(3),l=(r(25),r(26),r(27),{A:"x|o|2|2|2|o",Am:"x|o|2|2|1|o",B:"x|b2|4|4|4|b2",C:"x|3|2|o|1|o",D:"x|x|o|2|3|2",Dm:"x|x|o|2|3|1",E:"o|2|2|1|o|o",Em:"o|2|2|o|o|o",F:"b1|3|3|2|b1|b1",G:"3|2|o|o|1|o"}),u=function(e){var t,r=["x","o","1","2","3","4","b1","b2","b3","b4","b5"],n=e.split("|");if(6!==n.length)throw new Error("Could not split input into six entries");return n.forEach(function(e){if(!r.includes(e))throw new Error("Invalid entry: ".concat(e));if("b"===e[0]&&(t=t||e[1])!==e[1])throw new Error("A chord can not include a bar on multiple strings")}),e},m=function(e,t){var r=e.split("|"),n={},a={};return r.forEach(function(e,t){a=d(e,t+1,a),n[t+1]=f(e)}),{name:t,strings:n,bar:a}},d=function(e,t,r){return"b"===e[0]&&(r.fretNum=r.fretNum||Number(e[1]),r.stringStart=r.stringStart||t,r.stringEnd=t),r},f=function(e){return"o"===e?{barred:!1,open:!0,muted:!1,note:null}:"x"===e?{barred:!1,open:!1,muted:!0,note:null}:"b"===e[0]?{barred:!0,open:!1,muted:!1,note:null}:{barred:!1,open:!1,muted:!1,note:{fretNum:Number(e)}}},h=function(e){var t={};return Object.keys(e.strings).forEach(function(r){var n=e.strings[Number(r)];n.note&&(t["".concat(r,",").concat(n.note.fretNum)]=n.note)}),t},E=function(e){var t={};return Object.entries(e.strings).forEach(function(r){var n=e.strings[Number(r[0])];n.open&&(t[Number(r[0])]="o"),n.muted&&(t[Number(r[0])]="x")}),t},b=(r(28),r(17)),v=(r(29),function(e){return a.a.createElement("div",{className:"ChartCell ".concat(e.orientation)},a.a.createElement("div",{className:"Contents"},e.children),a.a.createElement("div",{className:"String"}),a.a.createElement("div",{className:"Fret"}))}),g=function(e){var t,r=e.stringNum,n=(e.fretNum,e.bar),o=Object(b.a)(e,["stringNum","fretNum","bar"]);return t=r===n.stringStart?a.a.createElement("div",{className:"BarStart"}):r===n.stringEnd?a.a.createElement("div",{className:"BarEnd"}):r>n.stringStart&&r<n.stringEnd?a.a.createElement("div",{className:"BarSegment"}):null,a.a.createElement(v,o,t)},p=function(e){return a.a.createElement(v,e,a.a.createElement("div",{className:"Note"}))},N=function(e){return a.a.createElement(v,e)},w=(r(30),function(e){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",stroke:e.color,viewBox:"0 0 100 100"},a.a.createElement("path",{strokeWidth:"10",d:"M10 10L90 90"}),a.a.createElement("path",{strokeWidth:"10",d:"M90 10L10 90"}))}),C=function(e){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",stroke:e.color,viewBox:"0 0 100 100"},a.a.createElement("circle",{cx:"50",cy:"50",r:"40",strokeWidth:"10",fill:"none"}))},y=function(e){var t;switch(e.headerItem){case"x":t=a.a.createElement(w,{color:"white"});break;case"o":t=a.a.createElement(C,{color:"white"});break;default:t=null}return a.a.createElement("div",{className:"ChartHeadItem"},t)},x=function(e){return a.a.createElement("div",{className:"ChartHead"},a.a.createElement("div",{className:"TopFret"}),Object.entries(e.strings).map(function(t){return a.a.createElement(y,{key:t[0],headerItem:e.stringHeaders[Number(t[0])]})}))},S=function(e){return"tall"===e.orientation?"Chart tall":"Chart wide"};function O(e,t,r){return r.bar&&r.bar.fretNum===t?a.a.createElement(g,{key:"".concat(e,",").concat(t),orientation:r.orientation,bar:r.bar,stringNum:e,fretNum:t}):r.notes["".concat(e,",").concat(t)]?a.a.createElement(p,{key:"".concat(e,",").concat(t),orientation:r.orientation}):a.a.createElement(N,{key:"".concat(e,",").concat(t),orientation:r.orientation})}var k=function(e){return a.a.createElement("div",{className:S(e)},a.a.createElement("div",{className:"ChartHeadContainer"},a.a.createElement(x,{strings:e.strings,stringHeaders:e.stringDecorators})),a.a.createElement("div",{className:"ChartCellsContainer"},function(e){for(var t=[],r=1;r<=e.frets.length;r++){for(var n=[],o=1;o<=Object.keys(e.strings).length;o++)n.push(O(o,r,e));t.push(n)}return a.a.createElement("div",{className:"CellRows"},t.map(function(e,t){return a.a.createElement("div",{key:t,className:"CellRow"},e)}))}(e)))},j={1:{stringNumber:1,name:"E"},2:{stringNumber:2,name:"A"},3:{stringNumber:3,name:"D"},4:{stringNumber:4,name:"G"},5:{stringNumber:5,name:"B"},6:{stringNumber:6,name:"e"}},A=r(16),B=function(e){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 30",display:"block"},a.a.createElement("text",{fill:e.color,fontSize:"20",x:"0",y:"22"},e.children))},H=function(e){var t,r=function(e){if(!l[e])throw new Error("Unrecognized chord name: ".concat(e));var t=u(l[e]);return m(t,e)}(e.name);if(!r)throw new Error("undefined chord");return a.a.createElement("div",{className:"Chord"},a.a.createElement("div",{className:"ChordTitle"},a.a.createElement(B,{color:"white"},r.name)),a.a.createElement("div",{className:"ChordChart"},a.a.createElement(k,{bar:r.bar,notes:h(r),strings:j,stringDecorators:E(r),frets:(t=e.numFrets,Object(A.a)(new Array(t)).map(function(e,t){return{fretNumber:t+1}})),orientation:"tall"})))};H.defaultProps={numFrets:5};var P=H,R=function(e){var t="ChordBox scale-".concat(e.scale);return a.a.createElement("div",{className:t},e.children)},G=function(e){return a.a.createElement("div",{className:"ChordPresenter"},a.a.createElement(R,e,a.a.createElement(P,{name:e.chord})))};G.defaultProps={mode:"detailed",scale:"large"};var I=G,D=r(12),T=r(15);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var F=a.a.createContext({}),L=function(e){var t=Object(n.useReducer)(M,z),r=Object(T.a)(t,2),o=r[0],c=r[1];return a.a.createElement(F.Provider,{value:{state:o,dispatch:c}},e.children)},W=function(){var e=Object(n.useContext)(F),t=e.state,r=e.dispatch;return{getState:function(){return t},getVisibleChords:function(){return t.searchString.length<1?t.chords:t.chords.filter(function(e){return e.toLowerCase().indexOf(t.searchString.toLowerCase())>-1})},setSearchString:function(e){r({type:J.CHANGE_SEARCH_STRING,payload:e})}}},z={searchString:"",chords:Object.keys(l)},J={CHANGE_SEARCH_STRING:"CHANGE_SEARCH_STRING"},M=function(e,t){switch(t.type){case J.CHANGE_SEARCH_STRING:return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(r,!0).forEach(function(t){Object(D.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e,{searchString:t.payload});default:return e}},V=(r(31),function(e){return a.a.createElement("input",{type:"text",className:"TextInput",onChange:e.onChange,placeholder:e.placeholder})}),U=function(e){var t=W().setSearchString;return a.a.createElement(V,{onChange:function(e){return t(e.currentTarget.value)},placeholder:"Filter chords..."})},$=function(){var e=W().getVisibleChords;return a.a.createElement("div",{className:"ChordList"},e().map(function(e,t){return a.a.createElement(I,{key:t,chord:e,scale:"medium"})}))},q=function(e){return a.a.createElement(L,null,a.a.createElement("div",{className:"ChordBrowser"},a.a.createElement(U,null),a.a.createElement($,null)))};r(32);function K(){return a.a.createElement("h2",null,"Add Chord")}function Q(){return a.a.createElement("h2",null,"Songs")}var X=function(){return a.a.createElement(i.a,null,a.a.createElement(s.a,{exact:!0,from:"/",to:"/chords/"}),a.a.createElement("div",{className:"TopNav"},a.a.createElement(i.b,{activeClassName:"active",to:"/chords/"},"Chord Browser"),a.a.createElement(i.b,{activeClassName:"active",to:"/add/"},"Add Chord"),a.a.createElement(i.b,{activeClassName:"active",to:"/songs/"},"Songs")),a.a.createElement(s.b,{path:"/chords/",component:q}),a.a.createElement(s.b,{path:"/add/",component:K}),a.a.createElement(s.b,{path:"/songs/",component:Q}))},Y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App-body"},a.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.70b8beb2.chunk.js.map