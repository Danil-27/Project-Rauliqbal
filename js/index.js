const btn = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const html = document.querySelector('#html__noscroll');
const links = menu.querySelectorAll(".menu__link");

let width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;


function debounce(originalFn, timeoutMs) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout); // clear timeout every time the function is called
    timeout = setTimeout(() => originalFn(...args), timeoutMs); // call the original function once "timeoutMs" ms after the last call have elapsed
  };
}

function handlerResize() {
  width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
}

window.addEventListener("resize", debounce(handlerResize, 500)); 

btn.addEventListener("click", () => {     // Если мы нажимаем на burger
  menu.classList.toggle("active");        // После нажития переопределяет класс
  btn.classList.toggle("active");         // После нажития переопределяет класс
  html.classList.toggle("noscroll");      // После нажития переопределяет класс
});

// Клик на пустую область 
menu.addEventListener("click", (e) => {         
   if (e.target.classList.contains("menu")) {   // contains() Этот метод при проверке наличия класса в списке возвращает булевы true или false .
      menu.classList.remove("active");          // Если True , то Закрываем класс  
      btn.classList.toggle("active");           // Если True , то переопределяет класс
      html.classList.toggle("noscroll");        // Если True , то переопределяет класс
   }
});

//плавный переход 
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
       const blockID = link.getAttribute("href").substring(1);
         document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
         });
      if (width < 992) {
         menu.classList.remove("active");   // После нажития на ссылку закрывает меню 
         btn.classList.toggle("active");    // После нажития переопределяет класс
         html.classList.toggle("noscroll"); // После нажития переопределяет класс
    } 
  });
});
//==================================================================================

