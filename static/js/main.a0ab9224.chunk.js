(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{29:function(e,t,a){},46:function(e,t,a){e.exports=a(93)},51:function(e,t,a){},52:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a.n(l),i=a(27),o=a.n(i),c=(a(29),a(51),a(5)),s=a(6),m=a(8),u=a(7),p=a(21),d=a(9),h=a(39),f=a.n(h),g=(a(52),a(11)),y=a(14),E=a(40),v=a(13),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={info:"none"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"pictoClick",value:function(e){this.state.info===e?this.setState({info:"none"}):this.setState({info:e})}},{key:"render",value:function(){var e,t,a,l,i,o,c;return this.props.dataGen&&this.props.sumup&&(e=this.props.dataGen.name,o=this.props.dataGen.photo,c=this.props.dataGen.downloadResume,t=this.props.dataGen.location,a=this.props.dataGen.social.map((function(e){return r.a.createElement("div",null,r.a.createElement("a",{href:e.url},r.a.createElement(v.a,{icon:["fab",e.name],style:n.picto,size:"2x"})))})),l=this.props.sumup.map((function(e){return r.a.createElement("p",null,e.status)})),i=this.props.sumup.map((function(e){return r.a.createElement("p",null,e.p)}))),r.a.createElement("div",null,r.a.createElement("div",{className:"header container-fluid",style:{marginTop:"12vh",display:"flex",backgroundColor:"#595959"}},r.a.createElement("div",{style:n.avatar2,className:""}),r.a.createElement(E.a,{style:n.avatar,src:o,alt:"LeMoi",roundedCircle:!0})),r.a.createElement(g.a,{style:{marginTop:"12vh"}},r.a.createElement(g.a,null,r.a.createElement(y.a,{style:{justifyContent:"center",flexWrap:"nowrap"}},a,r.a.createElement("a",{href:c,download:!0},r.a.createElement(v.a,{icon:["fas","download"],style:n.picto,size:"2x"}))),r.a.createElement("hr",null)),r.a.createElement(g.a,null,r.a.createElement(y.a,{className:"center"},r.a.createElement("div",{style:n.name},e)),r.a.createElement(y.a,{className:"center",style:n.blocSpace},r.a.createElement("img",{style:{maxHeight:32,maxWidth:32,alignSelf:"center"},src:"/logo/location.png",alt:"location"}),r.a.createElement("div",{style:n.location},t)),r.a.createElement(y.a,{className:"center"},r.a.createElement("div",{style:(n.blocSpace,n.status)},l),r.a.createElement("div",{style:{textAlign:"justify"}},i)))))}}]),t}(l.Component);n={avatar:{width:"32vh",height:"32vh",alignSelf:"center",position:"absolute"},avatar2:{width:"38vh",height:"38vh",margin:"-12vh",border:" 2px none",borderRadius:"50%",alignSelf:"center",backgroundColor:"#595959"},picto:{margin:"1em",cursor:"pointer"},name:{color:"#F2884B",fontSize:"64px",fontWeight:"bold"},location:{fontSize:"32px",fontWeight:"bold"},blocSpace:{marginBottom:"1em"},status:{color:"#F2884B",fontSize:"32px",marginBottom:"1ex"},link:{texDecoration:"none",textColor:"black"}};var j,k=a(22),x=(a(67),a(12)),O=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getWork",value:function(e){return r.a.createElement(k.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#C9C9C9",color:"#000000"},contentArrowStyle:{borderRight:"7px solid  #D0D0D0"},date:r.a.createElement("p",null,e.date),icon:r.a.createElement(v.a,{icon:"briefcase",size:"lg"}),iconStyle:{background:"#F2884B",color:"#fff"}},r.a.createElement("h3",null,e.role),r.a.createElement("h5",null,"@",e.employeur," (",e.lieu,")"),r.a.createElement("p",null,e.description))}},{key:"getEd",value:function(e){return r.a.createElement(k.VerticalTimelineElement,{className:"vertical-timeline-element--education",contentStyle:{background:"#F2F2F2",color:"#000000"},contentArrowStyle:{borderRight:"7px solid  #F2F2F2"},date:r.a.createElement("p",null,e.date),icon:r.a.createElement(v.a,{icon:x.c,size:"lg"}),iconStyle:{background:"#F2884B",color:"#fff"}},r.a.createElement("h3",null,e.diplome),r.a.createElement("h4",null,e.specialite),r.a.createElement("h5",null,"@",e.etablissement," (",e.lieu,")"),r.a.createElement("p",null,e.description))}},{key:"render",value:function(){var e,t,a=this;return this.props.data.fr&&this.props.data.en&&("fr"===this.props.lang?(t=this.props.data.fr.title,e=this.props.data.fr.edWork.map((function(e){return"ed"===e.type?a.getEd(e):a.getWork(e)}))):(t=this.props.data.en.title,e=this.props.data.en.edWork.map((function(e){return"ed"===e.type?a.getEd(e):a.getWork(e)})))),r.a.createElement("div",{className:"container-fluid",style:{backgroundColor:"#595959"}},r.a.createElement(g.a,{style:{paddingTop:"1em",marginTop:"2em"}},r.a.createElement("div",{className:"title",style:{color:"#ffff"}},t),r.a.createElement(k.VerticalTimeline,null,e)))}}]),t}(l.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{textAlign:"end",paddingRight:"1em"},className:"container-fluid"},r.a.createElement("img",{style:j.flag,src:"/logo/france.png",alt:"change lang to fr",onClick:function(){e.props.changeLang("fr")}}),r.a.createElement("img",{style:j.flag,src:"/logo/united-kingdom.png",alt:"change lang to en",onClick:function(){e.props.changeLang("en")}}))}}]),t}(l.Component);j={flag:{mawWidth:"32px",maxHeight:"32px",margin:"1em",cursor:"pointer"}};var w,S=C,D=a(43),N=a(42),F=a(23),B=a.n(F),L=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t,a,n,l=this;return this.props.data&&(t=this.props.data.technique.title,a=this.props.data.langues.title,e=this.props.data.technique.tab.map((function(e){return r.a.createElement(B.a,{flipOnHover:!0,flipOnClick:!1,flipDirection:"horizontal",ref:function(e){return l.fliper=e},style:{width:"16em",height:"16em",margin:"1em"}},r.a.createElement(F.FrontSide,{style:{backgroundColor:e.color,display:"flex",flexDirection:"column"}},r.a.createElement("img",{src:e.logo,alt:"Logo",style:w.logo}),r.a.createElement("p",{style:{color:e.textColor,fontFamily:"Comfortaa"}},e.name)),r.a.createElement(F.BackSide,{style:{backgroundColor:e.color,display:"flex",flexDirection:"column",alignContent:"space-around",justifyContent:"center"}},e.tools?e.tools.map((function(t){return r.a.createElement("p",{style:{color:e.textColor,fontFamily:"Comfortaa"}},t.name)})):r.a.createElement("div",null,r.a.createElement("img",{src:e.logo,alt:"Logo",style:w.logo}),r.a.createElement("p",{style:{color:e.textColor,fontFamily:"Comfortaa"}},e.name))))})),n=this.props.data.langues.tab.map((function(e){return r.a.createElement(y.a,{style:{margin:"1em",justifyContent:"space-evenly"}},r.a.createElement("div",{style:{width:"8em",textAlign:"left"}},e.langue),r.a.createElement(N.a,{now:e.niveau,label:e.titre,max:6,className:"prog",variant:"warning"}))}))),r.a.createElement(g.a,null,r.a.createElement("div",{className:"title",style:{color:"#F2884B"}},t),r.a.createElement(y.a,{style:{justifyContent:"space-evenly"}},e),r.a.createElement("div",{className:"title"},a),r.a.createElement(D.a,{style:{justifyContent:"center",paddingBottom:"1em"}},n))}}]),t}(l.Component);w={logo:{width:"128px",height:"128px",alignSelf:"center",margin:"2em",opacity:.7,filter:"alpha(opacity=50)"}};var W=a(24),z=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t;return this.props.data&&(e=this.props.data.titre,t=this.props.data.tab.map((function(e){return r.a.createElement(W.a.Item,null,r.a.createElement("div",{style:{height:"70vh"}},r.a.createElement("a",{href:e.lien},r.a.createElement("img",{className:"d-block w-100",src:e.photo,alt:"Image project",style:{paddingLeft:"24vw",paddingRight:"24vw",paddingTop:"8vh",opacity:"60%"}}))),r.a.createElement(W.a.Caption,null,r.a.createElement("div",{style:{fontSize:"32px",color:"#F2884B"}},e.name),r.a.createElement("div",{className:"flippyCard"},e.description)))}))),r.a.createElement("div",{className:"container-fluid",style:{backgroundColor:"#595959",display:"flex",flexDirection:"column",justifyContent:"space-between"}},r.a.createElement("div",{className:"title",style:{color:"#ffff"}},e),r.a.createElement(W.a,{style:{marginBottom:"2em"}},t))}}]),t}(l.Component),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={selected:"none"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){this.state.selected===e?this.setState({selected:"none"}):this.setState({selected:e}),console.log(e)}},{key:"render",value:function(){var e,t,a;return this.props.data&&(console.log(this.props.data),e=this.props.data.titre,t=this.props.data.description,a=this.props.data.image),r.a.createElement("div",{className:"container-fluid",style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"title",style:{color:"#F2884B"}},e),r.a.createElement(g.a,null,r.a.createElement("img",{src:a,alt:"activities",style:{height:"8vw",textAlign:"center"}}),r.a.createElement("p",{style:{textAlign:"center"}},t),r.a.createElement("a",{href:"https://pin.it/ap56wgxolj24xp"},r.a.createElement(v.a,{icon:["fab","pinterest"],style:{fontSize:"4vw",color:""}}))))}}]),t}(l.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("hr",{style:{marginTop:"2em"}}),r.a.createElement("div",{className:"container-fluid",style:{fontSize:"8px",display:"flex",justifyContent:"space-between",flexDirection:"row"}},r.a.createElement("p",null,"Alpha release 25/01/20")))}}]),t}(l.Component),G=a(44),R=a(18),H=a(45);R.b.add(H.a,x.e,x.b,x.d,x.c,x.a);var I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={resumeData:{},lang:"fr"},a.changeLang=a.changeLang.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getResumeData",value:function(){f.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e){console.log(e)}})}},{key:"componentDidMount",value:function(){this.getResumeData(),Object(G.loadReCaptcha)()}},{key:"changeLang",value:function(e){this.setState({lang:e})}},{key:"setDataLang",value:function(){return"fr"===this.state.lang?this.state.resumeData.fr:this.state.resumeData.en}},{key:"render",value:function(){var e=this.setDataLang();if(this.state.resumeData.en||this.state.resumeData.fr||this.state.resumeData.meGen)var t=e.skills,a=e.projets,n=e.autres,l=e.sumup,i=this.state.resumeData.meGen;return r.a.createElement("div",{className:"App"},r.a.createElement(S,{lang:this.state.lang,changeLang:this.changeLang}),r.a.createElement(b,{dataGen:i,sumup:l,lang:this.state.lang}),r.a.createElement(O,{data:this.state.resumeData,lang:this.state.lang}),r.a.createElement(L,{data:t}),r.a.createElement(z,{data:a}),r.a.createElement(T,{data:n}),r.a.createElement(A,null))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(91),a(92);o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.a0ab9224.chunk.js.map