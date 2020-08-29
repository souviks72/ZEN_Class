var Song = /** @class */ (function () {
    function Song(a, b, c) {
        this.title = a;
        this.audioSrc = b;
        this.imgSrc = c;
    }
    return Song;
}());
var Playlist = /** @class */ (function () {
    function Playlist(url) {
        var _this = this;
        this.songList = new Array();
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "shazam.p.rapidapi.com",
                "x-rapidapi-key": "d53d8b2c53msh0564164c7981af7p165686jsna8ca2a15ede4"
            }
        })
            .then(function (response) {
            return response.json();
        }).then(function (data) {
            var tracks = data.tracks;
            tracks.forEach(function (track) {
                //console.log(track.hub.actions);
                if (track.hub.actions) {
                    console.log(track.title);
                    var song = new Song(track.title, track.hub.actions[1].uri, track.images.coverart);
                    var li = document.createElement("li");
                    var songDiv = document.createElement("div");
                    songDiv.classList.add("songDiv");
                    var img = document.createElement("img");
                    img.setAttribute("src", song.imgSrc);
                    img.style.width = "100px";
                    img.style.height = "100px";
                    var h4 = document.createElement("h6");
                    h4.innerText = song.title;
                    songDiv.append(img, h4);
                    //li.append(img,h4);
                    li.appendChild(songDiv);
                    li.setAttribute("url", song.audioSrc);
                    _this.songList.push(li);
                }
            });
            var ul = document.querySelector('ul');
            if (ul.hasChildNodes)
                ul.innerHTML = "";
            ul.append.apply(ul, _this.songList);
            var lis = document.querySelectorAll('li');
            lis.forEach(function (li) {
                li.addEventListener('click', function (e) {
                    console.log(e.target);
                    console.log(li.getAttribute("url"));
                    var player = document.querySelector('.player');
                    var aud = document.createElement('audio');
                    var source = document.createElement('source');
                    source.src = li.getAttribute("url");
                    aud.appendChild(source);
                    aud.autoplay = true;
                    aud.controls = true;
                    if (player.hasChildNodes) {
                        player.removeChild(player.lastChild);
                    }
                    player.appendChild(aud);
                });
            });
        })["catch"](function (err) {
            console.log(err);
        });
    }
    return Playlist;
}());
var ul = document.querySelector('ul');
var btns = document.querySelector('.buttons');
var btn1 = document.createElement("button");
btn1.setAttribute('url', 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598');
btn1.innerText = "Top Tracks";
var btn2 = document.createElement("button");
btn2.setAttribute('url', 'https://shazam.p.rapidapi.com/songs/list-recommendations?locale=en-US&key=484129036');
btn2.innerText = "Recommendations";
btns.append(btn1, btn2);
var buttons = [btn1, btn2];
btn1.addEventListener('click', function (e) {
    console.log(btn1.getAttribute('url'));
    new Playlist(btn1.getAttribute('url'));
});
btn2.addEventListener('click', function (e) {
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
