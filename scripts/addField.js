
let button = document.querySelector("#add-time")

button.addEventListener('click',cloneField)


function cloneField(){
    
     const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) // boolean 
     
     const fields = newFieldContainer.querySelectorAll('input')
     fields[0].value=""
     fields[1].value=""

   
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}




