import{d as l,u,o as e,f as s,a as n,w as _,j as p,i as g,b as f,e as r,c,F as h,g as m,h as y,K as B,a4 as k,a5 as w,a3 as x}from"./index-LOE-gbzf.js";const b={class:"blog"},A={key:0,class:"blog__content"},F=l({__name:"BlogList",setup(d){const{data:a,isFetching:i}=u({queryKey:["FetchArticles"],queryFn:()=>w()});return(V,t)=>(e(),s("div",b,[n(g,{tag:"h1"},{default:_(()=>t[0]||(t[0]=[p("Welcome to Our Blog!")])),_:1}),t[1]||(t[1]=f("p",{class:"blog__text"}," Here, you'll find interesting and insightful articles on a variety of topics. We share new ideas, research, and practical tips to inspire fresh discoveries and solutions. Enjoy reading, learn something new, and stay with us! ",-1)),r(a)?(e(),s("div",A,[r(i)?(e(),c(B,{key:0})):(e(!0),s(h,{key:1},m(r(a),o=>(e(),c(k,{key:o.id,data:o},null,8,["data"]))),128))])):y("",!0)]))}}),L={"aria-label":"Article list page"},C=l({__name:"ArticleListView",setup(d){return(a,i)=>(e(),s("section",L,[n(F),n(x)]))}});export{C as default};
