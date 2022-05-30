console.log("Welcome to spotify");
let songIndex = 1;
let audioElement= new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
console.log(masterSongName);

let songs = [
    {songName: "A", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "B", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "C", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "D", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "E", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "F", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "G", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "H", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "I", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "J", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},

]

songItems.forEach((element,i) => {
    let audio= new Audio(songs[i].filePath);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    element.getElementsByClassName('timestamp')[0].innerText = Number(audio.duration);
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
    myProgressBar.value = progressValue;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        //console.log(songIndex);
        gif.style.opacity = 1;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })

})

document.getElementById('previous').addEventListener('click', () => {
    if(songIndex <= 1){
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('next').addEventListener('click', () => {
    if(songIndex >= 10){
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})