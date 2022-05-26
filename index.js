


fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
.then(response => response.json()) //parse the response (res) object to json
.then(data => console.log(data)) // json data
.catch(err => console.log(err)) // handling errors
