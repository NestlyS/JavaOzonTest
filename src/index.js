'use strict';

const checkbox = document.getElementById('discount-checkbox');




checkbox.addEventListener('change',   function(){
    if (this.checked === true){
        this.nextElementSibling.classList.add("checked");
    } 
    if (this.checked === false){
        this.nextElementSibling.classList.remove("checked");
    }    
});

const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const modalCartClose = document.querySelector('.cart-close');

btnCart.addEventListener('click', function(){
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

modalCartClose.addEventListener('click', function(){
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
});

var counter = 0;
const count = document.querySelector('.counter');
const cartWrap = document.querySelector('.cart-wrapper');
const cards = document.querySelectorAll('.goods .card');
const cartEmpty = document.getElementById('cart-empty');
cards.forEach(function(card){
    const btn = card.querySelector('button');
    btn.addEventListener('click', function(){
        const cardClone = card.cloneNode(true);
        cartWrap.appendChild(cardClone);
        cartEmpty.remove();
        counter++;
        count.innerHTML = counter;

    });
});




/*const icon = document.querySelectorAll('.filter-check_checkmark');

console.dir(icon);

icon[0].addEventListener( 'click',   function(){
    if (checkbox.checked === true){
        this.classList.add("checked");
    } 
    if (checkbox.checked === false){
        this.classList.remove("checked");
    }    
});*/

