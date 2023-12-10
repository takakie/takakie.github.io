var posts=["2023/12/10/SMMS自动图床/","2023/12/10/js-chrome-debug/","2023/12/10/fastjson-templatesimpl/","2023/12/10/picture/","2023/12/10/git-study/","2023/12/10/hello-world/","2023/12/10/springsecurity-login/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };