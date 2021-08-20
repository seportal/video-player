var video = document.querySelector('#video');
var play = document.querySelector('#play');
var pause = document.querySelector('#pause');
var backward = document.querySelector('#backward');
var forward = document.querySelector('#forward');
var progress = document.querySelector('#progress');

play.addEventListener('click', handlePlay);

function handlePlay() {
    video.play();
    play.hidden = true;
    pause.hidden = false;
}

pause.addEventListener('click', handlePause);

function handlePause() {
    video.pause();
    pause.hidden = true;
    play.hidden = false;
}

backward.addEventListener('click', handleBackward);

function handleBackward() {
    video.currentTime = video.currentTime - 10;
}

forward.addEventListener('click', handleForward);

function handleForward() {
    video.currentTime = video.currentTime + 10;
}

video.addEventListener('loadedmetadata', handleLoaded);

function handleLoaded() {
    progress.max = video.duration;
}

video.addEventListener('timeupdate', handleTimeUpdate);

function handleTimeUpdate() {
    progress.value = video.currentTime;
}

progress.addEventListener('input', handleInput);

function handleInput() {
    video.currentTime = progress.value;
}