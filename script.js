
 


let myAudio = document.getElementById("myAudio");
let audios = document.querySelectorAll(".box");
myAudio.currentTime = 10;

    


function togglePlay() {
  if (myAudio.paused) {
    myAudio.play();
    for (const audio of audios) {
      audio.style.animationIterationCount = "infinite";
    }
  } else {
    myAudio.pause();
    for (const audio of audios) {
      audio.style.animationIterationCount = "unset";
    }
  }
}


let nav = $("nav");
var lastScrollTop = 0;
window.addEventListener('scroll', function() {
var st = window.scrollY || document.documentElement.scrollTop;
if (st > lastScrollTop) {
    // scorri verso il basso
    nav.addClass('hide');
} else {
    // scorri verso l'alto
    nav.removeClass('hide');
}
lastScrollTop = st;
});

