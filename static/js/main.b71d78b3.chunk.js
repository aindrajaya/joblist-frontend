(this["webpackJsonpjoblist-tailwindcss"]=this["webpackJsonpjoblist-tailwindcss"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var o=a(0),l=a.n(o),n=a(7),r=a.n(n),s=(a(13),a(1)),i=a(5),c=a(4),m=function(e){var t=e.job,a=t.company,o=t.logo,n=t.isNew,r=t.featured,i=t.position,c=t.role,m=t.level,u=t.postedAt,d=t.contract,g=t.location,p=t.languages,f=t.tools,v=e.handleTagClick,b=[c,m];return f&&b.push.apply(b,Object(s.a)(f)),p&&b.push.apply(b,Object(s.a)(p)),l.a.createElement("div",{className:"flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded \n        ".concat(r&&"border-l-4 border-teal-500 border-solid"," lg:flex-row lg:my-4")},l.a.createElement("div",null,l.a.createElement("img",{className:"-mt-16 mb-4 w-20 h-20 lg:mt-0 lg:mb-0 lg:h-24 lg:w-24",src:o,alt:a})),l.a.createElement("div",{className:"flex flex-col justify-between ml-4"},l.a.createElement("h3",{className:"font-bold text-teal-500"},a,n&&l.a.createElement("span",{className:"bg-teal-500 text-teal-100 font-bold py-1 px-2 m-2 rounded-full uppercase text-sm"},"New"),r&&l.a.createElement("span",{className:"bg-gray-800 text-white font-bold py-1 px-2 m-2 rounded-full uppercase text-sm"},"Featured")),l.a.createElement("h2",{className:"font-bold text-xl my-2"},i),l.a.createElement("p",{className:"text-gray-700"},u," \xb7 ",d," \xb7 ",g)),l.a.createElement("div",{className:"flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0"},b?b.map((function(e){return l.a.createElement("span",{onClick:function(){return v(e)},className:"text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 lg:mb-0 rounded cursos-pointer"},e)})):""))};console.log(c);var u=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)([]),u=Object(i.a)(r,2),d=u[0],g=u[1];Object(o.useEffect)((function(){return n(c)}),[]);var p=function(e){d.includes(e)||g([].concat(Object(s.a)(d),[e]))},f=a.filter((function(e){var t=e.role,a=e.level,o=e.tools,l=e.languages;if(0===d.length)return!0;var n=[t,a];return o&&n.push.apply(n,Object(s.a)(o)),l&&n.push.apply(n,Object(s.a)(l)),d.every((function(e){return n.includes(e)}))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"bg-teal-500 mb-12"},l.a.createElement("img",{className:"w-full",src:"/images/bg-header-desktop.svg",alt:"bg-image"})),l.a.createElement("div",{className:"container m-auto"},d.length>0&&l.a.createElement("div",{className:"flex bg-white shadow-md -my-16 mb-16 mx-10 p-6 rounded z-10 relative"},d.map((function(e){return l.a.createElement("span",{className:"mr-4 mb-4 p-2 rounded font-bold  lg:mb-0"},l.a.createElement("span",{className:"text-teal-500 bg-teal-100 p-2"},e),l.a.createElement("span",{onClick:function(){return t=e,void g(d.filter((function(e){return e!==t})));var t},className:"cursos-pointer bg-teal-500 text-teal-100 p-2"},"\u274c"))})),l.a.createElement("button",{onClick:function(){g([])},className:"font-bold text-gray-700 ml-auto"},"Clear")),0===a.length?l.a.createElement("p",null,"Jobs are fetching..."):f.map((function(e){return l.a.createElement(m,{job:e,key:e.id,handleTagClick:p})}))))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root"))},4:function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","isNew":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","isNew":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","isNew":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","isNew":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","isNew":false,"featured":false,"position":"Software Engineer","role":"FullStack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","isNew":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","isNew":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","isNew":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","isNew":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","isNew":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.b71d78b3.chunk.js.map