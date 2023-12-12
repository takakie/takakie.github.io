var posts=["posts/42355/","posts/12418/","posts/50056/","posts/16786/","posts/9111/","posts/38963/","posts/13908/","posts/64555/","posts/58107/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };