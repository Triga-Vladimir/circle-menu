const menuBtn = document.querySelector('[has-ripple="true"]');
menuBtn.addEventListener('click', () => {
    console.log(document.querySelector(this));

    // document.querySelector(this).classList.toggle('clicked');
    document.querySelector('.menu').classList.toggle('open');
});

//   document.querySelector('.menu a').each((index) => {
//     const thismenuItem = document.querySelector(this);
//     console.log(this);
    
//     thismenuItem.click(function (event) {
//       event.preventDefault();
      
//       document.querySelector('.menuitem-wrapper').eq(index).classList.add('spin');
      
//       const timer = setTimeout(function () {
//         document.querySelector('body').removeAttr('class').classList.add('bg-'+index);
//         document.querySelector('.menuitem-wrapper').eq(index).removeClass('spin');
//         document.querySelector('.menu').removeClass('open');
//         document.querySelector('.menu-btn').removeClass('clicked');
//       }, 800);
//     });
//   });

