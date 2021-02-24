particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  
var typed = new Typed('.type', {
    strings: ["Developer.",
              "Designer?",
              "Sports Fanatic."],
    // smartBackspace: true // Default value
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

