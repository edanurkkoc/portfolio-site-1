// typing animation
var typed=new Typed(".typing",{
    strings:["Web Designer","Web Developer","Graphics Designer"],
    typeSpeed:200,
    BackSpeed:60,
    loop:true,
})

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        // Aktif sınıfını kaldır
        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // Tıklanan linke aktif sınıfını ekle
        this.classList.add('active');
      });
    });
  });
