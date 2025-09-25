
(function(){
  var btn = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.topbar nav');
  if(!btn || !nav) return;
  btn.addEventListener('click', function(){
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ nav.classList.remove('open'); });
  });
})();
