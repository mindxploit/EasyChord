(this["webpackJsonpmaterial-app"]=this["webpackJsonpmaterial-app"]||[]).push([[0],Array(57).concat([function(e,t,a){e.exports=a(91)},,,,,,,,function(e,t,a){var n={"./major_scales/A.png":66,"./major_scales/Ab.png":67,"./major_scales/B.png":68,"./major_scales/Bb.png":69,"./major_scales/C.png":70,"./major_scales/C_sharp.png":71,"./major_scales/D.png":72,"./major_scales/E.png":73,"./major_scales/Eb.png":74,"./major_scales/F.png":75,"./major_scales/F_sharp.png":76,"./major_scales/G.png":77,"./minor_scales/A.png":78,"./minor_scales/Ab.png":79,"./minor_scales/B.png":80,"./minor_scales/Bb.png":81,"./minor_scales/C.png":82,"./minor_scales/C_sharp.png":83,"./minor_scales/D.png":84,"./minor_scales/E.png":85,"./minor_scales/Eb.png":86,"./minor_scales/F.png":87,"./minor_scales/F_sharp.png":88,"./minor_scales/G.png":89};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=65},function(e,t,a){e.exports=a.p+"static/media/A.6dd125b7.png"},function(e,t,a){e.exports=a.p+"static/media/Ab.b23315c2.png"},function(e,t,a){e.exports=a.p+"static/media/B.254db4ad.png"},function(e,t,a){e.exports=a.p+"static/media/Bb.3845ea97.png"},function(e,t,a){e.exports=a.p+"static/media/C.46dc201c.png"},function(e,t,a){e.exports=a.p+"static/media/C_sharp.a686d19b.png"},function(e,t,a){e.exports=a.p+"static/media/D.23dc77ab.png"},function(e,t,a){e.exports=a.p+"static/media/E.82b1e7e9.png"},function(e,t,a){e.exports=a.p+"static/media/Eb.a314bb68.png"},function(e,t,a){e.exports=a.p+"static/media/F.2df25dd5.png"},function(e,t,a){e.exports=a.p+"static/media/F_sharp.bfee555e.png"},function(e,t,a){e.exports=a.p+"static/media/G.f0f799d3.png"},function(e,t,a){e.exports=a.p+"static/media/A.2374a70b.png"},function(e,t,a){e.exports=a.p+"static/media/Ab.f4c10e2f.png"},function(e,t,a){e.exports=a.p+"static/media/B.e0e99972.png"},function(e,t,a){e.exports=a.p+"static/media/Bb.b4219f70.png"},function(e,t,a){e.exports=a.p+"static/media/C.3c5777c8.png"},function(e,t,a){e.exports=a.p+"static/media/C_sharp.329661e9.png"},function(e,t,a){e.exports=a.p+"static/media/D.a3a729fc.png"},function(e,t,a){e.exports=a.p+"static/media/E.d9529ff7.png"},function(e,t,a){e.exports=a.p+"static/media/Eb.9462f349.png"},function(e,t,a){e.exports=a.p+"static/media/F.1b342255.png"},function(e,t,a){e.exports=a.p+"static/media/F_sharp.a6a2e07c.png"},function(e,t,a){e.exports=a.p+"static/media/G.edee1c92.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),s=a(120),l=function(){return r.a.createElement(s.a,{align:"center",style:{fontSize:"4rem",paddingTop:"0.5em"},variant:"h1"},"Welcome, let\u2019s pick a key and start playing!")},c=a(50),p=a(126),m=a(127),u=a(11),d=a(124),f=Object(n.createContext)("E"),g=Object(n.createContext)("minor"),h=function(e){var t=e.children,a=Object(n.useState)("E"),i=Object(u.a)(a,2),o=i[0],s=i[1],l=Object(n.useState)("minor"),c=Object(u.a)(l,2),p=c[0],m=c[1];return r.a.createElement(f.Provider,{value:[o,s]},r.a.createElement(g.Provider,{value:[p,m]},t))},b=a(123),y=Object(b.a)({root:{fontFamily:"Montserrat",borderRadius:50,fontWeight:"bold",fontSize:"1.3em",width:264,"& :hover":{}}}),v={minor:[[1,6,7],[1,4,7],[1,4,5],[1,6,3,7],[2,5,1],[1,7,4,4]],major:[[1,4,5],[1,6,4,5],[2,5,1],[1,5,6,4],[1,5,5,2]]},E=function(){var e=y(),t=Object(n.useState)(),a=Object(u.a)(t,2),i=a[0],o=a[1],l=Object(n.useContext)(g),c=Object(u.a)(l,1)[0];Object(n.useEffect)((function(){p()}),[c]);var p=function(){m("minor"===c?v.minor[Math.floor(Math.random()*v.minor.length)]:v.major[Math.floor(Math.random()*v.major.length)])},m=function(e){var t=["I","ii","iii","IV","V","vi","vii\xb0"],a=["i","ii\xb0","III","iv","v","VI","VII"],n=Array.from(e);if("minor"===c){var r=n.map((function(e){return a[e-1]}));o(r.toString().replace(/,/g,"-"))}else{var i=n.map((function(e){return t[e-1]}));o(i.toString().replace(/,/g,"-"))}};return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"100%",background:"rgba(255, 255, 255, 0.13)",padding:"0.5em"}},r.a.createElement(s.a,{style:{fontSize:"11rem"},align:"center",variant:"h1"},i)),r.a.createElement("div",{style:{padding:"2em 0",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(d.a,{variant:"outlined",className:e.root,onClick:p},"GENERATE")))},j=a(4),x=a(132),C=a(125),_=a(128),k=a(131),O=Object(j.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["Montserrat","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(k.a),w=Object(b.a)((function(e){return{margin:{margin:e.spacing(1)}}})),F=function(){var e=w(),t=Object(n.useContext)(f),a=Object(u.a)(t,2),i=a[0],o=a[1];return r.a.createElement("div",null,r.a.createElement(C.a,{className:e.margin},r.a.createElement(_.a,{labelId:"key-select",id:"custom-key-select",value:i,onChange:function(e){o(e.target.value)},input:r.a.createElement(O,null)},r.a.createElement(x.a,{value:"A"},"A"),r.a.createElement(x.a,{value:"Ab"},"Ab"),r.a.createElement(x.a,{value:"B"},"B"),r.a.createElement(x.a,{value:"Bb"},"Bb"),r.a.createElement(x.a,{value:"C"},"C"),r.a.createElement(x.a,{value:"C_sharp"},"C#"),r.a.createElement(x.a,{value:"D"},"D"),r.a.createElement(x.a,{value:"E"},"E"),r.a.createElement(x.a,{value:"Eb"},"Eb"),r.a.createElement(x.a,{value:"F"},"F"),r.a.createElement(x.a,{value:"F_sharp"},"F#"),r.a.createElement(x.a,{value:"G"},"G"))))},A=a(130),S=function(){var e=Object(n.useContext)(g),t=Object(u.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(s.a,{variation:"body1"},a),r.a.createElement(A.a,{onChange:function(){i("minor"===a?"major":"minor")},checked:"major"===a}))},B=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(F,null),r.a.createElement(S,null))},I=function(){var e=Object(n.useContext)(f),t=Object(u.a)(e,1)[0],i=Object(n.useContext)(g),o=Object(u.a)(i,1)[0];return r.a.createElement("div",null,r.a.createElement("img",{style:{width:687,maxWidth:687,maxHeight:229},src:a(65)("./".concat(o,"_scales/").concat(t,".png")),alt:"scale"}))},T=function(){var e=Object(n.useContext)(f),t=Object(u.a)(e,1)[0],a=Object(n.useContext)(g),i={major:{C:"Completely pure. Its character is: innocence, simplicity, naivety, children's talk",C_sharp:"Rapture in sadness. A grimacing key of choking back tears. It is capable of a laugh or smile to pacify those around, but the truth is in despair. Fullness of tone, sonority, and euphony.",D:"The key of triumph, of Hallelujahs, of war-cries, of victory-rejoicing. Thus, the inviting symphonies, the marches, holiday songs and heaven-rejoicing choruses are set in this key",Eb:"The key of love, of devotion, of intimate conversation with God",E:"Noisy shouts of joy, laughing pleasure and not yet complete, full delight lies in E Major",F:"Complaisance, controlled calmness over the readiness to explode.",F_sharp:"Triumph over evil, obstacles, hurdles. Surmounting foes and finally finding rest in victory. Brilliant clarity of thought and feeling.",G:"Everything rustic, idyllic and lyrical, every calm and satisfied passion, every tender gratitude for true friendship and faithful love, in a word every gentle and peaceful emotion of the heart is correctly expressed by this key",Ab:"Key of the grave. Death, grave, putrefaction, judgment, eternity lie in its radius",A:"This key includes declarations of innocent love, satisfaction with one's state of affairs; hope of seeing one's beloved again when parting; youthful cheerfulness and trust in God",Bb:"Love, Clear Conscience, Hopeful Aspirations for the future and a better world. Optimistic and able to take control in order to ensure peace.",B:"Strongly colored, announcing wild passions, composed from the most glaring colors. Anger, rage, jealousy, fury, despair and every burden of the heart lies in its sphere"},minor:{C:"Declarations of love and lamenting lost love or unhappy relationships. It is languishing and full of longing, a soul in search of something different.",C_sharp:"A passionate expression of sorrow and deep grief. Full of penance and self-punishment. An intimate conversation with God about recognition of wrongdoing and atonement.",D:"Melancholy, feminine, brooding worries, contemplation of negativity.",Eb:"Dealing with anxiety and existential terror, deep distress, dark depression. The dark night of the soul. Fear, hesitation, shuddering, goose bumps. The language of ghosts.",E:"This key can carry grief, mournfulness, restlessness. Like a princess locked in a tower longing for her rescuer and future lover.",F:"Deepest depression, lament over death and loss, groans of misery, ready to expire. Harrowing. Melancholic.",F_sharp:"Tearing at your hair and shirt, discontentment, long periods of lamentation and crying. Still capable of fighting this feeling.",G:"Worry of the future, of a failed plan, gnashing of teeth. Concern over a failed plan. Struggling with dislike and malcontent.",Ab:"Suffocation of the Heart, Lamentations, Life-Long Struggles. A negative look at the experiences of life, competition, growth.",A:"Womanly, Graceful in character. Capable of soothing.",Bb:"The Garment of Night, Surly, Blasphemous, Turning away the world and the divine. Preparations for the end. Pessimism and giving up. Belief in darkness.",B:"The key of patience, calmly waiting for fate, destiny, and the submission to providence and karma."}}[Object(u.a)(a,1)[0]][t];return r.a.createElement("p",{style:{fontSize:"1.5rem",marginLeft:"0.4em"}},i)},D=a(129),G=function(){return r.a.createElement("div",{style:{padding:"0 3em",margin:"5em 0"}},r.a.createElement(D.a,{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},r.a.createElement(D.a,null,r.a.createElement(I,null)),r.a.createElement(D.a,{display:"flex",flexDirection:"column",justifyContent:"space-around",style:{marginLeft:"2em"}},r.a.createElement(B,null),r.a.createElement(T,null))))},M=function(){var e=Object(c.a)({palette:{type:"dark"},typography:{fontFamily:"'Montserrat', 'Fira Sans', sans-serif",h1:{fontFamily:"Fira Sans",fontWeight:"bold"},body1:{fontFamily:"Montserrat"}}});return r.a.createElement(p.a,{theme:e},r.a.createElement(m.a,null),r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(l,null),r.a.createElement(G,null),r.a.createElement(E,null)))};a(90);var L=function(){return r.a.createElement(h,null,r.a.createElement(M,null))};o.a.render(r.a.createElement(L,null),document.getElementById("root"))}]),[[57,1,2]]]);
//# sourceMappingURL=main.d7a9d223.chunk.js.map