var hamburger = document.getElementsByClassName('hamburger')[0];
var cross = document.getElementsByClassName('crossicon')[0];
var navbar = document.getElementsByClassName('navbar')[0];

hamburger.addEventListener('click',()=>{
    navbar.classList.add('mbar');
    hamburger.style.display = "none";

});

cross.addEventListener('click',()=>{
    navbar.classList.remove('mbar');
    hamburger.style.display = "block";
});