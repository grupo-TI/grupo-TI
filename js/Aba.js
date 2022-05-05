var open = document.querySelector('#open');
var Aba = document.querySelector('#Aba');
var html = document.querySelector('html');

var opensty = open.style;
var htmlsty = html.style;
var Abastyle = Aba.style;


open.addEventListener('click',AbaOn);

function AbaOn(){
  Abastyle.width = '80%';
  opensty.transform = 'rotate(45deg)';
  htmlsty.overflow = 'hidden';
  open.addEventListener('click',AbaOff);
  open.removeEventListener('click',AbaOn);
  
}

function AbaOff(){
  Abastyle.width = '0%';
  opensty.transform = 'rotate(0deg)';
  htmlsty.overflow = 'scroll';
  open.addEventListener('click',AbaOn);
  open.removeEventListener('click',AbaOff);
}


//padding: 65px 0px 0px 10px;
