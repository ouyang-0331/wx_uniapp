
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","navigationBar":{"backgroundColor":"#fff","titleText":"咸虾米壁纸","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"椰子柠檬","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"4.15","entryPagePath":"pages/index/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#9799a5","selectedColor":"#28B389","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","list":[{"text":"推荐","pagePath":"pages/index/index","iconPath":"/static/images/tabBar/home.png","selectedIconPath":"/static/images/tabBar/home-h.png"},{"text":"分类","pagePath":"pages/classify/classify","iconPath":"/static/images/tabBar/classify.png","selectedIconPath":"/static/images/tabBar/classify-h.png"},{"text":"我的","pagePath":"pages/user/user","iconPath":"/static/images/tabBar/user.png","selectedIconPath":"/static/images/tabBar/user-h.png"}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/index/index","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"titleText":"uni-app","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/classify/classify","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"enablePullDownRefresh":false,"navigationBar":{"titleText":"分类","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/user/user","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"enablePullDownRefresh":false,"navigationBar":{"titleText":"我的","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/classlist/classlist","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"分类列表","type":"default"},"isNVue":false}},{"path":"pages/preview/preview","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"预览","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/notice/notice","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"公告","type":"default"},"isNVue":false}},{"path":"pages/notice/detail","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"公告详情","type":"default"},"isNVue":false}},{"path":"pages/search/search","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"搜索","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  