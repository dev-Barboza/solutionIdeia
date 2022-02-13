//ScroolPage
const menuItems = document.querySelectorAll('.navbar a[href^="#"]');
//Verifica de foi clicado 
menuItems.forEach(item => {
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
    // window.scroll({
    //   top: to,
    //   behavior: "smooth",
    // });
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

