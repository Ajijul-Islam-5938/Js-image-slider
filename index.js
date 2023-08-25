let slider = document.querySelectorAll('img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');


let count = 0;

next.addEventListener('click',()=>{
  count ++;
  count > slider.length -1 ? count = 0 : count ++; 
  slide();
});

prev.addEventListener('click',()=>{
  count --;
    count < 0 ? count = slider.length -1 : count --; 
  slide();
});

function slide(){
  slider.forEach((elm)=>{
    elm.style.transform = `translateX(-${count * 50}%)`;
  })
}
setInterval(()=>{
  next.click();
},7000)