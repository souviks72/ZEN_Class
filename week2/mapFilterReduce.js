fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(data => {
    let asianCountries = data.filter(country => country.region === 'Asia');
    let lessPopulated = data.filter(country => country.population < 200000);
    let bumPopulation = data.map(country => country.population + 100000);
    data.forEach(country => {
        console.log(`Name: ${country.name}`);
        console.log(`Name: ${country.capital}`);
        console.log(`Name: ${country.flag}`);
    });

    let totalPopulation = data.reduce((acc,next) => { return next.population + acc},0);
    let totalAsianPop = data.filter(country => country.region === 'Asia').reduce((acc,next)=> {return next.population + acc},0);
});

