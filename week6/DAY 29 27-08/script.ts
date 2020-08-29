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
    constructor(url: string){
        this.songList = new Array();
        fetch(url, {
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
                //console.log(track.hub.actions);
                if(track.hub.actions){
                    console.log(track.title);
                    let song = new Song(track.title,track.hub.actions[1].uri,track.images.coverart);
                    let li = document.createElement("li");

                    let songDiv = document.createElement("div");
                    songDiv.classList.add("songDiv");
                    let img = document.createElement("img");
                    img.setAttribute("src",song.imgSrc);
                    
                    img.style.width = "100px";
                    img.style.height = "100px";
                    let h4 = document.createElement("h6");
                    h4.innerText = song.title;
                    songDiv.append(img,h4);
                    //li.append(img,h4);
                    li.appendChild(songDiv);
                    li.setAttribute("url",song.audioSrc);
                    this.songList.push(li);
                } 
            });
            let ul = document.querySelector('ul');
            if(ul.hasChildNodes)
                ul.innerHTML="";
            ul.append(...this.songList);
            let lis = document.querySelectorAll('li');

            lis.forEach(li=>{
                li.addEventListener('click',(e: Event)=>{
                    console.log(e.target);
                    console.log(li.getAttribute("url"));
                    let player = document.querySelector('.player');
                    let aud = document.createElement('audio');
                    let source = document.createElement('source');
                    source.src = li.getAttribute("url");
                    aud.appendChild(source);
                    aud.autoplay = true;
                    aud.controls = true;
                    if(player.hasChildNodes){
                        player.removeChild(player.lastChild);
                    }
                    player.appendChild(aud);
                });
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

let ul = document.querySelector('ul')!;

let btns = document.querySelector('.buttons') as HTMLDivElement;
let btn1 = document.createElement("button");

btn1.setAttribute('url','https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598');
btn1.innerText = "Top Tracks";

let btn2 = document.createElement("button");

btn2.setAttribute('url','https://shazam.p.rapidapi.com/songs/list-recommendations?locale=en-US&key=484129036');
btn2.innerText = "Recommendations";
btns.append(btn1,btn2);
let buttons = [btn1,btn2];


btn1.addEventListener('click',(e: Event)=>{
    console.log(btn1.getAttribute('url'));
    new Playlist(btn1.getAttribute('url'));
});

btn2.addEventListener('click',(e: Event)=>{
    console.log(btn2.getAttribute('url'));
    new Playlist(btn2.getAttribute('url'));
});


new Playlist('https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598');



// ul.addEventListener('click',(e: Event)=>{
//     let s = e.target as HTMLLIElement;
    
//     console.log(s);
    // let player = document.querySelector('.player');
    // let aud = document.createElement('audio');
    // let source = document.createElement('source');
    // source.src = li.getAttribute("url");
    // aud.appendChild(source);
    // aud.autoplay = true;
    // aud.controls = true;
    // if(player.hasChildNodes){
    //     player.removeChild(player.lastChild);
    // }
    // player.appendChild(aud);
    //console.log(aud);
// })

