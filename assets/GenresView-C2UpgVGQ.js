import{d as n,r as m,o as a,c as p,w as i,a as s,B as G,b as u,t as f,_ as o,u as g,e as d,f as r,F as h,g as k,h as y,i as B,j as b,P as C}from"./index-LOE-gbzf.js";import{f as V}from"./genresService-BTmxOYIo.js";const v={class:"cardGenres__name"},w=n({__name:"CardGenre",props:{data:{}},setup(l){return(e,t)=>{const _=m("router-link");return a(),p(_,{to:{name:"Games",query:{genres:e.data.id}},class:"cardGenres"},{default:i(()=>[s(G,{class:"cardGenres__img",src:e.data.img,alt:`Link to ${e.data.name}`,width:340,height:190},null,8,["src","alt"]),u("p",v,f(e.data.name),1)]),_:1},8,["to"])}}}),L=o(w,[["__scopeId","data-v-abd60469"]]),$={key:0,class:"genresList"},A=n({__name:"AllGenresList",setup(l){const{data:e}=g({queryKey:["getGenres"],queryFn:V});return(t,_)=>d(e)?(a(),r("ul",$,[(a(!0),r(h,null,k(d(e),c=>(a(),r("li",{key:c.id},[s(L,{data:c},null,8,["data"])]))),128))])):y("",!0)}}),I=o(A,[["__scopeId","data-v-84bbef0e"]]),N={"aria-label":"All genres page"},q={class:"allGenres"},x=n({__name:"GenresView",setup(l){return(e,t)=>(a(),r("section",N,[s(B,{tag:"h1",class:"allGenres-title"},{default:i(()=>t[0]||(t[0]=[b("All Genres")])),_:1}),u("div",q,[s(I,{class:"allGenres__genre"})]),s(C)]))}}),T=o(x,[["__scopeId","data-v-a961f20b"]]);export{T as default};
