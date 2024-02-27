//Dom
let innerButton = document.querySelector('.menu');
let nav = document.querySelector('.nav');
let outerButton = document.querySelector('.secend-button');

innerButton.addEventListener('click' , function(){

  innerButton.classList.toggle('plytible');
  nav.classList.add('get-width');
  
})

outerButton.addEventListener('click' , function(){

  innerButton.classList.remove('plytible')
  nav.classList.remove('get-width');

})

let images = document.images;
let ModalsIn = document.querySelectorAll('.content-cont');

for(let i = 0; i < images.length; i++){

  images[i].addEventListener('click' , function(){

    images[i].classList.toggle('transformed-on-click');
    ModalsIn[i].classList.toggle('width-for-con-content');
  
  })

}