//MOBILE NAVIGATION MENU

const menuButton=document.querySelector(".menu-button");
const navLinks=document.querySelector(".nav-links");

//Open and close mobile menu

menuButton.addEventListener("click",function(){
    navLinks.classListtoggle("active");
});

//Close menu after clicking a navigation link
const navigationLinks=document.querySelectorAll(".nav-links a");
navigationLinks.forEach(function(link){link.addEventListener("click",function(){
    navLinks.classList.remove("active");
});

});

//CONTACT FORM
const contactForm=document.querySelector(".contact-form");
contactForm.addEventListener("submit",function(event){
    event.preventDefault();
    alert("Thank you! Your message has been received.");
    contactForm.reset();
});