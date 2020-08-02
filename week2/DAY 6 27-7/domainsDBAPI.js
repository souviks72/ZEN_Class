const url = "https://api.domainsdb.info/v1/domains/search?=facebook&zone=com";

fetch(url,{
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin':'*'
      }
})
  .then(response => response.json())
  .then(data => console.log(data));