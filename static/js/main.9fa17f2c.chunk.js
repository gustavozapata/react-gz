(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAYAAAB12js8AAAB6klEQVR4nO3Vz4qNARjH8feMk6Yo6WSSYiVlp7GxkSays7Wws3cLli7DLUjZUNTUbFwAC/8mxooF2Uws5hzF8nsB563387mCX0/fembL/TdbR69fPBwm7sufrc/vPv3emfodLt28+mi+PHh/6+jZ4wcj2LNWX+c3ht0nHyZ8gf+On9j8vjGGIYyLKAhREKIgREGIghAFIQpCFIQoCFEQoiBEQYiCEAUhCkIUhCgIURCiIERBiIIQBSEKQhSEKAhREKIgREGIghAFIQpCFIQoCFEQoiBEQYiCEAUhCkIUhCgIURCiIERBiIIQBSEKQhSEKAhREKIgREGIghAFIQpCFIQoCFEQoiBEQYiCEAUhCmK+cXjq17Hl7clf5vDa9vDt/r0RLFmvH4vF3nz4uTw/e/Vxynf45+DOzvDy7MkRLFmvK2dOb3sfhCgIURCiIERBiIIQBSEKQhSEKAhREKIgREGIghAFIQpCFIQoCFEQoiBEQYiCEAUhCkIUhCgIURCiIERBiIIQBSEKQhSEKAhREKIgREGIghAFIQpCFIQoCFEQoiBEQYiCEAUhCkIUhCgIURCiIERBiIIQBSEKQhSEKAhREKIgREGIghAFIQpitlqthtXTvbtTP83+xXO7by8sro9gylpd3tx8/hcMVzBEawX1BQAAAABJRU5ErkJggg=="},24:function(e,t,a){e.exports=a(39)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),s=a.n(l),o=a(2),c=a(3),i=a(5),u=a(4),m=a(6),p=a(12),h=a(11),d=a(21),E=a.n(d);var g={width:"50px",position:"absolute",top:"30px",right:"30px",cursor:"pointer"},y={display:"inline-block",width:"60px",height:"15px",backgroundColor:"var(--navy)",marginLeft:"170px"},b=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{margin:"20px auto",textAlign:"center"}},r.a.createElement("h1",{className:"title"},"REACT.GZ"),r.a.createElement("span",{style:y,className:"gz-line"})),r.a.createElement(p.b,{to:"/react-gz"},r.a.createElement("img",{src:E.a,alt:"Home icon",style:g})),r.a.createElement("div",{className:"lines"},r.a.createElement("span",null),r.a.createElement("span",null)))},f={color:"var(--purple)",textAlign:"center"},v=function(){return r.a.createElement("div",{style:{marginBottom:"20px"}},r.a.createElement("span",{style:{width:"65%",height:"20px",display:"block",margin:"10px auto",backgroundColor:"var(--orange)"}}),r.a.createElement("h3",{style:f},r.a.createElement("a",{href:"https://gustavozapata.me",target:"_blank",rel:"noopener noreferrer"},"GZ")," ","Copyright \xa9 2019"))},I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"todo-preview"},r.a.createElement("h1",null,"TO-DO"),r.a.createElement("div",{className:"todo-preview-container"},r.a.createElement("h4",null,"All done here!")),r.a.createElement(p.b,{to:"/react-gz/todo"},r.a.createElement("button",null,"GO")))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).dropFileStyles=function(){return{height:"300px",width:"90%",margin:"20px auto",display:"flex",alignItems:"center",border:"3px dashed var(--blue)"}},a.state={message:"Drop your files here"},a.dragStyles=function(e){e.preventDefault(),e.target.style.border="3px dashed red",e.target.firstChild.style.color="red",a.setState({message:"You can let go!"})},a.leaveStyles=function(e){e.target.style.border="3px dashed var(--blue)",e.target.firstChild.style.color="var(--blue)",a.setState({message:"Drop your files here"})},a.dropHandler=function(e){e.preventDefault(),e.target.style.border="3px solid var(--yellow)",e.target.firstChild.style.color="var(--yellow)",a.setState({message:"".concat(e.dataTransfer.items[0].getAsFile().name," was successfully dropped")})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"files-tool"},r.a.createElement("h1",null,"FILES TOOL"),r.a.createElement("div",{className:"drop-area",style:this.dropFileStyles(),onDragOver:this.dragStyles,onDragLeave:this.leaveStyles,onDrop:this.dropHandler},r.a.createElement("h4",{style:{textAlign:"center",fontStyle:"italic",color:"var(--blue)",pointerEvents:"none"}},this.state.message)))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"poll"},r.a.createElement("h1",null,"POLL"),r.a.createElement("p",null,"Which technology you're using the most in 2019?"),r.a.createElement("div",{style:{margin:"10px auto",textAlign:"center"}},r.a.createElement("span",null,r.a.createElement("button",null,"React"),r.a.createElement("button",null,"Java")),r.a.createElement("span",null,r.a.createElement("button",null,"Python"),r.a.createElement("button",null,"Vue"))),r.a.createElement("button",{id:"pollSubmit"},"Submit"))}}]),t}(n.Component),O=a(14),A=a(7),j=a.n(A),R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getStyle=function(){return{textDecoration:a.props.task.completed?"line-through":"none"}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.task,t=e.id,a=e.task;return r.a.createElement("div",{className:"todoItem",style:this.getStyle()},r.a.createElement("input",{type:"checkbox",onChange:this.props.toggleComplete.bind(this,t)})," ",r.a.createElement("input",{autoFocus:!0,style:this.getStyle(),className:"input-task",value:a,onChange:this.props.typeTask.bind(this,t)}),r.a.createElement("button",{onClick:this.props.deleteItem.bind(this,t)},"delete"),r.a.createElement("button",{onClick:this.props.editItem.bind(this,t)},"edit"))}}]),t}(n.Component);R.protoTypes={tasks:j.a.object.isRequired,deleteItem:j.a.func.isRequired,editItem:j.a.func.isRequired,typeTask:j.a.func.isRequired,toggleComplete:j.a.func.isRequired};var Q=R,S=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.props.tasks.map(function(t){return r.a.createElement(Q,{key:t.id,task:t,editItem:e.props.editItem,deleteItem:e.props.deleteItem,toggleComplete:e.props.toggleComplete,typeTask:e.props.typeTask})})}}]),t}(n.Component);S.protoTypes={tasks:j.a.array.isRequired,deleteItem:j.a.func.isRequired,editItem:j.a.func.isRequired,typeTask:j.a.func.isRequired,toggleComplete:j.a.func.isRequired};var w=S,x=(a(37),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={status:"Nothing to do, it's time to relax!",tasks:[]},a.tasksEmpty=function(){return{display:a.state.tasks.length<1?"block":"none"}},a.toggleComplete=function(e){a.setState({tasks:a.state.tasks.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},a.editItem=function(e){a.setState({tasks:a.state.tasks.map(function(t){return t.id===e&&console.log(e),t})})},a.deleteItem=function(e){a.setState({tasks:Object(O.a)(a.state.tasks.filter(function(t){return t.id!==e}))})},a.addItem=function(){a.setState({tasks:[].concat(Object(O.a)(a.state.tasks),[{id:a.state.tasks.length+1,task:"",completed:!1}])})},a.typeTask=function(e,t){a.setState({tasks:Object(O.a)(a.state.tasks.map(function(a){return a.id===e&&(a.task=t.target.value),a}))})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"todo"},r.a.createElement("h1",null,"TO-DO"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"todo-header"},r.a.createElement("h4",{onClick:this.addItem},"+New Task")),r.a.createElement("div",{className:"todo-body"},r.a.createElement("h3",{style:this.tasksEmpty()},this.state.status),r.a.createElement(w,{tasks:this.state.tasks,editItem:this.editItem,deleteItem:this.deleteItem,toggleComplete:this.toggleComplete,typeTask:this.typeTask}))))}}]),t}(n.Component)),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"quiz"},r.a.createElement("h1",null,"EL PEQUE\xd1O QUIZ"),r.a.createElement("div",{className:"elQuiz"},r.a.createElement("h3",null,"Test your Programming IQ by taking this Quiz"),r.a.createElement("button",null,"Start")))}}]),t}(n.Component),N=function(){return r.a.createElement("div",{className:"comment-text"},r.a.createElement("h1",{style:{color:"var(--purple)"}},"COMMENTS"),r.a.createElement("textarea",null),r.a.createElement("button",null,"Comment"))},B=(a(38),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(b,null),r.a.createElement(h.a,{exact:!0,path:"/react-gz",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section-main"},r.a.createElement(I,null),r.a.createElement(C,null),r.a.createElement(k,null)),r.a.createElement("section",{className:"section2"},r.a.createElement(F,null)),r.a.createElement("section",{className:"section-comments"},r.a.createElement(N,null)))}}),r.a.createElement(h.a,{path:"/react-gz/todo",component:x}),r.a.createElement(v,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.9fa17f2c.chunk.js.map