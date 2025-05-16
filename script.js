
  
    function blastConfetti() {
      const end = Date.now() + 3000;
      (function frame() {
        confetti({
          particleCount: 7,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 7,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }

    function startCelebration() {
      document.getElementById("intro-screen").style.display = "none";
      document.getElementById("page-content").style.display = "block";
      document.getElementById("music-box").style.display = "block";
      document.getElementById("bg-music").play();
      blastConfetti();
    }
  
