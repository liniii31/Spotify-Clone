let play_pause = document.getElementById('master-play');
let play_bar = document.getElementById('playing');
let audioElement = new Audio();
let i = 0;
let songs = [
    './songs/1.mp3',
    './songs/2.mp3',
    './songs/3.mp3',
    './songs/4.mp3',
    './songs/5.mp3',
    './songs/6.mp3',
    './songs/7.mp3',
    './songs/8.mp3',
    './songs/9.mp3',
    './songs/10.mp3'
]
let songsName = [
    "Legions",
    "Trap",
    "They Mad",
    "Rich The Kid",
    "Name",
    "The Safety Dance",
    "Back It Up",
    "True Love",
    "Legions",
    "Legions",
]

function makeAllPlay() {
    Array.from(document.getElementsByClassName('song')).forEach(element => {

        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    });
}

play_pause.addEventListener('click', function () {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        play_pause.classList.remove('fa-circle-play');
        play_pause.classList.add('fa-circle-pause');
        document.getElementById('playing-gif').style.opacity = 1;
    } else {
        audioElement.pause();
        play_pause.classList.remove('fa-circle-pause');
        play_pause.classList.add('fa-circle-play');
        document.getElementById('playing-gif').style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', function () {
    let progress = audioElement.currentTime / audioElement.duration * 100;
    play_bar.value = progress;
})

play_bar.addEventListener('change', function () {
    audioElement.currentTime = (play_bar.value * audioElement.duration) / 100;
})

Array.from(document.getElementsByClassName('song')).forEach(element => {
    element.addEventListener('click', function (e) {
        i = parseInt(e.target.id);
        makeAllPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        play_pause.classList.remove('fa-circle-play');
        play_pause.classList.add('fa-circle-pause');
        audioElement.src = songs[i];
        audioElement.currentTime = 0;
        audioElement.play();
        document.getElementById('song-name').innerText = songsName[i];
        document.getElementById('playing-gif').style.opacity = "1";
    })
});

document.getElementById('prev').addEventListener('click', function () {
    if (i <= 0) {
        i = 0;
    } else {
        i -= 1;
    }
    audioElement.src = songs[i];
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('song-name').innerText = songsName[i];
    document.getElementById('playing-gif').style.opacity = "1";
    makeAllPlay();
    document.getElementById(i.toString()).classList.remove('fa-circle-play');
    document.getElementById(i.toString()).classList.add('fa-circle-pause');
    play_pause.classList.remove('fa-circle-play');
    play_pause.classList.add('fa-circle-pause');
})

document.getElementById('forward').addEventListener('click', function () {
    if (i >= 7) {
        i = 0;
    } else {
        i += 1;
    }
    audioElement.src = songs[i];
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('song-name').innerText = songsName[i];
    document.getElementById('playing-gif').style.opacity = "1";
    makeAllPlay();
    document.getElementById(i.toString()).classList.remove('fa-circle-play');
    document.getElementById(i.toString()).classList.add('fa-circle-pause');
    play_pause.classList.remove('fa-circle-play');
    play_pause.classList.add('fa-circle-pause');
})