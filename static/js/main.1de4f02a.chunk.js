(this["webpackJsonpmaterial-app"]=this["webpackJsonpmaterial-app"]||[]).push([[0],{100:function(e,t,n){e.exports=n.p+"static/media/G.edee1c92.png"},110:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),s=n(21),c=n(140),l=function(){return r.a.createElement(c.a,{align:"center",style:{width:"100%"},variant:"h1"},"Welcome, let\u2019s pick a key and start playing!")},u=n(60),m=n(146),p=n(147),d=n(11),f=n(144),g=Object(a.createContext)("E"),h=Object(a.createContext)("minor"),b=function(e){var t=e.children,n=Object(a.useState)("E"),i=Object(d.a)(n,2),o=i[0],s=i[1],c=Object(a.useState)("minor"),l=Object(d.a)(c,2),u=l[0],m=l[1];return r.a.createElement(g.Provider,{value:[o,s]},r.a.createElement(h.Provider,{value:[u,m]},t))},v=n(143),y=n(22);function E(){var e=Object(s.a)(["\n\t\twidth: 100%;\t\n\t\tbackground: rgba(255, 255, 255, 0.13);\n\t"]);return E=function(){return e},e}function x(){var e=Object(s.a)(["\n\t\tmargin-top: 3em;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t"]);return x=function(){return e},e}var j=Object(v.a)({root:{fontFamily:"Montserrat",borderRadius:50,fontWeight:"bold",fontSize:"1.3em",width:264}}),_={minor:[[1,6,7],[1,4,7],[1,4,5],[1,6,3,7],[2,5,1],[1,7,4,4]],major:[[1,4,5],[1,6,4,5],[2,5,1],[1,5,6,4],[1,5,5,2]]},C=function(){var e=j(),t=Object(a.useState)(),n=Object(d.a)(t,2),i=n[0],o=n[1],s=Object(a.useContext)(h),l=Object(d.a)(s,1)[0],u=y.a.div(x()),m=y.a.div(E());Object(a.useEffect)((function(){p()}),[l]);var p=function(){g("minor"===l?_.minor[Math.floor(Math.random()*_.minor.length)]:_.major[Math.floor(Math.random()*_.major.length)])},g=function(e){var t=["I","ii","iii","IV","V","vi","vii\xb0"],n=["i","ii\xb0","III","iv","v","VI","VII"],a=Array.from(e);if("minor"===l){var r=a.map((function(e){return n[e-1]}));o(r.toString().replace(/,/g,"-"))}else{var i=a.map((function(e){return t[e-1]}));o(i.toString().replace(/,/g,"-"))}};return r.a.createElement("div",null,r.a.createElement(m,null,r.a.createElement(c.a,{align:"center",variant:"h2"},i)),r.a.createElement(u,null,r.a.createElement(f.a,{variant:"outlined",className:e.root,onClick:p},"GENERATE")))},O=n(5),w=n(152),k=n(145),F=n(148),S=n(151),A=Object(O.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["Montserrat","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(S.a),B=Object(v.a)((function(e){return{margin:{margin:e.spacing(1)}}})),I=function(){var e=B(),t=Object(a.useContext)(g),n=Object(d.a)(t,2),i=n[0],o=n[1];return r.a.createElement("div",null,r.a.createElement(k.a,{className:e.margin},r.a.createElement(F.a,{labelId:"key-select",id:"custom-key-select",value:i,onChange:function(e){o(e.target.value)},input:r.a.createElement(A,null)},r.a.createElement(w.a,{value:"A"},"A"),r.a.createElement(w.a,{value:"Ab"},"Ab"),r.a.createElement(w.a,{value:"B"},"B"),r.a.createElement(w.a,{value:"Bb"},"Bb"),r.a.createElement(w.a,{value:"C"},"C"),r.a.createElement(w.a,{value:"C_sharp"},"C#"),r.a.createElement(w.a,{value:"D"},"D"),r.a.createElement(w.a,{value:"E"},"E"),r.a.createElement(w.a,{value:"Eb"},"Eb"),r.a.createElement(w.a,{value:"F"},"F"),r.a.createElement(w.a,{value:"F_sharp"},"F#"),r.a.createElement(w.a,{value:"G"},"G"))))},D=n(150),M=function(){var e=Object(a.useContext)(h),t=Object(d.a)(e,2),n=t[0],i=t[1];return r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(c.a,{variation:"body1"},n),r.a.createElement(D.a,{onChange:function(){i("minor"===n?"major":"minor")},checked:"major"===n}))},T=n(149),G=function(){return r.a.createElement(T.a,{display:"flex"},r.a.createElement(I,null),r.a.createElement(M,null))},N=function(){var e=Object(a.useContext)(g),t=Object(d.a)(e,1)[0],i=Object(a.useContext)(h),o=Object(d.a)(i,1)[0];return r.a.createElement("img",{style:{width:650,display:"block",maxHeight:216,maxWidth:"85vw"},src:n(76)("./".concat(o,"_scales/").concat(t,".png")),alt:"scale"})};function W(){var e=Object(s.a)(["\n\t\tfont-size: 1.25rem;\n\t\tmargin: 0.4em 0 0 0.4em;\n\t\tmax-width: 800px;\n\t"]);return W=function(){return e},e}var z=function(){var e=Object(a.useContext)(g),t=Object(d.a)(e,1)[0],n=Object(a.useContext)(h),i=Object(d.a)(n,1)[0],o=Object(a.useState)(),s=Object(d.a)(o,2),c=(s[0],s[1]),l={major:{C:"Completely pure. Its character is: innocence, simplicity, naivety, children's talk",C_sharp:"Rapture in sadness. A grimacing key of choking back tears. It is capable of a laugh or smile to pacify those around, but the truth is in despair. Fullness of tone, sonority, and euphony.",D:"The key of triumph, of Hallelujahs, of war-cries, of victory-rejoicing. Thus, the inviting symphonies, the marches, holiday songs and heaven-rejoicing choruses are set in this key",Eb:"The key of love, of devotion, of intimate conversation with God",E:"Noisy shouts of joy, laughing pleasure and not yet complete, full delight lies in E Major",F:"Complaisance, controlled calmness over the readiness to explode.",F_sharp:"Triumph over evil, obstacles, hurdles. Surmounting foes and finally finding rest in victory. Brilliant clarity of thought and feeling.",G:"Everything rustic, idyllic and lyrical, every calm and satisfied passion, every tender gratitude for true friendship and faithful love, in a word every gentle and peaceful emotion of the heart is correctly expressed by this key",Ab:"Key of the grave. Death, grave, putrefaction, judgment, eternity lie in its radius",A:"This key includes declarations of innocent love, satisfaction with one's state of affairs; hope of seeing one's beloved again when parting; youthful cheerfulness and trust in God",Bb:"Love, Clear Conscience, Hopeful Aspirations for the future and a better world. Optimistic and able to take control in order to ensure peace.",B:"Strongly colored, announcing wild passions, composed from the most glaring colors. Anger, rage, jealousy, fury, despair and every burden of the heart lies in its sphere"},minor:{C:"Declarations of love and lamenting lost love or unhappy relationships. It is languishing and full of longing, a soul in search of something different.",C_sharp:"A passionate expression of sorrow and deep grief. Full of penance and self-punishment. An intimate conversation with God about recognition of wrongdoing and atonement.",D:"Melancholy, feminine, brooding worries, contemplation of negativity.",Eb:"Dealing with anxiety and existential terror, deep distress, dark depression. The dark night of the soul. Fear, hesitation, shuddering, goose bumps. The language of ghosts.",E:"This key can carry grief, mournfulness, restlessness. Like a princess locked in a tower longing for her rescuer and future lover.",F:"Deepest depression, lament over death and loss, groans of misery, ready to expire. Harrowing. Melancholic.",F_sharp:"Tearing at your hair and shirt, discontentment, long periods of lamentation and crying. Still capable of fighting this feeling.",G:"Worry of the future, of a failed plan, gnashing of teeth. Concern over a failed plan. Struggling with dislike and malcontent.",Ab:"Suffocation of the Heart, Lamentations, Life-Long Struggles. A negative look at the experiences of life, competition, growth.",A:"Womanly, Graceful in character. Capable of soothing.",Bb:"The Garment of Night, Surly, Blasphemous, Turning away the world and the divine. Preparations for the end. Pessimism and giving up. Belief in darkness.",B:"The key of patience, calmly waiting for fate, destiny, and the submission to providence and karma."}}[i][t],u=y.a.p(W());return Object(a.useEffect)((function(){c(Math.floor(100*Math.random()))}),[l]),r.a.createElement(u,null,l)},H=function(){return r.a.createElement("div",{style:{width:"90%",minWidth:"90%",margin:"0 auto",padding:"3em 0"}},r.a.createElement(T.a,{display:"flex",justifyContent:"space-between",alignItems:{xs:"center",lg:"flex-start"},flexDirection:{xs:"column",lg:"row"}},r.a.createElement(T.a,{mr:{lg:"2em"},mb:{xs:"2em",lg:"0"}},r.a.createElement(N,null)),r.a.createElement(T.a,{display:"flex",flexDirection:"column",justifyContent:"space-around",width:"100%"},r.a.createElement(G,null),r.a.createElement(z,null))))},L=n(40);n(110);function R(){var e=Object(s.a)(["\n       display: flex; \n       justify-content: center;\n       align-items: center;\n       min-height: 100vh;\n       margin: 0 3em; \n    "]);return R=function(){return e},e}function U(){var e=Object(s.a)(["\n        border: 2px solid rgba(255,255,255, 0.9);\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        padding: 3em 0;\n        border-radius: 20;\n        min-width: 90%;\n    "]);return U=function(){return e},e}var P=function(){var e=Object(u.a)({palette:{type:"dark"},typography:{fontFamily:"'Montserrat', 'Fira Sans', sans-serif",h1:{fontFamily:"Montserrat",fontWeight:"bold",fontSize:"3rem","@media (max-width:1277px)":{fontSize:"2rem"}},h2:{fontFamily:"Fira Sans",fontWeight:"bold",fontSize:"8rem","@media (max-width:520px)":{fontSize:"4rem"}},body1:{fontFamily:"Montserrat"}}}),t=y.a.div(U()),n=y.a.div(R());return r.a.createElement(n,null,r.a.createElement(L.Fade,{duration:6e3},r.a.createElement(t,null,r.a.createElement(m.a,{theme:e},r.a.createElement(p.a,null),r.a.createElement(b,null,r.a.createElement(L.Fade,{up:!0,duration:2e3},r.a.createElement(l,null)),r.a.createElement(L.Fade,{delay:1e3,duration:2e3},r.a.createElement(H,null)),r.a.createElement(L.Fade,{delay:2e3,duration:2e3},r.a.createElement(C,null)))))))};o.a.render(r.a.createElement(P,null),document.getElementById("root"))},67:function(e,t,n){e.exports=n(111)},76:function(e,t,n){var a={"./major_scales/A.png":77,"./major_scales/Ab.png":78,"./major_scales/B.png":79,"./major_scales/Bb.png":80,"./major_scales/C.png":81,"./major_scales/C_sharp.png":82,"./major_scales/D.png":83,"./major_scales/E.png":84,"./major_scales/Eb.png":85,"./major_scales/F.png":86,"./major_scales/F_sharp.png":87,"./major_scales/G.png":88,"./minor_scales/A.png":89,"./minor_scales/Ab.png":90,"./minor_scales/B.png":91,"./minor_scales/Bb.png":92,"./minor_scales/C.png":93,"./minor_scales/C_sharp.png":94,"./minor_scales/D.png":95,"./minor_scales/E.png":96,"./minor_scales/Eb.png":97,"./minor_scales/F.png":98,"./minor_scales/F_sharp.png":99,"./minor_scales/G.png":100};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=76},77:function(e,t,n){e.exports=n.p+"static/media/A.6dd125b7.png"},78:function(e,t,n){e.exports=n.p+"static/media/Ab.b23315c2.png"},79:function(e,t,n){e.exports=n.p+"static/media/B.254db4ad.png"},80:function(e,t,n){e.exports=n.p+"static/media/Bb.3845ea97.png"},81:function(e,t,n){e.exports=n.p+"static/media/C.46dc201c.png"},82:function(e,t,n){e.exports=n.p+"static/media/C_sharp.a686d19b.png"},83:function(e,t,n){e.exports=n.p+"static/media/D.23dc77ab.png"},84:function(e,t,n){e.exports=n.p+"static/media/E.82b1e7e9.png"},85:function(e,t,n){e.exports=n.p+"static/media/Eb.a314bb68.png"},86:function(e,t,n){e.exports=n.p+"static/media/F.2df25dd5.png"},87:function(e,t,n){e.exports=n.p+"static/media/F_sharp.bfee555e.png"},88:function(e,t,n){e.exports=n.p+"static/media/G.f0f799d3.png"},89:function(e,t,n){e.exports=n.p+"static/media/A.2374a70b.png"},90:function(e,t,n){e.exports=n.p+"static/media/Ab.f4c10e2f.png"},91:function(e,t,n){e.exports=n.p+"static/media/B.e0e99972.png"},92:function(e,t,n){e.exports=n.p+"static/media/Bb.b4219f70.png"},93:function(e,t,n){e.exports=n.p+"static/media/C.3c5777c8.png"},94:function(e,t,n){e.exports=n.p+"static/media/C_sharp.329661e9.png"},95:function(e,t,n){e.exports=n.p+"static/media/D.a3a729fc.png"},96:function(e,t,n){e.exports=n.p+"static/media/E.d9529ff7.png"},97:function(e,t,n){e.exports=n.p+"static/media/Eb.9462f349.png"},98:function(e,t,n){e.exports=n.p+"static/media/F.1b342255.png"},99:function(e,t,n){e.exports=n.p+"static/media/F_sharp.a6a2e07c.png"}},[[67,1,2]]]);
//# sourceMappingURL=main.1de4f02a.chunk.js.map