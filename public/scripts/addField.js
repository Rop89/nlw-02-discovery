function cloneField(){
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    let fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field){
        field.value = ""
    })
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
  
}

function addButton(){
    const selected = document.getElementById('select').selected
    console.log(selected)
    const scheduleItems = document.querySelector('#schedule-items')
    console.log(scheduleItems)
    let inputs = scheduleItems.querySelectorAll('input')
    inputs.forEach(function(input){
        if(selected == true || input.value == ""){
            alert('Please select a day and time of the week')
        }else{
            let button = document.querySelector("#add-time")
            button.addEventListener('click',cloneField)
    }   
    })
    }
            






