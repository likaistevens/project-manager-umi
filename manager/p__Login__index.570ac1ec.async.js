"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[739],{99362:function(e,s,r){r.r(s);var n=r(17061),a=r.n(n),t=r(17156),c=r.n(t),i=r(27424),o=r.n(i),l=r(87547),u=r(94149),p=r(24454),d=r(36409),h=r(91244),x=r(5966),f=r(16434),m=r(63434),g=r(49053),j=r(27790),b=r(67294),Z=r(9927),v=r(58761),k=r(85893);s.default=function(){var e=(0,b.useState)("account"),s=o()(e,2),r=s[0],n=s[1],t=(0,b.useState)(!1),i=o()(t,2),w=i[0],P=i[1];return(0,k.jsx)(d._Y,{hashed:!1,children:(0,k.jsx)("div",{style:{backgroundColor:"white"},children:(0,k.jsxs)(h.U,{logo:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",title:"Github",subTitle:"全球最大的代码托管平台",onFocus:function(){P(!1)},onFinish:function(){var e=c()(a()().mark((function e(s){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.x4)(s);case 3:if(!e.sent){e.next=8;break}return Z.history.replace("/"),P(!1),e.abrupt("return",!0);case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),P(!0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(s){return e.apply(this,arguments)}}(),message:w&&(0,k.jsx)("div",{className:"text-red-500",children:"密码错误"}),children:[(0,k.jsxs)(g.Z,{centered:!0,activeKey:r,onChange:function(e){return n(e)},children:[(0,k.jsx)(g.Z.TabPane,{tab:"账号密码登录"},"account"),(0,k.jsx)(g.Z.TabPane,{tab:"手机号登录",disabled:!0},"phone")]}),"account"===r&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(x.Z,{name:"username",fieldProps:{size:"large",prefix:(0,k.jsx)(l.Z,{className:"prefixIcon"})},placeholder:"用户名: admin or user",rules:[{required:!0,message:"请输入用户名!"}]}),(0,k.jsx)(x.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,k.jsx)(u.Z,{className:"prefixIcon"})},placeholder:"密码: ant.design",rules:[{required:!0,message:"请输入密码！"}]})]}),"phone"===r&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(x.Z,{fieldProps:{size:"large",prefix:(0,k.jsx)(p.Z,{className:"prefixIcon"})},name:"mobile",placeholder:"手机号",rules:[{required:!0,message:"请输入手机号！"},{pattern:/^1\d{10}$/,message:"手机号格式错误！"}]}),(0,k.jsx)(f.Z,{fieldProps:{size:"large",prefix:(0,k.jsx)(u.Z,{className:"prefixIcon"})},captchaProps:{size:"large"},placeholder:"请输入验证码",captchaTextRender:function(e,s){return e?"".concat(s," ","获取验证码"):"获取验证码"},name:"captcha",rules:[{required:!0,message:"请输入验证码！"}],onGetCaptcha:c()(a()().mark((function e(){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.ZP.success("获取验证码成功！验证码为：1234");case 1:case"end":return e.stop()}}),e)})))})]}),(0,k.jsxs)("div",{style:{marginBlockEnd:24},children:[(0,k.jsx)(m.Z,{noStyle:!0,name:"autoLogin",children:"自动登录"}),(0,k.jsx)("a",{style:{float:"right"},children:"忘记密码"})]})]})})})}}}]);