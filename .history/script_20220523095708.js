console.log("Welcome to spotify");
let songIndex = 0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = document.getElementById('songItem');

let songs = [
    {songName: "Let me Love You", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Let me Love You", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Let me Love You", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Let me Love You", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Let me Love You", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Let me Love You", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Let me Love You", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Let me Love You", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Let me Love You", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},

]

songItems.forEach(element => {
    element.getElementsByTagName('img')[0].src = songs[i].filePath;
});

//Handle Pause/Play
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=> {
    let progressValue = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progressValue);
    myProgressBar.value = progressValue;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})
