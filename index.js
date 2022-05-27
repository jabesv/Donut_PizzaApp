
const manhattan = document.getElementById('manhattan')

const complaints = document.getElementById('complaints')
 let borough ='MANHATTAN'
 let limit = 10
 const inputForm = document.getElementById('inputForm')
 inputForm.addEventListener('click',function(e){
    
    borough = e.target.innerHTML
    complaints.innerHTML ="" 

fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough='+borough + '&$limit=' +limit + '&agency=NYPD')
.then(response => response.json()) //parse the response (res) object to json
//.then(data =>console.log(data))
.then(allData => 
    allData.map((data)=>{
      
        let newdiv = document.createElement('div')
        newdiv.id = "innerdiv"
        let p1 = document.createElement('p')
        p1.innerHTML= data.descriptor
        p1.style.width = "400px"
        p1.style.height = '50px'
       
        newdiv.appendChild(p1)
        complaints.appendChild(newdiv)

        let button1 =document.createElement('button')
        newdiv.appendChild(button1)
        button1.style.width="200px"
        button1.style.height="20px"
        button1.textContent ="What did the police do?"
        
        let descp = document.createElement('p')
        newdiv.appendChild(descp) 
            
        button1.addEventListener('click',function() {
            if(descp.innerHTML ===""){
          
            descp.innerHTML= data.resolution_description
            }
            else{
                descp.innerHTML =""
            }
           
        })


    }
    ))
 })
//.then(data => data => allInfo(data)) // json data
.catch(err => console.log(err))

