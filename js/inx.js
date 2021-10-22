const menuBtn = document.querySelector('[data-btn]');
const menuItem = document.querySelectorAll('.menuitem-wrapper');
const menuLinks = document.querySelectorAll('.menu a');

menuBtn.addEventListener('click', (e) => {
    menuBtn.classList.toggle('clicked');
    document.querySelector('.menu').classList.toggle('open');
});

menuItem.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    menuItem.forEach((btnItem, inx) =>{
        if(btnItem === btn){
        btnItem.classList.add('spin');

        const timer = setTimeout(() => {
          document.querySelector('body').removeAttribute('class');
          document.querySelector('body').classList.add('bg-'+inx);
          document.querySelector('.menu').classList.remove('open');
          btnItem.classList.remove('spin');
          menuBtn.classList.remove('clicked');
        }, 570);
      }
    })
  })
});
