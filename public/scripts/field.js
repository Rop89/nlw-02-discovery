// Clones Schedule Field

function cloneField(){
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    let fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field){
        field.value = ""
    })
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
  
}

// Adds new field

function addButton(){
    let button = document.querySelector("#add-time")
    const selected = document.getElementById('select').selected
    console.log(selected)
    let scheduleItems = document.querySelector('#schedule-items')
    console.log(scheduleItems)
    let inputs = scheduleItems.querySelectorAll('input')
            if(selected == true || [...inputs].some(input=>input.value === "")){
            alert('Tem o dia ou a hora faltando nos Horários Disponíveis.')
            button.removeEventListener('click',cloneField)

        }else{            
            button.addEventListener('click',cloneField)
    }   
    }
// Removed field added if needed

let buttonRemove = document.querySelector('.remove-schedule-item')
buttonRemove.addEventListener('click',removeField)

function removeField(){
    let scheduleItem = document.querySelector('.schedule-item')
    scheduleItem.parentNode.removeChild(scheduleItem);

}








