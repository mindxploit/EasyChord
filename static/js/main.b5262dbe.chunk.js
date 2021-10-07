(this["webpackJsonpeasy-chord"]=this["webpackJsonpeasy-chord"]||[]).push([[0],{114:function(e,n,t){},115:function(e,n,t){"use strict";t.r(n);var a,r,o,i,l,c,s,u,d,m,f,p=t(0),h=t.n(p),b=t(10),g=t.n(b),E=t(14),v=t(56),y=t(15),x=function(){var e=y.a.div(a||(a=Object(E.a)(["\n    margin: 0 2em;\n    @media (max-width: 480px) {\n      display: none;\n    }\n  "])));return h.a.createElement(e,null,h.a.createElement(v.a,{align:"center",variant:"h1"},"Welcome, let\u2019s pick a key and start playing!"))},j=t(77),C=t(153),A=t(154),F=t(6),O=t(148),w=t(149),B=t(118),k=t(30),D=Object(p.createContext)("F_sharp"),G=Object(p.createContext)("minor"),S=Object(p.createContext)(),I=function(e){var n=e.children,t=Object(p.useState)("F_sharp"),a=Object(F.a)(t,2),r=a[0],o=a[1],i=Object(p.useState)("minor"),l=Object(F.a)(i,2),c=l[0],s=l[1],u=Object(p.useState)(),d=Object(F.a)(u,2),m=d[0],f=d[1];return h.a.createElement(D.Provider,{value:[r,o]},h.a.createElement(G.Provider,{value:[c,s]},h.a.createElement(S.Provider,{value:[m,f]},n)))},T=t(147),M=[{note:"C",value:"C"},{note:"C#/Db",value:"C#"},{note:"D",value:"D"},{note:"D#/Eb",value:"Eb"},{note:"E",value:"E"},{note:"F",value:"F"},{note:"F#/Gb",value:"F#"},{note:"G",value:"G"},{note:"G#/Ab",value:"Ab"},{note:"A",value:"A"},{note:"A#/Bb",value:"Bb"},{note:"B",value:"B"}],_={major:{C:["C","D","E","F","G","A","B"],C_sharp:["C#","D#","F","F#","G#","A#","C"],D:["D","E","F#","G","A","B","C#"],Eb:["Eb","F","G","Ab","Bb","C","D"],E:["E","F#","G#","A","B","C#","D#"],F:["F","G","A","Bb","C","D","E"],F_sharp:["F#","G#","A#","B","C#","D#","F"],G:["G","A","B","C","D","E","F#"],Ab:["Ab","Bb","C","Db","Eb","F","G"],A:["A","B","C#","D","E","F#","Ab"],Bb:["Bb","C","D","Eb","F","G","A"],B:["B","C#","D#","E","F#","G#","A#"]},minor:{A:["A","B","C","D","E","F","G"],Bb:["Bb","C","Db","Eb","F","Gb","Ab"],B:["B","C#","D","E","F#","G","A"],C:["C","D","Eb","F","G","Ab","Bb","C"],C_sharp:["C#","D#","E","F#","G#","A","B"],D:["D","E","F","G","A","Bb","C"],Eb:["Eb","F","Gb","Ab","Bb","B","Db"],E:["E","F#","G","A","B","C","D"],F:["F","G","Ab","Bb","C","Db","Eb"],F_sharp:["F#","G#","A","B","C#","D","E"],G:["G","A","Bb","C","D","Eb","F"],Ab:["Ab","Bb","B","Db","Eb","E","Gb"]}},z=t(74),K=t.n(z),L=t(58),N=Object(T.a)({root:{fontFamily:"Montserrat",borderRadius:50,fontWeight:"bold",fontSize:"1.3em",width:264}}),P={minor:[[1,6,7],[1,4,7],[1,4,5],[1,6,3,7],[2,5,1],[1,7,4,4]],major:[[1,4,5],[4,5,6],[1,6,4,5],[2,5,1],[1,5,6,4],[1,5,5,2]]},R=function(){var e=N(),n=Object(p.useState)([]),t=Object(F.a)(n,2),a=t[0],l=t[1],c=Object(p.useContext)(S),s=Object(F.a)(c,2),u=s[0],d=s[1],m=Object(p.useContext)(G),f=Object(F.a)(m,1)[0],b=Object(p.useContext)(D),g=Object(F.a)(b,1)[0],x=_[f][g],j=Object(p.useState)(!1),C=Object(F.a)(j,2),A=C[0],k=C[1],I=(new L.a).toDestination(),T=Object(y.a)(O.a)(r||(r=Object(E.a)(["\n    width: 180px;\n  "]))),M=y.a.div(o||(o=Object(E.a)(["\n    margin-top: 3em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "]))),z=y.a.div(i||(i=Object(E.a)(["\n    width: 100%;\t\n    padding: 20px 0;\n    background: rgba(255, 255, 255, 0.13);\n    box-shadow: 0px 5px 13px 0px rgba(0,0,0,0.2);\n    display: flex;\n    justify-content: space-evenly;\n  "])));Object(p.useEffect)((function(){R()}),[f]);var R=function(){W("minor"===f?P.minor[Math.floor(Math.random()*P.minor.length)]:P.major[Math.floor(Math.random()*P.major.length)])},W=function(e){d(e);var n=["I","ii","iii","IV","V","vi","vii\xb0"],t=["i","ii\xb0","III","iv","v","VI","VII"],r=Array.from(e);if("minor"===f){var o=r.map((function(e){return t[e-1]}));a===o?R():l(o)}else{var i=r.map((function(e){return n[e-1]}));a===i?R():l(i)}};return h.a.createElement("div",null,h.a.createElement(z,null,a&&a.map((function(e){return h.a.createElement(T,{elevation:0},h.a.createElement(v.a,{align:"center",variant:"h2"},e))}))),h.a.createElement(M,null,h.a.createElement(w.a,{variant:"outlined",className:e.root,onClick:R},"GENERATE"),h.a.createElement(B.a,{style:{marginLeft:4},disabled:A,onClick:function(){k(!0);if(u){var e=function(e,n){var t=e.concat(e),a=u.map((function(e,a){var r=n[a]-1,o=[t[r]];return o.push(t[r+2]),o.push(t[r+4]),o}));return console.log(a),a}(x,u),n=[];e.forEach((function(e){n.push(e.map((function(e){return"".concat(e,"4")})))})),console.log(n),n.forEach((function(e){return e.push("".concat(e[0][0],"2"))})),function(e){var n=L.b();e.forEach((function(e,t){return I.triggerAttackRelease(e,1.5,n+2*t,.7)})),setTimeout((function(){return k(!1)}),"".concat(2*e.length,"000"))}(n)}}},h.a.createElement(K.a,null))))},W=t(7),H=t(159),V=t(150),U=t(155),J=t(158),q=Object(W.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["Montserrat","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(J.a),Q=Object(T.a)((function(e){return{margin:{margin:e.spacing(2),width:70}}})),X=function(){var e=Q(),n=Object(p.useContext)(D),t=Object(F.a)(n,2),a=t[0],r=t[1];return h.a.createElement("div",null,h.a.createElement(V.a,{className:e.margin},h.a.createElement(U.a,{labelId:"key-select",id:"custom-key-select",value:a,onChange:function(e){r(e.target.value)},input:h.a.createElement(q,null),MenuProps:{getContentAnchorEl:function(){return null}}},h.a.createElement(H.a,{value:"C"},"C"),h.a.createElement(H.a,{value:"C_sharp"},"C#"),h.a.createElement(H.a,{value:"D"},"D"),h.a.createElement(H.a,{value:"E"},"E"),h.a.createElement(H.a,{value:"Eb"},"Eb"),h.a.createElement(H.a,{value:"F"},"F"),h.a.createElement(H.a,{value:"F_sharp"},"F#"),h.a.createElement(H.a,{value:"G"},"G"),h.a.createElement(H.a,{value:"A"},"A"),h.a.createElement(H.a,{value:"Ab"},"Ab"),h.a.createElement(H.a,{value:"B"},"B"),h.a.createElement(H.a,{value:"Bb"},"Bb"))))},Y=t(151),Z=function(){var e=Object(p.useContext)(G),n=Object(F.a)(e,2),t=n[0],a=n[1];return h.a.createElement("div",{style:{display:"flex",alignItems:"center"}},h.a.createElement(v.a,{variation:"body1"},t),h.a.createElement(Y.a,{onChange:function(){a("minor"===t?"major":"minor")},checked:"major"===t}))},$=t(160),ee=t(157),ne=t(152),te=function(){var e=Object(p.useContext)(D),n=Object(F.a)(e,2),t=(n[0],n[1]),a=Object(p.useContext)(G),r=Object(F.a)(a,2),o=r[0],i=(r[1],Object(p.useState)([])),l=Object(F.a)(i,2),c=l[0],s=l[1],u=Object(p.useState)([]),d=Object(F.a)(u,2),m=d[0],f=d[1];return Object(p.useEffect)((function(){!function(){if(f([]),"minor"===o){var e=[],n=function(n){var t={};c.every((function(e){return _.minor[n].includes(e)}))&&(t.root=n,t.notes=_.minor[n],e.push(t))};for(var t in _.minor)n(t);f(e)}if("major"===o){var a=[],r=function(e){var n={};c.every((function(n){return _.major[e].includes(n)}))&&(n.root=e,n.notes=_.major[e],a.push(n))};for(var i in _.major)r(i);f(a)}}()}),[c]),Object(p.useEffect)((function(){m.length>0&&t(m[0].root)}),[m]),h.a.createElement("div",{style:{marginTop:10}},h.a.createElement(V.a,{style:{width:130}},h.a.createElement($.a,{id:"key-checkbox"},"Filter by note"),h.a.createElement(U.a,{labelId:"mutiple-checkbox-key",id:"mutiple-checkbox-key",multiple:!0,value:c,onChange:function(e){s(e.target.value)},renderValue:function(e){return e.join(", ")},MenuProps:{getContentAnchorEl:function(){return null}}},M.map((function(e){return h.a.createElement(H.a,{key:e.value,value:e.value},h.a.createElement(ee.a,{checked:c.indexOf(e.value)>-1}),h.a.createElement(ne.a,{primary:e.note}))})))))},ae=t(156),re=function(){return h.a.createElement(ae.a,{display:"flex",justifyContent:{xs:"center",lg:"flex-start"}},h.a.createElement(X,null),h.a.createElement(Z,null),h.a.createElement(te,null))},oe=t(75),ie=y.a.div(l||(l=Object(E.a)(["\n  display: flex;\n  width: 650px;\n  max-height: 216px;\n  max-width: 85vw;\n  box-shadow: 0px 10px 13px 0px rgba(0,0,0,0.3);\n\n  p {\n    font-family: 'Montserrat';\n    font-weight: bold;\n  }\n"]))),le=y.a.button(c||(c=Object(E.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  height: 200px;\n  width: 55px;\n  background-color: ",";\n  border: 1px solid #AAAAAA;\n\n  ","\n\n  ","\n"])),(function(e){return e.inKey,"white"}),(function(e){return!e.inKey&&"\n    p {\n      display: none;\n    }\n  "}),(function(e){return e.root&&"\n    p {\n      text-decoration: underline red;\n      text-underline-offset: 2px;\n    }\n  "})),ce=y.a.button(s||(s=Object(E.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  height: 120px;\n  width: 35px;\n  background-color: ",";\n  border: 1px solid #AAAAAA;\n  z-index: 2;\n  margin: 0 -18px;\n\n  p {\n    color: white;\n  }\n\n  ","\n\n  ","\n"])),(function(e){return e.inKey?"#000000":"#808080"}),(function(e){return!e.inKey&&"\n    p {\n      display: none;\n    }\n  "}),(function(e){return e.root&&"\n    p {\n      text-decoration: underline red;\n      text-underline-offset: 2px;\n    }\n  "})),se=y.a.p(u||(u=Object(E.a)(["\n  position: absolute;\n  bottom: 5px;\n  color: black;\n"]))),ue=function(){var e=Object(p.useContext)(D),n=Object(F.a)(e,1)[0],t=Object(p.useContext)(G),a=Object(F.a)(t,1)[0],r=Object(p.useContext)(S),o=Object(F.a)(r,2),i=(o[0],o[1],_[a][n],function(){var e=_[a][n],t=function(e,n){if("minor"===e)return!!["E","B","F_sharp","C_sharp"].includes(n);return!!["G","D","A","E","B","C_sharp","F_sharp"].includes(n)}(a,n),r=M.map((function(e){return e.note})).map((function(a){var r=t?a.slice(0,2):a.slice(3);return 1===a.length?h.a.createElement(le,{root:n===a,inKey:e.includes(a)},h.a.createElement(se,null,a[0])):h.a.createElement(ce,{root:e[0]===r,inKey:e.includes(r)},h.a.createElement(se,null,r))}));return console.log(e),r});return h.a.createElement(oe.a,{query:"(max-width: 470px)"},(function(e){return e?h.a.createElement(ie,null,h.a.createElement(i,null)):h.a.createElement(ie,null,h.a.createElement(i,null),h.a.createElement(i,null))}))},de=function(){var e=Object(p.useContext)(D),n=Object(F.a)(e,1)[0],t=Object(p.useContext)(G),a={major:{C:"Completely pure. Its character is: innocence, simplicity, naivety, children's talk",C_sharp:"Rapture in sadness. A grimacing key of choking back tears. It is capable of a laugh or smile to pacify those around, but the truth is in despair. Fullness of tone, sonority, and euphony.",D:"The key of triumph, of Hallelujahs, of war-cries, of victory-rejoicing. Thus, the inviting symphonies, the marches, holiday songs and heaven-rejoicing choruses are set in this key",Eb:"The key of love, of devotion, of intimate conversation with God",E:"Noisy shouts of joy, laughing pleasure and not yet complete, full delight lies in E Major",F:"Complaisance, controlled calmness over the readiness to explode.",F_sharp:"Triumph over evil, obstacles, hurdles. Surmounting foes and finally finding rest in victory. Brilliant clarity of thought and feeling.",G:"Everything rustic, idyllic and lyrical, every calm and satisfied passion, every tender gratitude for true friendship and faithful love, in a word every gentle and peaceful emotion of the heart is correctly expressed by this key",Ab:"Key of the grave. Death, grave, putrefaction, judgment, eternity lie in its radius",A:"This key includes declarations of innocent love, satisfaction with one's state of affairs; hope of seeing one's beloved again when parting; youthful cheerfulness and trust in God",Bb:"Love, Clear Conscience, Hopeful Aspirations for the future and a better world. Optimistic and able to take control in order to ensure peace.",B:"Strongly colored, announcing wild passions, composed from the most glaring colors. Anger, rage, jealousy, fury, despair and every burden of the heart lies in its sphere"},minor:{C:"Declarations of love and lamenting lost love or unhappy relationships. It is languishing and full of longing, a soul in search of something different.",C_sharp:"A passionate expression of sorrow and deep grief. Full of penance and self-punishment. An intimate conversation with God about recognition of wrongdoing and atonement.",D:"Melancholy, feminine, brooding worries, contemplation of negativity.",Eb:"Dealing with anxiety and existential terror, deep distress, dark depression. The dark night of the soul. Fear, hesitation, shuddering, goose bumps. The language of ghosts.",E:"This key can carry grief, mournfulness, restlessness. Like a princess locked in a tower longing for her rescuer and future lover.",F:"Deepest depression, lament over death and loss, groans of misery, ready to expire. Harrowing. Melancholic.",F_sharp:"Tearing at your hair and shirt, discontentment, long periods of lamentation and crying. Still capable of fighting this feeling.",G:"Worry of the future, of a failed plan, gnashing of teeth. Concern over a failed plan. Struggling with dislike and malcontent.",Ab:"Suffocation of the Heart, Lamentations, Life-Long Struggles. A negative look at the experiences of life, competition, growth.",A:"Womanly, Graceful in character. Capable of soothing.",Bb:"The Garment of Night, Surly, Blasphemous, Turning away the world and the divine. Preparations for the end. Pessimism and giving up. Belief in darkness.",B:"The key of patience, calmly waiting for fate, destiny, and the submission to providence and karma."}}[Object(F.a)(t,1)[0]][n],r=y.a.p(d||(d=Object(E.a)(["\n    font-size: 1.25rem;\n    margin: 0.4em 0 0 0.4em;\n    max-width: 800px;\n    height: 60px;\n    @media (max-width: 480px) {\n      font-size: 1rem;\n      min-height: 110px;\n    }\n  "])));return h.a.createElement(r,null,a)},me=function(){return h.a.createElement("div",{style:{width:"90%",minWidth:"90%",margin:"0 auto",padding:"3em 0"}},h.a.createElement(ae.a,{display:"flex",justifyContent:"space-between",alignItems:{xs:"center",lg:"flex-start"},flexDirection:{xs:"column",lg:"row"}},h.a.createElement(ae.a,{mr:{lg:"2em"},mb:{xs:"2em",lg:"0"}},h.a.createElement(ue,null)),h.a.createElement(ae.a,{display:"flex",flexDirection:"column",justifyContent:{xs:"center",md:"space-around"},width:"100%"},h.a.createElement(re,null),h.a.createElement(k.Fade,null,h.a.createElement(de,null)))))},fe=(t(114),t(59));fe.a.initialize("G-7N50LGCT09"),fe.a.pageview(window.location.pathname+window.location.search);var pe=function(){var e=Object(j.a)({palette:{type:"dark"},typography:{fontFamily:"'Montserrat', 'Fira Sans', sans-serif",h1:{fontFamily:"Montserrat",fontWeight:"bold",fontSize:"3rem","@media (max-width:1277px)":{fontSize:"2rem"}},h2:{fontFamily:"Fira Sans",fontWeight:"bold",fontSize:"8rem","@media (max-width:650px)":{fontSize:"4rem"}},body1:{fontFamily:"Montserrat"}}}),n=y.a.div(m||(m=Object(E.a)(["\n    box-sizing: border-box;\n    border: 2px solid rgba(255,255,255, 0.5);\n    height: 900px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    padding: 2em 0;\n    margin: auto;\n    @media (max-width: 480px) {\n      border: none;\n      padding-top: 0;\n    }\n    @media (min-width: 1490px) {\n      min-width: 1490px;\n    }\n  "]))),t=y.a.div(f||(f=Object(E.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    @media (max-width: 480px) {\n      align-items: flex-start;\n    }\n  "])));return h.a.createElement(C.a,{theme:e},h.a.createElement(I,null,h.a.createElement(t,null,h.a.createElement(k.Fade,{duration:6e3},h.a.createElement(n,null,h.a.createElement(A.a,null),h.a.createElement(k.Fade,{up:!0,duration:2e3},h.a.createElement(x,null)),h.a.createElement(k.Fade,{delay:1e3,duration:2e3},h.a.createElement(me,null)),h.a.createElement(k.Fade,{delay:2e3,duration:2e3},h.a.createElement(R,null)))))))};g.a.render(h.a.createElement(pe,null),document.getElementById("root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.b5262dbe.chunk.js.map