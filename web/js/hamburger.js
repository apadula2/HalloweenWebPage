/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var menu = document.querySelector("#hamburger");
var drawer = document.querySelector('.horizontal');


menu.addEventListener('click', function(e){
  drawer.classList.toggle('open');
  e.stopPropagation();
  e.preventDefault();
});
