var sound = new Howl({
  src: ["/images/background_music.mp3"],
  autoplay: true,
  loop: true,
  onplay: function () {
    console.log("PLAYING ... ");
  },
  onpause: function () {
    console.log("PAUSED ... ");
  },
  onend: function () {
    console.log("ENDED ...");
  },
});
let muteBtnEl = document.querySelector(".mute");
let unmuteBtnEl = document.querySelector(".unmute");

sound.once("load", function () {
  muteBtnEl.style.display = "inline";
  sound.play();
});

muteBtnEl.addEventListener("click", function () {
  console.log("in mute button");
  sound.mute(true);
  muteBtnEl.style.display = "none";
  unmuteBtnEl.style.display = "inline";
});

unmuteBtnEl.onclick = function () {
  sound.mute(false);
  unmuteBtnEl.style.display = "none";
  muteBtnEl.style.display = "inline";
};
