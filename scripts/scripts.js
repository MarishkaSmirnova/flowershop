
//responsive navbar
const body = document.body;
const btn = document.querySelector('.btn-menu');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});

//hamburger button
function myFunction(x) {
    x.classList.toggle("change");
  }