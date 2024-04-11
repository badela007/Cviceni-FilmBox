const menuTlacitko = document.querySelector('#menu-tlacitko');
const menu = document.querySelector('#menu-polozky');

const pridatShow = () => {
 menu.classList.toggle('show')
 if (menu.classList.contains('show') 
  ) {
    menuTlacitko.innerHTML = '<i class="fas fa-xmark"></i>';
} else {
    menuTlacitko.innerHTML = '<i class="fas fa-bars"></i>';
}
};

menuTlacitko.addEventListener('click', pridatShow);


