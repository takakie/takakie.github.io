var posts=["posts/49984/","posts/42904/","posts/42355/","posts/50056/","posts/17531/","posts/12418/","posts/16786/","posts/47497/","posts/9111/","posts/54173/","posts/24779/","posts/38963/","posts/29310/","posts/13908/","posts/64555/","posts/58107/","posts/52505/","posts/5706/","posts/18208/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };