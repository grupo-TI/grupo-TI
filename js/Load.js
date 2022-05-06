
var Load = document.querySelector('#Load');
var loading = document.querySelectorAll('.Loading')


function Loader(){
  loading[0].style.animation = `Load 1s ease-in-out forwards 0s`;
  loading[1].style.animation = `Load 1s ease-in-out forwards .5s`;
  loading[2].style.animation = `Load 1s ease-in-out forwards 1s`;
  
  setTimeout(() => {
    loading[0].style.animation = `none`;
    loading[1].style.animation = `none`;
    loading[2].style.animation = `none`;
  },2000);
  
  setTimeout(Loader,2100);
  
}

function ClearLoader(){
  Load.style.opacity = '0';
  Load.style.transition = '.3s ease-in-out 1s';
  setTimeout(()=>{
    Load.style.display = 'none';
  },1400)
}

setTimeout(Loader,0);
