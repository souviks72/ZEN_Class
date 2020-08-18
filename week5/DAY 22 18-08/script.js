function makeRequest (method, url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            //console.log(xhr.response);
            resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send();
    });
  }

let submit = document.querySelector('button');
let container = document.querySelector('.container');

submit.addEventListener('click',function(e){
    submit.style.display = 'none';
    makeRequest('get', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
    .then(function (data) {
        return JSON.parse(data);
    })
    .then(function(countries){
      console.log(countries);
      let k = Object.keys(countries);
      for(let i=0;i<countries.length;i++){
        let country = countries[i];

        let {name,region,capital,flag} = country;
        if(i==0)
          console.log(country);
        let card = document.createElement("div");
        card.classList.add("card");
        let img = document.createElement("img");
        
        img.setAttribute("src",flag);
        card.appendChild(img);
        let cardBody = document.createElement("div");
        card.classList.add("card-body");
        card.appendChild(cardBody);
        let hName = document.createElement("h5");
        hName.innerText = name;
        hName.classList.add('card-title');
        cardBody.appendChild(hName);
        let hregion = document.createElement("h6");
        hregion.innerText = region;
        hregion.classList.add('card-title');
        cardBody.appendChild(hregion);
        let hc = document.createElement("h6");
        hc.innerText = capital;
        hc.classList.add('card-title');
        cardBody.appendChild(hc);

        container.appendChild(card);
      }
      
    })
    .catch(function (err) {
        console.error('Augh, there was an error!', err.statusText);
    });
});