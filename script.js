'use strict';
const button = document.querySelector('.akardion'); 
const modal = document.querySelector('.list');      
const button1 = document.querySelector('.akardion1'); 
const modal1 = document.querySelector('.list1');  
const button2 = document.querySelector('.akardion2'); 
const modal2 = document.querySelector('.list2');  
button.addEventListener('click', () => {
        modal.classList.toggle('none'); 
    });
button1.addEventListener('click', () => {
    modal1.classList.toggle('none'); 
});
button2.addEventListener('click', () => {
    modal2.classList.toggle('none'); 
});