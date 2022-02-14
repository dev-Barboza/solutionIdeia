//ScroolPage
const menuItens = document.querySelectorAll('.navbar a[href^="#"]');

menuItens.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
  smoothScrollTo(0, to);
}


//Modal

var modalBtn = document.querySelector('.butoes');
var modalBg =document.querySelector('.modalBg');
var modalClose = document.querySelector('.modalClose');

modalBtn.addEventListener('click',function(){
  modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
});


///Conteudo Modal

function evento() {
  document.getElementById("buttonEventos").click();
  document.getElementById('resposta').innerHTML = 'Bem-vindo(a) á seção de eventos ';
};

function usuario() {
  document.getElementById("buttonUsuarios").click();
  document.getElementById('resposta').innerHTML = 'Bem-vindo(a) á seção de usuários !'
}

function relatorio() {
  document.getElementById("buttonRelatorios").click();
  document.getElementById('resposta').innerHTML = 'Bem-vindo(a) á seção de relatórios !'
}

const buttons = document.querySelectorAll('.individualButton');
buttons.forEach(btn => {
  btn.addEventListener('click', function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
  })
})

//Responsividade Menu
const navbar = document.querySelector('.navbar');
const button = document.querySelector('.mobileButton');
const closeButton = document.querySelector('.mobileButton').children[0];

button.addEventListener('click', () => {
  navbar.classList.toggle('active')
  closeButton.classList.toggle(".navbar a")
}) 