let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('BX-X');
    navbar.classList.toggle('active');
};






let section = document.querySekectorAll('section');
let navLinks = document.querySekectorAll('header nav a');

window.onscroll = () =>{
    SpeechRecognitionResult.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop-150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top>= offset && top< offset + height){
        navLinks.forEach(link =>{
            navLinks.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });

    };
 });
    /*===============================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);


    menuIcon.classList.remove('BX-X');
    navbar.classList.remove('active'); 
};



ScrollReveal({
    //reset : true,
    distance: '80px',
    duration : 2000,
    delay: 200

});
ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin: 'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin: 'right'});


 const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Student','Biker'],
    typeSpeed:100,
    backSpeed:100,
    backSpeed:1000,
    loop: true
 });