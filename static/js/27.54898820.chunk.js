"use strict";(self.webpackChunkaston_project=self.webpackChunkaston_project||[]).push([[27],{3027:(e,a,i)=>{i.r(a),i.d(a,{default:()=>g});i(5043);var s=i(3003),r=i(4607),t=i(1601),d=i(3216),o=i(9234),l=i(1678),n=i(2267);const c={wrapper:"favouriteMovieCard_wrapper__u4BOq",poster:"favouriteMovieCard_poster__ZcmLT",rightBlock:"favouriteMovieCard_rightBlock__r2+SQ",descriptions:"favouriteMovieCard_descriptions__--Cej",buttons:"favouriteMovieCard_buttons__NHesC",header:"favouriteMovieCard_header__oihif",name:"favouriteMovieCard_name__K0Ocv",value:"favouriteMovieCard_value__+m6sa",category:"favouriteMovieCard_category__PAEJ9",title:"favouriteMovieCard_title__+4Nbd",descriptionTitle:"favouriteMovieCard_descriptionTitle__narhn",descriptionText:"favouriteMovieCard_descriptionText__gwCPl",preloader:"favouriteMovieCard_preloader__gdljC",dark:"favouriteMovieCard_dark__F4Scl",light:"favouriteMovieCard_light__qpMKl"};var v=i(8139),u=i.n(v),h=i(1952),m=i(579);const _=e=>{let{id:a}=e;const{data:i}=o.l.useGetMovieQuery(a),{theme:s}=(0,h.D)(),r=(0,d.Zp)(),t=e=>{r("/movie/".concat(e))};return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:u()(c.wrapper,{[c.dark]:"dark"===s,[c.light]:"light"===s}),children:i?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:c.poster,children:(0,m.jsx)("img",{src:i.poster.url,alt:"poster",onClick:()=>t(a)})}),(0,m.jsxs)("div",{className:c.rightBlock,children:[(0,m.jsxs)("div",{className:c.descriptions,children:[(0,m.jsxs)("div",{className:c.header,children:[(0,m.jsx)("span",{className:c.title,children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: "}),(0,m.jsx)("span",{className:c.name,onClick:()=>t(a),children:i.name})]}),(0,m.jsxs)("div",{className:c.header,children:[(0,m.jsx)("span",{className:c.title,children:"\u0413\u043e\u0434:"}),(0,m.jsx)("span",{className:c.value,children:i.year})]}),(0,m.jsxs)("div",{className:c.header,children:[(0,m.jsx)("span",{className:c.title,children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u041a\u0438\u043d\u043e\u041f\u043e\u0438\u0441\u043a\u0430:"}),(0,m.jsx)("span",{className:c.value,children:i.rating.kp})]}),(0,m.jsxs)("div",{className:c.header,children:[(0,m.jsx)("span",{className:c.title,children:"\u0421\u0442\u0440\u0430\u043d\u0430:"}),(0,m.jsx)("span",{className:c.value,children:i.countries[0].name})]}),(0,m.jsxs)("div",{className:c.description,children:[(0,m.jsx)("span",{className:c.descriptionTitle,children:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"}),(0,m.jsx)("span",{className:c.descriptionText,children:i.shortDescription})]})]}),(0,m.jsx)("div",{className:c.buttons,children:(0,m.jsx)(n.o,{movieId:a,isFavourPage:!0})})]})]}):(0,m.jsx)("div",{className:c.preloader,children:(0,m.jsx)(l.A,{width:50})})})})},p="favourite_wrapper__mRsca",j="favourite_items__ypw5h";var x=i(7374);const g=()=>{const e=(0,s.d4)(r.kQ),{data:a=[],isLoading:i}=t.K.useGetAllFavouritesQuery(null===e||void 0===e?void 0:e.email);return(0,m.jsx)("div",{className:p,children:i?(0,m.jsx)(l.A,{width:45}):a.length>0?(0,m.jsx)("div",{className:j,children:a.map((e=>(0,m.jsx)(_,{id:e},e)))}):(0,m.jsx)(x.c,{title:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"})})}},2267:(e,a,i)=>{i.d(a,{o:()=>v});var s=i(5043),r=i(2339),t=i(3003),d=i(4607),o=i(1601);var l=i(8175),n=i(1678),c=i(579);const v=(0,s.memo)((e=>{let{movieId:a,isFavourPage:i=!1}=e;const{handleAddToFavourite:v,isFetching:u,handleRemoveFromFavourite:h,hasInFavourite:m}=(()=>{const e=(0,t.d4)(d.kQ),[a,i]=(0,s.useState)(!1),{data:l=[],isFetching:n}=o.K.useGetAllFavouritesQuery(null===e||void 0===e?void 0:e.email);(0,s.useEffect)((()=>{n||i(n)}),[n]);const[c,v]=o.K.useAddToFavouriteMutation(),[u,h]=o.K.useRemoveFromFavouriteMutation();return{hasInFavourite:e=>l.includes(e),isFetching:v.isLoading||h.isLoading||a,handleAddToFavourite:async a=>{try{i(!0),await c({email:null===e||void 0===e?void 0:e.email,id:a}),r.Ay.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")}catch(s){r.Ay.error("\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...")}},handleRemoveFromFavourite:async a=>{try{i(!0),await u({email:null===e||void 0===e?void 0:e.email,id:a}),r.Ay.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e")}catch(s){r.Ay.error("\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...")}}}})(),[_,p]=(0,s.useState)(m(a)),j=(0,t.d4)(d.NH),x=async e=>{j?(await h(e),p((e=>!e))):r.Ay.error("\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043d\u0430\u0434\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f")};return i?(0,c.jsx)(l.$,{variant:"red",onClick:()=>x(a),disabled:u,children:u?(0,c.jsx)(n.A,{width:15}):"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e"}):(0,c.jsx)(c.Fragment,{children:_&&j?(0,c.jsx)(l.$,{variant:"red",onClick:()=>x(a),disabled:u,children:u?(0,c.jsx)(n.A,{width:15}):"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e"}):(0,c.jsx)(l.$,{variant:"green",onClick:()=>(async e=>{j?(await v(e),p((e=>!e))):r.Ay.error("\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043d\u0430\u0434\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f")})(a),disabled:u,children:u?(0,c.jsx)(n.A,{width:15}):"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})})}))}}]);
//# sourceMappingURL=27.54898820.chunk.js.map