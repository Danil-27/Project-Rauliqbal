const btn = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const html = document.querySelector('#html__noscroll');
const width  = window.innerWidth  || document.documentElement.clientWidth || document.body.clientWidth;

console.log(width)

// Закрывает - откревыет меню бургер . Добоыляет к боди класс noscroll 
// if( menu && btn) {
//    btn.addEventListener('click', () => {
//       menu.classList.toggle('active')
//       btn.classList.toggle('active')
//       html.classList.toggle('noscroll')
//    })
// };

//Добавить проверку на ширину !

//Клик на пустую область 

// menu.addEventListener('click', e => {
//    if (e.target.classList.contains('menu')) {
//       menu.classList.remove('active')
//       btn.classList.toggle('active')
//       html.classList.toggle('noscroll')
//    }

// })

if (width<992){
// Закрывает - откревыет меню бургер . Добоыляет к боди класс noscroll 2
   if ( menu && btn) {
   btn.addEventListener('click', () => {
      menu.classList.toggle('active')
      btn.classList.toggle('active')
      html.classList.toggle('noscroll')
   })
};
//Клик на пустую область 2
menu.addEventListener('click', e => {
   if (e.target.classList.contains('menu')) {
      menu.classList.remove('active')
      btn.classList.toggle('active')
      html.classList.toggle('noscroll')
   }
});
//Клик на ссылку закрывает бургер 2
   menu.querySelectorAll('.menu__link').forEach(link => {
   link.addEventListener('click' , () =>{
      menu.classList.remove('active')
      btn.classList.toggle('active')
      html.classList.toggle('noscroll')
   })
})
}

// //Клик на ссылку закрывает бургер 
//    menu.querySelectorAll('.menu__link').forEach(link => {
//    link.addEventListener('click' , () =>{
//       menu.classList.remove('active')
//       btn.classList.toggle('active')
//       html.classList.toggle('noscroll')
//    })
// })

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