
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
           let complaintsDiv =document.createElement('div')
           complaintsDiv.id='complaintsDiv'
           complaints.appendChild(complaintsDiv)
           
           let newdiv = document.createElement('div')
            newdiv.id = "innerdiv"
            let p1 = document.createElement('p')
            p1.innerHTML= data.descriptor
                  
            newdiv.appendChild(p1)
            
            
            let button1 =document.createElement('button')
            button1.id = "descButton"
            button1.textContent ="What did the police do?"
            newdiv.appendChild(button1)
            complaintsDiv.appendChild(newdiv)

            let img = document.createElement('img')
        newdiv.prepend(img)
        img.src = "https://www.clipartmax.com/png/full/447-4472387_free-png-download-police-siren-clipart-png-photo-png-lies-and-deception.png" 
        img.style.height = "30px"
        img.style.width = "auto"
      
        //Creating and listening to the toggle button which displays the resolution   
        
            let descp = document.createElement('p')
            descp.id = 'descp'
            complaintsDiv.appendChild(descp) 
            
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


.catch(err => console.log(err))

})