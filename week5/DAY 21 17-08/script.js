let h1 = document.querySelector('h1');
let time = 10;

setTimeout(()=>{
    h1.innerText = time;
    time--;
    setTimeout(()=>{
        h1.innerText = time;
        time--;
        setTimeout(()=>{
            h1.innerText = time;
            time--;
            setTimeout(()=>{
                h1.innerText = time;
                time--;
                setTimeout(()=>{
                    h1.innerText = time;
                    time--;
                    setTimeout(()=>{
                        h1.innerText = time;
                        time--;
                        setTimeout(()=>{
                            h1.innerText = time;
                            time--;
                            setTimeout(()=>{
                                h1.innerText = time;
                                time--;
                                setTimeout(()=>{
                                    h1.innerText = time;
                                    time--;
                                    setTimeout(()=>{
                                        h1.innerText = time;
                                        time--;
                                        setTimeout(()=>{
                                            h1.innerText = "Happy New Year";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);