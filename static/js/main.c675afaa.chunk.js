(this.webpackJsonpempdir=this.webpackJsonpempdir||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),s=(a(22),a(12)),o=a(13),u=a(16),i=a(15),m=(a(23),a(14)),d=a.n(m),h=function(){return d.a.get("https://randomuser.me/api/?results=200")};a(41);var f=function(e){return r.a.createElement("form",{className:"m-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{onChange:e.handleChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for An Employee",id:"search"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-dark"},"Search"))))};a(42);var p=function(e){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"First Name"),r.a.createElement("th",{scope:"col"},"Last Last"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Phone"),r.a.createElement("th",{scope:"col"},"City"),r.a.createElement("th",{scope:"col"},"Country"))),r.a.createElement("tbody",null,e.users?e.users.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.location.city),r.a.createElement("td",null,e.location.country))})):r.a.createElement("p",null,"No repo available!"))))},E=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={allUsers:[],filteredResults:[],sortBy:"",searchTerm:""},e.handleChange=function(t){var a=t.target.value,n=e.state.allUsers.filter((function(e){return e.name.first.indexOf(a)>=0||e.name.last.indexOf(a)>=0||e.email.indexOf(a)>=0||e.phone.indexOf(a)>=0||e.location.city.indexOf(a)>=0||e.location.country.indexOf(a)>=0}));e.setState({filteredResults:n})},e.handleFormSubmit=function(t){var a=t.target.value,n=e.state.allUsers.filter((function(e){return e.name.first.indexOf(a)>=0}));e.setState({filteredResults:n})},e.handleSort=function(t){t.preventDefault(),e.setState({sortBy:t.target.value})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;h().then((function(t){e.setState({allUsers:t.data.results,filteredResults:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{handleChange:this.handleChange,searchTerm:this.state.searchTerm,handleSort:this.handleSort,handleFormSubmit:this.handleFormSubmit}),r.a.createElement(p,{users:this.state.filteredResults}))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c675afaa.chunk.js.map