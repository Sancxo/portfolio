"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[894],{2570:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var o=n(5043),i=n(1318),a=n(6886);const r=e=>{let t;const n=[],o=[];switch(e){case"path/opac":t=Math.round(8*Math.random())+7;break;case"position":case"font":t=Math.round(10*Math.random())+5;break;default:throw new Error(`CSS property "${e}" is not handled by this glitch animation generator library. \n            \nPlease look at keyframesGenerator function to find another one.`)}for(let i=0;i<t;i++){let e,t;do{e=Math.round(100*Math.random());let n=e+(Math.round(Math.random())+2);t=n<=100?n:100}while(n.includes(e));n.push(e),o.push(t)}return n.sort((e,t)=>e-t),o.sort((e,t)=>e-t),[n,o]},l=(e,t)=>{let[n,o]=r(e);switch(e){case"path/opac":const i=[],r=[];for(let e=0;e<n.length;e++)i.push(`${n[e]}% { clip-path: polygon(${(0,a.Rb)()}); }`),r.push(`${n[e]}% { opacity: ${(0,a.tn)()}; }`);for(let e=0;e<o.length;e++)i.push(`${o[e]}% { clip-path: none; }`),r.push(`${o[e]}% { opacity: 0 }`);return[`${i.join("\n")}`,`${r.join("\n")}`];case"position":const l=[];for(let e=0;e<n.length;e++){const[o,i]=(0,a.fq)(String(t));l.push(`${n[e]}% { top: ${o}}; left: ${i}} }`)}return`${l.join("\n")}`;case"font":const s=[];for(let e=0;e<n.length;e++)s.push(`${n[e]}% { \n                    font-family: ${(0,a.JM)()}; \n                    color: ${(0,a.tQ)()}; \n                    filter: blur(${(0,a.RM)()}em); \n                }`);return`${s.join("\n")}`;default:throw new Error(`CSS property "${e}" is not handled by this glitch animation generator library. \n            \nPlease look at glitchAnimation function to find another one.`)}};var s=n(6712),c=n(4991),h=n(7362);const f=n.p+"static/media/bckgrd_2.20534db90fac49914721.jpg";var p=n(579);const $=(0,a.H9)(5,10);let[d,m]=l("path/opac");d=s.i7`${d}`,m=s.i7`${m}`;const u=s.i7`${l("position","negative")}`,g=s.i7`${l("position","positive")}`,b=s.i7`${l("font")}`,y=s.i7`${l("font")}`,M=s.Ay.div` ${h.K8} `,x=s.Ay.div`
  background: linear-gradient(#16161675, #161616EE), 50% 50% / cover no-repeat url(${f});
  height: calc(100vh - ${c.LR.headerHeight});
  filter: blur(.25em);
`,v=s.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`,w=s.Ay.h1`
  margin-top: 50%;
  color: ${c.M8.white};
  opacity: 1;
  font-family: ${c.lG.pixel};
  font-size: 3em;
  text-align: center;
  text-shadow: 0 0 .25em ${c.M8.white};
  animation: ${$} step-end 500ms infinite ${d};
  @media ${c.HP.tablet} {
    line-height: 1.5em;
  }
  &::after, &::before {
    margin-top: 50%;
    content: "Hello, World !";
    position: absolute;
    width: 110%;
    z-index: -1;
  }
  &::before {
    font-family: ${(0,a.JM)()};
    opacity: 0;
    top: ${(0,a.fq)("negative")[0]};
    left: ${(0,a.fq)("negative")[1]};
    color: ${c.M8.neonBlue};
    animation: ${$} step-end 500ms infinite ${m},
    ${(0,a.H9)(2,3)} step-end infinite ${u},
    ${(0,a.H9)(2,4)} step-end infinite ${b};
  }
  &::after {
    font-family: ${(0,a.JM)()};
    opacity: 0;
    top: ${(0,a.fq)("positive")[0]};
    left: ${(0,a.fq)("positive")[1]};
    color: ${c.M8.neonFuchsia};
    animation: ${$} step-end 500ms infinite ${m},
    ${g} ${(0,a.H9)(4,5)} step-end infinite,
    ${y} ${(0,a.H9)(3,5)} step-end infinite;
  }
`,j=(0,s.Ay)(i.N_)`
  color: ${c.M8.neonBlue};
  font-family: ${c.lG.pixelHairline};
  background: ${c.M8.black};
  font-weight: bold;
  margin: .25em 0 .25em 25%;
  font-size: 2em;
  text-decoration: none;
  line-height: 1em;
  &:hover { color: ${c.M8.neonFuchsia}; }
  @media ${c.HP.tablet} { font-size: 1.75em; }
  @media ${c.HP.mobileLandscape} { 
    font-size: 1.5em; 
    margin: .25em 0 .25em 12.5%
  }
`,k=s.Ay.a`
  color: ${c.M8.neonBlue};
  font-family: ${c.lG.pixelHairline};
  background: ${c.M8.black};
  font-weight: bold;
  margin: .25em 0 .25em 25%;
  font-size: 2em;
  text-decoration: none;
  line-height: 1em;
  &:hover { color: ${c.M8.neonFuchsia}; }
  @media ${c.HP.tablet} { font-size: 1.75em; }
  @media ${c.HP.mobileLandscape} { 
    font-size: 1.5em; 
    margin: .25em 0 .25em 12.5%
  }
`;const H=function(){return(0,o.useEffect)(()=>{window.scroll({top:0})},[]),(0,p.jsxs)(M,{children:[(0,p.jsx)(x,{}),(0,p.jsxs)(v,{children:[(0,p.jsx)(w,{className:"title",children:"Hello, World\xa0!"}),(0,p.jsx)(k,{href:"https://blog.simontirant.dev",title:"My tech blog",children:"|> My blog"}),(0,p.jsx)(j,{to:"/projects",title:"See my projects",children:"|> My projects"}),(0,p.jsx)(j,{to:"/about",title:"More about me",children:"|> About me"}),(0,p.jsx)(j,{to:"/contact",title:"Contact me here",children:"|> Contact me"})]})]})}}}]);
//# sourceMappingURL=894.c54efd26.chunk.js.map