$(document).ready(function () {             

$('.hamburger').on('click', function(event){
       $('.hamburger').hide();
       $('.nav-top').show();
}) 

$('.nav-top .cross').on('click', function (event) {
    $('.hamburger').show();
    $('.nav-top').hide();
})


});