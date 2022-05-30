console.log("Welcome to spotify");
let songIndex = 0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName: "Let me Love You", filePath: "", coverPath: "covers/1.jpg"},
    {songName: "Let me Love You", filePath: "", coverPath: "covers/1.jpg"},
    {songName: "Let me Love You", filePath: "", coverPath: "covers/1.jpg"},
    {songName: "Let me Love You", filePath: "", coverPath: "covers/1.jpg"},
    {songName: "Let me Love You", filePath: "", coverPath: "covers/1.jpg"},
    {songName: "Let me Love You", filePath: "", coverPath: "covers/1.jpg"},
]

//Handle Pause/Play
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
    }
})

myProgressBar.addEventListener('timeupdate', ()=> {

})
