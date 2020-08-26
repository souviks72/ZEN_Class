var television = /** @class */ (function () {
    function television(l, dv, dc, mv, mc, cc) {
        this.link = l;
        this.defaultVolume = dv;
        this.defaultChannel = dc;
        this.maxVolume = mv;
        this.maxChannel = mc;
        this.currentChannel = cc;
        var tvScreen = document.querySelector('.screen');
        var vid = document.createElement('video');
        vid.controls = false;
        vid.autoplay = true;
        vid.setAttribute("height", "300px");
        vid.setAttribute("width", "500px");
        var source = document.createElement('source');
        source.setAttribute('src', this.link);
        vid.appendChild(source);
        if (tvScreen.children.length > 0) {
            console.log(tvScreen.children.length);
            tvScreen.removeChild(tvScreen.lastChild);
            tvScreen.prepend(vid);
        }
        else {
            tvScreen.appendChild(vid);
        }
    }
    return television;
}());
var channels = ['v4.mp4', 'v5.mp4', 'v1.mp4', 'v2.mp4', 'v3.mp4'];
var currentChannel = 0;
var maxChannel = channels.length;
var tv = new television(channels[currentChannel], 1, 1, 1, 1, 0);
var nextBtn = document.querySelector('#next');
var prevBtn = document.querySelector('#prev');
var up = document.querySelector('#up');
var down = document.querySelector('#down');
down.addEventListener('click', function (e) {
    var vid = document.querySelector('video');
    var vol = vid.volume;
    if (vol >= 0.1) {
        vid.volume -= 0.1;
        console.log(vid.volume);
    }
    else {
        alert("You are already on mute");
    }
});
up.addEventListener('click', function (e) {
    var vid = document.querySelector('video');
    var vol = vid.volume;
    if (vol <= 0.9) {
        vid.volume += 0.1;
        console.log(vid.volume);
    }
    else {
        alert("Volume is already at max");
    }
});
nextBtn.addEventListener('click', function (e) {
    currentChannel = (currentChannel + 1) % maxChannel;
    tv = new television(channels[currentChannel], 1, 1, 1, 1, currentChannel);
});
prevBtn.addEventListener('click', function (e) {
    currentChannel = Math.abs((currentChannel - 1) % maxChannel);
    tv = new television(channels[currentChannel], 1, 1, 1, 1, currentChannel);
});
