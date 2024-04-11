const pridatShow = () => {
  document.querySelector('#menu-polozky').classList.toggle('show');
};

document.querySelector('#menu-tlacitko').addEventListener('click', pridatShow);
