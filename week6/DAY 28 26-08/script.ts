class television{
    link: string;
    defaultVolume: number;
    defaultChannel: number;
    maxVolume: number;
    maxChannel: number;
    currentChannel: number;

    constructor(l: string,dv: number,dc: number,mv: number,mc: number,cc: number){
        this.link = l;
        this.defaultVolume = dv;
        this.defaultChannel = dc;
        this.maxVolume = mv;
        this.maxChannel = mc;
        this.currentChannel = cc;

        let tvScreen = document.querySelector('.screen') as HTMLDivElement;
        
        let vid = document.createElement('video');
        vid.controls = false;
        vid.autoplay = true;
        vid.setAttribute("height","300px");
        vid.setAttribute("width","500px");

        let source = document.createElement('source');
        source.setAttribute('src',this.link);
        vid.appendChild(source);

        if(tvScreen.children.length > 0){
            console.log(tvScreen.children.length);
            tvScreen.removeChild(tvScreen.lastChild);
            tvScreen.prepend(vid);
        }else{
            tvScreen.appendChild(vid);
        }
    }
}

let channels = ['v4.mp4','v5.mp4','v1.mp4','v2.mp4','v3.mp4']; 
let currentChannel = 0;
let maxChannel = channels.length;
let tv = new television(channels[currentChannel],1,1,1,1,0);

let nextBtn = document.querySelector('#next') as HTMLButtonElement;
let prevBtn = document.querySelector('#prev') as HTMLButtonElement;

let up = document.querySelector('#up') as HTMLButtonElement;
let down = document.querySelector('#down') as HTMLButtonElement;

down.addEventListener('click',(e: Event)=>{
    let vid = document.querySelector('video')!;
    let vol = vid.volume;
    if(vol >= 0.1){
        vid.volume -= 0.1;
        console.log(vid.volume);
    }else{
        alert("You are already on mute");
    }
});

up.addEventListener('click',(e: Event)=>{
    let vid = document.querySelector('video')!;
    let vol = vid.volume;
    if(vol <= 0.9){
        vid.volume += 0.1;
        console.log(vid.volume);
    }else{
        alert("Volume is already at max");
    }
});

nextBtn.addEventListener('click',(e: Event)=>{
   currentChannel = (currentChannel+1)%maxChannel;
   tv = new television(channels[currentChannel],1,1,1,1,currentChannel); 
});

prevBtn.addEventListener('click',(e: Event)=>{
    currentChannel = Math.abs((currentChannel-1)%maxChannel);
    tv = new television(channels[currentChannel],1,1,1,1,currentChannel); 
});

