class Song{
    title: string;
    audioSrc: string;
    imgSrc: string;
    constructor(a: string,b: string,c: string){
        this.title = a;
        this.audioSrc = b;
        this.imgSrc = c;
    }
}

class Playlist{
    songList: HTMLLIElement[];
    constructor(){
        this.songList = new Array();
        fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598", {
        	"method": "GET",
        	"headers": {
        		"x-rapidapi-host": "shazam.p.rapidapi.com",
        		"x-rapidapi-key": "d53d8b2c53msh0564164c7981af7p165686jsna8ca2a15ede4"
        	}
        })
        .then(response => {
        	return response.json();
        }).then(data =>{
            let {tracks} = data;
            tracks.forEach(track =>{
                console.log(track.hub.actions);
                if(track.hub.actions){
                    let song = new Song(track.title,track.hub.actions[1].uri,track.images.coveart);
                    let li = document.createElement("li");
                    li.innerText = song.title;
                    li.setAttribute("url",song.audioSrc);
                    this.songList.push(li);
                }
                
            });
            let ul = document.querySelector('ul');
            ul.append(...this.songList);
        })
        .catch(err=>{
            console.log(err);
            //alert("Something went wrong!!"
        })
    }
}

let ul = document.querySelector('ul')!;

let playList = new Playlist();
playList.songList.forEach(song=>{
    ul.append(song);
});

ul.addEventListener('click',(e: Event)=>{
    let s = e.target as HTMLLIElement;
    let player = document.querySelector('.player');
    let aud = document.createElement('audio');
    let source = document.createElement('source');
    source.src = s.getAttribute("url");
    aud.appendChild(source);
    aud.autoplay = true;
    aud.controls = true;
    if(player.hasChildNodes){
        player.removeChild(player.lastChild);
    }
    player.appendChild(aud);
    console.log(aud);
})
