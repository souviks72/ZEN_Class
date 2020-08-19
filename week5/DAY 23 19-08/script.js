//b1d4ae4de248a2bd1dd8f6fc57931244
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=b1d4ae4de248a2bd1dd8f6fc57931244

let body = document.body;
let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

let restCountries = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json';

let countries = null;

let fetchData = async (url) => {
    let data = await( await fetch(url)).json();
    return data;
}

fetchData(restCountries).then(data => {
    let countries = data;
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(let i=0;i<data.length;i++){
        let {name,capital,flag,region,latlng} = countries[i];
        let code = countries[i]["alpha2Code"];
        if(i!==0 && i%4===0){
            row = document.createElement("div");
            row.classList.add("row");
            container.appendChild(row);
        }
    
        let card = document.createElement("div");
        card.classList.add("card");
        row.appendChild(card);

        let h3 = document.createElement("h5");
        h3.innerText = name;
        card.appendChild(h3);

        let img = document.createElement("img");
        img.setAttribute("src",flag);
        card.appendChild(img);

        let ul = document.createElement("ul");
        card.appendChild(ul);

        let li1 = document.createElement("li");
        li1.innerText = `Capital: ${capital}`;
        let li2 = document.createElement("li");
        li2.innerText = `Capital: ${region}`;
        let li3 = document.createElement("li");
        li3.innerText = `Capital: ${code}`;
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);

        let btn = document.createElement("button");
        btn.innerText = "Get Weather";
        card.appendChild(btn);

        btn.addEventListener('click',async function(e){
            let data = await( await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=b1d4ae4de248a2bd1dd8f6fc57931244`)).json();
            let weather = data.weather[0].description;
            alert(`The weather is ${weather}`);
        })
    }

}).catch(err => {
    console.log(err);
})

