let body = document.body;
let endPoint = "https://5f3f63a844212d0016feca2e.mockapi.io/songs";

let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

let form = document.createElement("form");
let nameInput = document.createElement("input");
nameInput.setAttribute("type","text");
nameInput.setAttribute("name","name");
nameInput.setAttribute("id","name");
nameInput.required = true;
let urlInput = document.createElement("input");
urlInput.setAttribute("type","text");
urlInput.setAttribute("name","url");
urlInput.setAttribute("id","url");
urlInput.required = true;
let btnSubmit = document.createElement("input");
btnSubmit.setAttribute("type","submit");
form.append(nameInput,urlInput,btnSubmit);
container.appendChild(form);

let songs = document.createElement("div");
songs.classList.add("songs");
container.appendChild(songs);

getData(endPoint)
.then(data =>{
    data.forEach(d =>{
        console.log(d.url);
        let song = document.createElement("div");
        let audio = document.createElement("audio");
        audio.setAttribute("src",d.url);
        audio.controls = true;
        let name = document.createElement("p");
        name.innerText = d.name;
        song.append(audio,name);
        songs.appendChild(song);
    })
})

btnSubmit.addEventListener('click',function(e){
    e.preventDefault();
    let nameVal = document.querySelector('#name').value;
    let urlVal = document.querySelector('#url').value;

    let data = {
        name: nameVal,
        url: urlVal
    }

    
    postData(endPoint,data)
    .then(async (data) => {
        let song = document.createElement("div");
        let audio = document.createElement("audio");
        audio.setAttribute("src",data.url);
        let name = document.createElement("p");
        name.innerText = data.name;
        song.append(audio,name);
        songs.appendChild(song);
    });
});


async function postData(url = '', data = {}) {
    
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return response.json(); 
  }

async function getData(url){
    const response = await(await fetch(url)).json();
    return response;
}
  