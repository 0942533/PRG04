var sound = new Howl({
  src: ["audio/gamemusic.mp3"],
  autoplay: true,
  loop: true,
  volume: 0.5,
  onend: function() {
  }
});

sound.on("load", function() {
  var startButton = document.getElementsByTagName("startsong")[0];
  startButton.addEventListener("click", function() {
    // Is er op de startsong button geklikt en staat de muziek aan? -> muziek wordt op pauze gezet
    if (sound.playing()) {
      sound.pause();
    // Is er op de startsong button geklikt en staat de muziek op pauze? -> muziek wordt weer aangezet
    } else {
      sound.play();
    }
  });
});
