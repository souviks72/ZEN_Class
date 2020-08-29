var Song = /** @class */ (function () {
    function Song(a, b, c) {
        this.title = a;
        this.audioSrc = b;
        this.imgSrc = c;
    }
    return Song;
}());
var Playlist = /** @class */ (function () {
    function Playlist() {
        var _this = this;
        this.songList = new Array();
        fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598", {
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
                console.log(track.hub.actions);
                if (track.hub.actions) {
                    var song = new Song(track.title, track.hub.actions[1].uri, track.images.coveart);
                    var li = document.createElement("li");
                    li.innerText = song.title;
                    li.setAttribute("url", song.audioSrc);
                    _this.songList.push(li);
                }
            });
            var ul = document.querySelector('ul');
            ul.append.apply(ul, _this.songList);
        })["catch"](function (err) {
            console.log(err);
            //alert("Something went wrong!!"
        });
    }
    return Playlist;
}());
var ul = document.querySelector('ul');
var playList = new Playlist();
playList.songList.forEach(function (song) {
    ul.append(song);
});
ul.addEventListener('click', function (e) {
    var s = e.target;
    var player = document.querySelector('.player');
    var aud = document.createElement('audio');
    var source = document.createElement('source');
    source.src = s.getAttribute("url");
    aud.appendChild(source);
    aud.autoplay = true;
    aud.controls = true;
    if (player.hasChildNodes) {
        player.removeChild(player.lastChild);
    }
    player.appendChild(aud);
    console.log(aud);
});
