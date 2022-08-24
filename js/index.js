const btn = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const body = document.body;

// Закрывает - откревыет меню бургер . Добоыляет к боди класс noscroll 
if(menu && btn) {
   btn.addEventListener('click', () => {
      menu.classList.toggle('active')
      btn.classList.toggle('active')
      body.classList.toggle('noscroll')
   })
};

//Клик на пустую область 

menu.addEventListener('click', e => {
   if (e.target.classList.contains('menu')) {
      menu.classList.remove('active')
      btn.classList.toggle('active')
      body.classList.toggle('noscroll')
   }

})


//Клик на ссылку закрывает бургер 
menu.querySelectorAll('.menu__link').forEach(link => {
   link.addEventListener('click' , () =>{
      menu.classList.remove('active')
      btn.classList.toggle('active')
      body.classList.toggle('noscroll')
   })
})

//==================================================================================
//плавный переход 
const anchors = document.querySelectorAll('a[href*="#"')

anchors.forEach(anchors => {
   anchors.addEventListener('click' , event =>{
      event.preventDefault()

      const blockID = anchors.getAttribute('href').substring(1)

      document.getElementById(blockID).scrollIntoView({
         behavior:'smooth' ,
         block: 'start' 
      })
   })
})