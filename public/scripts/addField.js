
let button = document.querySelector("#add-time")

button.addEventListener('click',cloneField)


function cloneField(){
    
     const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) // boolean 
     const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field){
        field.value = ""
    })
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}




