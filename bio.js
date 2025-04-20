 // Current year for footer
 document.getElementById('year').textContent = new Date().getFullYear();

 // Navbar scroll effect
 window.addEventListener('scroll', function() {
     const header = document.getElementById('header');
     if (window.scrollY > 100) {
         header.classList.add('scrolled');
     } else {
         header.classList.remove('scrolled');
     }
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Mobile menu toggle
 const hamburger = document.getElementById('hamburger');
 const navMenu = document.getElementById('nav-menu');
 
 hamburger.addEventListener('click', function() {
     hamburger.classList.toggle('active');
     navMenu.classList.toggle('active');
 });

 // Close mobile menu when clicking a link
 document.querySelectorAll('.nav-link').forEach(link => {
     link.addEventListener('click', function() {
         hamburger.classList.remove('active');
         navMenu.classList.remove('active');
     });
 });

 // Skill card hover effect
 const skillCards = document.querySelectorAll('.skill-card');
 skillCards.forEach(card => {
     card.addEventListener('mouseenter', function() {
         const color = this.getAttribute('data-color');
         this.style.transform = 'translateY(-10px)';
         this.style.boxShadow = `0 15px 30px ${color}80`;
     });
     
     card.addEventListener('mouseleave', function() {
         this.style.transform = 'translateY(0)';
         this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
     });
 });

 // Form submission
 const contactForm = document.getElementById('contactForm');
 contactForm.addEventListener('submit', function(e) {
     e.preventDefault();
     alert('Thank you for your message! I will get back to you soon.');
     this.reset();
 });

 // Intersection Observer for animations
 const observerOptions = {
     threshold: 0.1
 };

 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('animate__animated', 'animate__fadeInUp');
             observer.unobserve(entry.target);
         }
     });
 }, observerOptions);

 document.querySelectorAll('.section, .skill-card, .project-card').forEach(section => {
     observer.observe(section);
 });