//drowplist
let btn_menu=document.querySelector('.menu');
let nav=document.querySelector('nav');
let brand=document.querySelector('.brand');

btn_menu.addEventListener('click',(e)=>{

    nav.classList.toggle('drowpdown')
    brand.classList.toggle('bg-brand');
    console.log(nav)
})