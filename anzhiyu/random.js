var posts=["posts/12418/","posts/59809/","posts/11729/","posts/59148/","posts/16107/","posts/6295/","posts/20272/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };