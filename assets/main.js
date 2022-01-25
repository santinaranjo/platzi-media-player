import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const button = document.querySelector("#playButton");
const pauseButton = document.querySelector("#muteButton");

const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay()
] });

button.onclick = () => player.togglePlay();

pauseButton.onclick = () => player.toggleSound();
