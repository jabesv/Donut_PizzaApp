


const manhattan = document.getElementById('manhattan')

const complaints = document.getElementById('complaints')
 let borough ='MANHATTAN'
 let limit = 10

fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough='+borough + '&$limit=' +limit)
.then(response => response.json()) //parse the response (res) object to json
//.then(data =>console.log(data))
.then(data => complaints.innerHTML= data[0].descriptor )

//.then(data => data => allInfo(data)) // json data
.catch(err => console.log(err))

