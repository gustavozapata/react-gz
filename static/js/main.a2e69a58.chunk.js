(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAYAAAB12js8AAAB6klEQVR4nO3Vz4qNARjH8feMk6Yo6WSSYiVlp7GxkSays7Wws3cLli7DLUjZUNTUbFwAC/8mxooF2Uws5hzF8nsB563387mCX0/fembL/TdbR69fPBwm7sufrc/vPv3emfodLt28+mi+PHh/6+jZ4wcj2LNWX+c3ht0nHyZ8gf+On9j8vjGGIYyLKAhREKIgREGIghAFIQpCFIQoCFEQoiBEQYiCEAUhCkIUhCgIURCiIERBiIIQBSEKQhSEKAhREKIgREGIghAFIQpCFIQoCFEQoiBEQYiCEAUhCkIUhCgIURCiIERBiIIQBSEKQhSEKAhREKIgREGIghAFIQpCFIQoCFEQoiBEQYiCEAUhCmK+cXjq17Hl7clf5vDa9vDt/r0RLFmvH4vF3nz4uTw/e/Vxynf45+DOzvDy7MkRLFmvK2dOb3sfhCgIURCiIERBiIIQBSEKQhSEKAhREKIgREGIghAFIQpCFIQoCFEQoiBEQYiCEAUhCkIUhCgIURCiIERBiIIQBSEKQhSEKAhREKIgREGIghAFIQpCFIQoCFEQoiBEQYiCEAUhCkIUhCgIURCiIERBiIIQBSEKQhSEKAhREKIgREGIghAFIQpitlqthtXTvbtTP83+xXO7by8sro9gylpd3tx8/hcMVzBEawX1BQAAAABJRU5ErkJggg=="},25:function(e,t,a){e.exports=a(44)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),o=a(1),s=a(2),i=a(4),m=a(3),u=a(5),h=a(6),p=a(12),d=a(21),E=a.n(d);var g={position:"absolute",left:"40px",top:"30px",fontWeight:"bold",color:"var(--blue)"},b={width:"50px",position:"absolute",top:"30px",right:"30px",cursor:"pointer"},f={display:"inline-block",width:"60px",height:"15px",backgroundColor:"var(--navy)",marginLeft:"170px"},y=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"login-container",style:g},l.a.createElement(h.b,{to:"/react-gz/login"},l.a.createElement("p",null,"Login"))),l.a.createElement("div",{style:{margin:"20px auto",textAlign:"center"}},l.a.createElement("h1",{className:"title"},"REACT.GZ"),l.a.createElement(h.b,{to:"/react-gz/learning"},l.a.createElement("span",{style:f,className:"gz-line"}))),l.a.createElement(h.b,{to:"/react-gz"},l.a.createElement("img",{src:E.a,alt:"Home icon",style:b})),l.a.createElement("div",{className:"lines"},l.a.createElement("span",null),l.a.createElement("span",null)))},v={color:"var(--purple)",textAlign:"center"},C=function(){return l.a.createElement("div",{style:{marginBottom:"20px"}},l.a.createElement("span",{style:{width:"65%",height:"20px",display:"block",margin:"10px auto",backgroundColor:"var(--orange)"}}),l.a.createElement("h3",{style:v},l.a.createElement("a",{href:"https://gustavozapata.me",target:"_blank",rel:"noopener noreferrer"},"GZ")," ","Copyright \xa9 2019"))},O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"todo-preview"},l.a.createElement("h1",null,"TO-DO"),l.a.createElement("div",{className:"todo-preview-container"},l.a.createElement("div",{className:"lista"},l.a.createElement("ul",null,l.a.createElement("li",null,"revise for DB"),l.a.createElement("li",null,"do the shopping"),l.a.createElement("li",null,"call 07879334492"),l.a.createElement("li",null,"make the login system")))),l.a.createElement(h.b,{to:"/react-gz/todo"},l.a.createElement("button",null,"GO")))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).dropFileStyles=function(){return{height:"300px",width:"90%",margin:"20px auto",display:"flex",alignItems:"center",border:"3px dashed var(--blue)"}},a.state={message:"Drop your files here"},a.dragStyles=function(e){e.preventDefault(),e.target.style.border="3px dashed red",e.target.firstChild.style.color="red",a.setState({message:"You can let go!"})},a.leaveStyles=function(e){e.target.style.border="3px dashed var(--blue)",e.target.firstChild.style.color="var(--blue)",a.setState({message:"Drop your files here"})},a.dropHandler=function(e){e.preventDefault(),e.target.style.border="3px solid var(--yellow)",e.target.firstChild.style.color="var(--yellow)",a.setState({message:"".concat(e.dataTransfer.items[0].getAsFile().name," was successfully dropped")})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"the-cloud"},l.a.createElement("h1",null,"THE CLOUD"),l.a.createElement("div",{className:"drop-area",style:this.dropFileStyles(),onDragOver:this.dragStyles,onDragLeave:this.leaveStyles,onDrop:this.dropHandler},l.a.createElement("h4",{style:{textAlign:"center",fontStyle:"italic",color:"var(--blue)",pointerEvents:"none"}},this.state.message)),l.a.createElement("p",null,"Max. file size: 200Mb"))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={windows:!1,macos:!1,linux:!1,submited:!1,options:["windows","macos","linux"],option:""},a.optionSelect=function(e){switch(a.setState({sel:!0,option:e.target.id}),e.target.id){case"windows":a.setState({windows:!0,linux:!1,macos:!1});break;case"macos":a.setState({windows:!1,linux:!1,macos:!0});break;case"linux":a.setState({windows:!1,linux:!0,macos:!1});break;default:a.setState({windows:!1,linux:!1,macos:!1})}},a.updateDB=function(){},a.submitPoll=function(){a.state.sel&&(a.setState({submited:!0,windows:!1,macos:!1,linux:!1}),a.updateDB())},a.resubmit=function(){a.setState({submited:!1,sel:!a.state.sel})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"poll"},l.a.createElement("h1",null,"POLL"),this.state.submited?l.a.createElement("div",{style:{textAlign:"center",marginTop:"20px"}},l.a.createElement("h4",null,"Thanks for voting!"),l.a.createElement("br",null),l.a.createElement("h5",null,"You voted for ",l.a.createElement("u",null,this.state.option)),l.a.createElement("br",null),l.a.createElement("h5",null,"voters: 21,954"),l.a.createElement("h5",{style:{color:"white",textDecoration:"underline",marginTop:"40px",cursor:"pointer"},onClick:this.resubmit},"Vote again")):l.a.createElement("div",null,l.a.createElement("p",null,"What operating system do you use for development purposes?"),l.a.createElement("div",{style:{margin:"10px auto",textAlign:"center"}},l.a.createElement("span",null,l.a.createElement("button",{className:this.state.windows?"select":null,id:"windows",onClick:this.optionSelect},"Windows"),l.a.createElement("button",{className:this.state.macos?"select":null,id:"macos",onClick:this.optionSelect},"macOS")),l.a.createElement("span",null,l.a.createElement("button",{className:this.state.linux?"select":null,id:"linux",onClick:this.optionSelect},"Linux"))),l.a.createElement("button",{onClick:this.submitPoll,id:"pollSubmit"},"Submit")," "))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"quiz"},l.a.createElement("h1",null,"EL PEQUE\xd1O QUIZ"),l.a.createElement("div",{className:"elQuiz"},l.a.createElement("h3",null,"Test your Programming IQ by taking this Quiz"),l.a.createElement("button",null,"Start")))}}]),t}(n.Component),w=function(){return l.a.createElement("div",{className:"comment-text"},l.a.createElement("h1",{style:{color:"var(--purple)"}},"COMMENTS"),l.a.createElement("textarea",null),l.a.createElement("button",null,"Comment"))},I=(a(38),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={hidden:!0,contrasena:""},a.showPassword=function(){a.setState({hidden:!a.state.hidden})},a.handleChange=function(e){a.setState({contrasena:e.target.value})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"login"},l.a.createElement("h1",null,"LOGIN"),l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("br",null),l.a.createElement("input",{type:"email",id:"email"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("br",null),l.a.createElement("input",{type:this.state.hidden?"password":"text",id:"password",value:this.state.contrasena,onChange:this.handleChange}),l.a.createElement("span",{role:"img","aria-label":"Show Password",onClick:this.showPassword},"\ud83d\udc40"),l.a.createElement("button",{type:"submit"},"Login")),l.a.createElement("p",null,"Don't have an account? ",l.a.createElement(h.b,{to:"/react-gz/signup"},"Sign-up")))}}]),t}(n.Component)),A=(a(39),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={contrasena:"",hidden:!0},a.showPassword=function(){a.setState({hidden:!a.state.hidden})},a.handleChange=function(e){a.setState({contrasena:e.target.value})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"signup"},l.a.createElement("h1",null,"SIGNUP"),l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("br",null),l.a.createElement("input",{type:"email",id:"email"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("br",null),l.a.createElement("input",{type:this.state.hidden?"password":"text",id:"password",value:this.state.contrasena,onChange:this.handleChange}),l.a.createElement("span",{role:"img","aria-label":"Show Password",onClick:this.showPassword},"\ud83d\udc40"),l.a.createElement("button",{type:"submit"},"Signup")),l.a.createElement("p",null,"Already have an account? ",l.a.createElement(h.b,{to:"/react-gz/login"},"Login")))}}]),t}(n.Component)),S=a(14),N=a(8),R=a.n(N),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).getStyle=function(){return{textDecoration:a.props.task.completed?"line-through":"none"}},a.showDelete=function(){return{visibility:a.props.task.completed?"visible":"hidden"}},a.editTask=function(e,t){Object(S.a)(document.getElementsByClassName("elcheckbox")).forEach(function(e){e.checked=!1}),a.props.toggleComplete(e,t)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.task,t=e.id,a=e.task;return l.a.createElement("div",{className:"todoItem",style:this.getStyle()},l.a.createElement("input",{className:"elcheckbox",type:"checkbox",onChange:this.props.toggleComplete.bind(this,t)})," ",l.a.createElement("input",{autoFocus:!0,style:this.getStyle(),className:"input-task",value:a,onChange:this.props.typeTask.bind(this,t),onFocus:this.props.task.completed?this.editTask.bind(this,t):null}),l.a.createElement("button",{onClick:this.props.deleteItem.bind(this,t),style:this.showDelete()},"delete"))}}]),t}(n.Component);F.protoTypes={tasks:R.a.object.isRequired,deleteItem:R.a.func.isRequired,typeTask:R.a.func.isRequired,toggleComplete:R.a.func.isRequired};var Q=F,T=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.tasks.map(function(t){return l.a.createElement(Q,{key:t.id,task:t,deleteItem:e.props.deleteItem,toggleComplete:e.props.toggleComplete,typeTask:e.props.typeTask})})}}]),t}(n.Component);T.protoTypes={tasks:R.a.array.isRequired,deleteItem:R.a.func.isRequired,typeTask:R.a.func.isRequired,toggleComplete:R.a.func.isRequired};var P=T,z=(a(40),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={status:"Nothing to do, it's time to relax!",tasks:[]},a.tasksEmpty=function(){return{display:a.state.tasks.length<1?"block":"none"}},a.toggleComplete=function(e){a.setState({tasks:a.state.tasks.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},a.deleteItem=function(e){a.setState({tasks:Object(S.a)(a.state.tasks.filter(function(t){return t.id!==e}))})},a.addItem=function(){a.setState({tasks:[].concat(Object(S.a)(a.state.tasks),[{id:a.state.tasks.length+1,task:"",completed:!1}])})},a.typeTask=function(e,t){a.setState({tasks:Object(S.a)(a.state.tasks.map(function(a){return a.id===e&&(a.task=t.target.value),a}))})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"todo"},l.a.createElement("h1",null,"TO-DO"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"todo-header"},l.a.createElement("h4",{onClick:this.addItem},"+New Task")),l.a.createElement("div",{className:"todo-body"},l.a.createElement("h3",{style:this.tasksEmpty()},this.state.status),l.a.createElement(P,{tasks:this.state.tasks,deleteItem:this.deleteItem,toggleComplete:this.toggleComplete,typeTask:this.typeTask}))))}}]),t}(n.Component)),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{border:"2px solid red",margin:"10px 0 20px 20px",padding:"10px"}},l.a.createElement("h3",null,"I'm a Grandchild component"),l.a.createElement("p",null,"I can access Parent's state like so:"),l.a.createElement("h5",null,"{this.props.alias}"," ",l.a.createElement("span",{style:{color:"var(--pink)"}},this.props.alias)))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{border:"2px solid blue",margin:"10px 0 20px 20px",padding:"10px"}},l.a.createElement("h2",null,"I'm Child component"),l.a.createElement("br",null),l.a.createElement("h3",null,"<Grandchild alias={this.props.alias} />"),l.a.createElement(B,{alias:this.props.alias})))}}]),t}(n.Component),D=(a(41),l.a.createContext()),K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={nombre:"Tavo",age:30,male:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(D.Provider,{value:{state:this.state,growYearOlder:function(){return e.setState({age:e.state.age+1})}}},l.a.createElement("h1",null,"MyProvider"),l.a.createElement("br",null),l.a.createElement("h3",null,"state = {"),l.a.createElement("h3",{className:"indent"},"nombre: Tavo"),l.a.createElement("h3",{className:"indent"},"age: 30"),l.a.createElement("h3",{className:"indent"},"male: true"),l.a.createElement("h2",null,"}"),l.a.createElement("br",null),l.a.createElement("h2",null,"<MyContext.Provider value={{state: this.state, growYearOlder() => age+1}}>"),l.a.createElement("br",null),this.props.children,l.a.createElement("h2",null,"</MyContext.Provider>"))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{border:"2px solid red",margin:"10px 0 20px 20px",padding:"10px"}},l.a.createElement(D.Consumer,null,function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Context Grandchild"),l.a.createElement("br",null),l.a.createElement("h4",null,l.a.createElement("i",null,"import { MyContext }")),l.a.createElement("br",null),l.a.createElement("h3",null,"<MyContext.Consumer>"),l.a.createElement("br",null),l.a.createElement("div",{className:"indent"},l.a.createElement("p",null,"I can access Context Parent state like so:"),l.a.createElement("h4",null,"{(context) => ("),l.a.createElement("h5",{className:"indent"},"context.state.age: ",e.state.age),l.a.createElement("h5",{className:"indent"},"context.state.name: ",e.state.nombre),l.a.createElement("button",{className:"indent",style:{fontSize:".7em",padding:"2px 6px",border:"1px solid var(--pink)"},onClick:e.growYearOlder},"onClick={context.growYearOlder}"),l.a.createElement("h4",null,"})")),l.a.createElement("br",null),l.a.createElement("h3",null,"</MyContext.Consumer>"))}))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{border:"2px solid orange",margin:"10px 0 20px 20px",padding:"10px"}},l.a.createElement("h2",null,"Context Child"),l.a.createElement("br",null),l.a.createElement("h3",null,"<ContextGrandchild />"),l.a.createElement(L,null)))}}]),t}(n.Component),M=(a(42),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(K,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"contextparent"},l.a.createElement("h1",null,"Context Parent"),l.a.createElement("br",null),l.a.createElement("h4",null,l.a.createElement("i",null,"import MyProvider")),l.a.createElement("br",null),l.a.createElement("h3",null,"<MyProvider>"),l.a.createElement("br",null),l.a.createElement("h3",{className:"indent"},"<Child />"),l.a.createElement(G,null),l.a.createElement("h3",{className:"indent"},"<Child />"),l.a.createElement(G,null),l.a.createElement("h3",null,"</MyProvider>")),l.a.createElement(h.b,{to:"/react-gz/learning"},l.a.createElement("p",{style:{textAlign:"center",margin:"25px auto",fontWeight:"bold"}},"React State & Props"))))}}]),t}(n.Component)),Y=a(24),H=function(e){return{color:e?"var(--navy)":"black"}},q=function(){var e=Object(n.useState)(!1),t=Object(Y.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement("h2",{style:H(a)},"React Hooks"),l.a.createElement("br",null),l.a.createElement("p",null,"React Hooks allows us to use state in a functional components (in other words, without using a class)"),l.a.createElement("br",null),l.a.createElement("code",null,"const [toggle, setToggle] = useState(false); ",l.a.createElement("br",null),"<input onChange={e => setToggle(!toggle)} checked={toggle} />"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{onChange:function(e){return r(!a)},type:"checkbox",checked:a}),l.a.createElement("span",null," ".concat(JSON.stringify(a)))))},W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={nombre:"Tavo",age:30,male:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,null,l.a.createElement(p.a,{exact:!0,path:"/react-gz/learning",render:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"parent"},l.a.createElement("h1",null,"I'm Parent component"),l.a.createElement("h3",null,"state = {"),l.a.createElement("h3",{className:"indent"},"nombre: ",l.a.createElement("span",{style:{color:"var(--pink)"}},"Tavo")),l.a.createElement("h3",{className:"indent"},"age: 30"),l.a.createElement("h3",{className:"indent"},"male: true"),l.a.createElement("h2",null,"}"),l.a.createElement("br",null),l.a.createElement("h3",null,"<Child alias={this.state.nombre} />"),l.a.createElement(U,{alias:e.state.nombre}),l.a.createElement("h3",null,"<Child alias={this.state.nombre} />"),l.a.createElement(U,{alias:e.state.nombre})),l.a.createElement(h.b,{to:"/react-gz/contextapi"},l.a.createElement("p",{style:{textAlign:"center",margin:"25px auto",fontWeight:"bold"}},"Context API Redux-like")),l.a.createElement(h.b,{to:"/react-gz/hooks"},l.a.createElement("p",{style:{textAlign:"center",margin:"25px auto",fontWeight:"bold"}},"React Hooks")),l.a.createElement(h.b,{to:"/react-gz/cyclehooks"},l.a.createElement("p",{style:{textAlign:"center",margin:"25px auto",fontWeight:"bold"}},"Life Cycle Hooks")))}}),l.a.createElement(p.a,{path:"/react-gz/contextapi",component:M}),l.a.createElement(p.a,{path:"/react-gz/hooks",component:q}))}}]),t}(n.Component),V=(a(43),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(y,null),l.a.createElement(p.a,{exact:!0,path:"/react-gz",render:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"section-main"},l.a.createElement(O,null),l.a.createElement(x,null),l.a.createElement(k,null)),l.a.createElement("section",{className:"section2"},l.a.createElement(j,null)),l.a.createElement("section",{className:"section-comments"},l.a.createElement(w,null)))}}),l.a.createElement(p.a,{path:"/react-gz/login",component:I}),l.a.createElement(p.a,{path:"/react-gz/signup",component:A}),l.a.createElement(p.a,{path:"/react-gz/todo",component:z}),l.a.createElement(p.a,{path:"/react-gz/learning",component:W}),l.a.createElement(C,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.a2e69a58.chunk.js.map