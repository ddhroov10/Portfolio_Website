particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  
var typed = new Typed('.type', {
    strings: ["Developer!",
              "Designer?",
              "Sports Fanatic!"],
    // smartBackspace: true // Default value
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

function PlayGameSound(soundobj, int_num) {
  // document.write(int_num);
  var thissound=document.getElementById(soundobj);
  thissound.play();
  
  if(int_num == 1){
    document.getElementById("game_project1").style.transform = "scale(1.1,1.1)";
  }
  if(int_num == 2){
    document.getElementById("game_project2").style.transform = "scale(1.1,1.1)";
  }
  if(int_num == 3){
    document.getElementById("game_project3").style.transform = "scale(1.1,1.1)";
  }
  
}

function StopGameSound(soundobj, int_num) {
  var thissound=document.getElementById(soundobj);
  thissound.pause();
  if(int_num == 1){
    document.getElementById("game_project1").style.transform = "scale(1,1)";
  }
  if(int_num == 2){
    document.getElementById("game_project2").style.transform = "scale(1,1)";
  }
  if(int_num == 3){
    document.getElementById("game_project3").style.transform = "scale(1,1)";
  }
  // thissound.currentTime = 0;
}

