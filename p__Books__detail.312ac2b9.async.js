"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[686],{16918:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var i,o=t(59400),a=t.n(o),s=t(42122),c=t.n(s),r=t(70215),d=t.n(r),u=t(17061),l=t.n(u),h=t(17156),p=t.n(h),m=t(78565),g=t(68405),f=t(88275),x=t(99659),v=t(91733),j="/project-manager-umi/",O=((0,f.defineConfig)({antd:{},access:{},model:{},initialState:{},request:{},layout:{},base:"git"==={NODE_ENV:"production",PUBLIC_PATH:"/project-manager-umi/"}.PLATFORM?j:"/",publicPath:j,outputPath:"dist",targets:{ie:11},routes:[{path:"/",name:"主页",component:"Home/index",icon:"HomeOutlined"},{path:"/tools",name:"工具库",component:"Tools/index",icon:"AlignRightOutlined"},{path:"/hudoudou",name:"胡豆豆相亲档案",component:"Hudoudou/index",icon:"AlignRightOutlined"},{path:"/books",name:"本地书库",icon:"ReadOutlined",routes:[{path:"",redirect:"/books/list"},{path:"list",component:"Books/list",icon:"ReadOutlined"},{path:"detail",component:"Books/detail"}]},{path:"/login",name:"登陆",component:"Login/index",icon:"AlignRightOutlined",menuRender:!1,hideInMenu:!0,hideInBreadcrumb:!0},{path:"/*",component:"404"}],tailwindcss:{},fastRefresh:!0,jsMinifier:"terser",hash:!0,postcssLoader:{},favicons:["./assets/favicon.ico"],styledComponents:{}}),t(85893)),k=["children","className","node"],w=function(){var n=(0,f.useLocation)();console.log(n);var e=(0,x.Z)(p()(l()().mark((function e(){var t;return l()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n.state.src);case 2:return t=e.sent,e.abrupt("return",t.text());case 4:case"end":return e.stop()}}),e)})))).data;return(0,O.jsx)(m._z,{ghost:!0,children:(0,O.jsx)(P,{children:(0,O.jsx)("div",{children:(0,O.jsx)(g.U,{urlTransform:function(n){return"git"==={NODE_ENV:"production",PUBLIC_PATH:"/project-manager-umi/"}.PLATFORM?n.replace("/assets/images","".concat(j,"assets/images")):n},components:{code:function(n){var e=n.children,t=n.className,i=(n.node,d()(n,k)),o=/language-(\w+)/.exec(t||"");return console.log("match",o,t),o?(0,O.jsx)(v.Z,c()(c()({},i),{},{children:String(e).replace(/\n$/,""),language:o[1],PreTag:"div"})):(0,O.jsx)("code",c()(c()({},i),{},{className:t,children:e}))}},children:e})})})})},P=f.styled.div(i||(i=a()(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  & > div {\n    max-width: 600px;\n  }\n  img {\n    width: 100%;\n  }\n"])))}}]);