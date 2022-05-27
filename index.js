
//The main div containing the list of complaints

const complaints = document.getElementById('complaints')
const rowLimit =document.getElementById('rowLimit')
//Variables to hold the values of borough and row limit chosen by user 

let borough ='MANHATTAN'
let limit = 10

 // The Form is a parent object holding the buttons for borough that the user can choose from

 const inputForm = document.getElementById('inputForm')
 inputForm.addEventListener('click',function(e){
   
    borough = e.target.innerHTML
    console.log(rowLimit.value)
    console.log(borough)
    if(rowLimit.value === '')  {
        limit=10
    }  
    else{ limit=rowLimit.value } 
    
    //Clearing the Complaints div befor each choice of borough
    complaints.innerHTML ="" 
    
    //Get the data based on the filters used
    
    fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough='+borough + '&$limit=' +limit + '&agency=NYPD')
    .then(response => response.json()) //parse the response (res) object to json
    
    .then(allData => 
        //Loop thru the data to get each record to work on
        allData.map((data)=>{
     
        //Creating a div to hold information about each complaint
         let complaintsSubDiv=document.createElement('div')
         complaints.appendChild(complaintsSubDiv)  
         //A div to hold descriptor and Button
           let newdiv = document.createElement('div')
            newdiv.id = "innerdiv"
            let p1 = document.createElement('p')
            p1.innerHTML= data.descriptor
            p1.style.width = "400px"
            p1.style.height = '50px'
       
            newdiv.appendChild(p1)
            complaints.appendChild(newdiv)
            complaints.style.fontFamily="Trebuchet MS"
            complaints.style.textAlign="left"

        let button1 = document.createElement('button')
        newdiv.appendChild(button1)
        button1.style.width="auto"
        button1.style.height="30px"
        button1.style.backgroundColor="#b5282d"
        button1.style.color="white"
        button1.style.fontWeight="bold"
        button1.style.borderRadius="8px"
        button1.style.padding="5px" 
        button1.textContent ="WHAT DID THE POLICE DO?"

        button1.addEventListener("mouseenter", function(event) {
            event.target.style.backgroundColor = "#d6b42d";

        setTimeout(function() {
            event.target.style.backgroundColor = "#b5282d";
        }, 500); 
        }, false);

    //Creating and listening to the toggle button which displays the resolution  
        
        let descp = document.createElement('p')
        newdiv.appendChild(descp) 
        descp.style.fontFamily="Trebuchet MS"

        let img = document.createElement('img')
        newdiv.prepend(img)
        img.src = "https://www.clipartmax.com/png/full/447-4472387_free-png-download-police-siren-clipart-png-photo-png-lies-and-deception.png" 
        img.style.height = "30px"
        img.style.width = "auto"
        img.style.margin = "10px"
            
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

