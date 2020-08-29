// class Song{
//     audioSrc: string;
//     name: string;
//     coverImage: string;

//     constructor(a: string,n: string,c: string){
//         this.audioSrc = a;
//         this.name = n;
//         this.coverImage = c;

//         let ul = document.querySelector('ul');
//         let li = document.createElement('li');
//         li.classList.add('list-group-item');
//         li.innerText = name;
//         li.setAttribute("data-url",this.audioSrc);

//         li.addEventListener('click',(e: Event)=>{
//             let aud = document.querySelector('audio');
//             let source = document.createElement('source');
//             source.setAttribute('src',this.audioSrc);
//             aud.autoplay = true;
//             console.log(this,"event");
//         })
//         ul.appendChild(li);
//         console.log(li);
//     }
// }

// let player = document.querySelector('.player');
// let aud = document.createElement('audio');
// aud.controls = true;
// player.appendChild(aud);  

// fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "shazam.p.rapidapi.com",
// 		"x-rapidapi-key": "d53d8b2c53msh0564164c7981af7p165686jsna8ca2a15ede4"
// 	}
// })
// .then(response => {
// 	return response.json();
// })
// .then(data =>{
//     data.tracks.forEach(song=>{
//         // let url = song.url;
//         // let name = song.title;
//         // let art = song.images.coverart;
//         // new Song(url,name,art);
//         let ul = document.querySelector('ul');
//         let li = document.createElement('li');
//         li.classList.add('list-group-item');
//         li.innerText = song.title;
//         li.setAttribute("data-url",song.url);
//         ul.appendChild(li);
        
//     })
// })
// .catch(err => {
// 	console.log(err);
// });
