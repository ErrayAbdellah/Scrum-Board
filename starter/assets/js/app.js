/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
 let title = document.getElementById("titleIn");
 let type = document.querySelectorAll("input[name='Type']");
 let priority = document.getElementById("select1");
 let statuss = document.getElementById("select2");
 let date = document.getElementById("date");
 let description = document.getElementById("exampleFormControlTextarea1");
 let submit = document.getElementById("submit");
 
 let radio2 = document.getElementById('flexRadioDefault2');


 ////les classes
 let todo = document.getElementById("to-do-tasks");
 let progress = document.getElementById("n-progress-tasks");
 let done = document.getElementById("done-tasks");




 todo.innerHTML = "";
 progress.innerHTML = "";
 done.innerHTML = ' ';


















 
//  submit.onclick = function() {
//      let create ={
//          title:title.value,
//          selectType:selectType.value,
//          select1:select1.value,
//          select2:select2.value,
//          date:date.value,
//          description:description.value
//      }
 
//      console.log(create);
//  }

function createTask() {
    
  
    
    // Afficher le boutton save
    // if(title.value =='' && select1.selectedIndex == 0 &&  select2.selectedIndex == 0 && date.value=='' && description.value=='' )
    // submit.visible


    // Ouvrir modal form

    let radioChecked;
    for(const i of type)
    {
        if(i.checked)
        {
            radioChecked = i.value;
            break;
        };
    };
    let create =
            {
                 title:title.value,
                 type:radioChecked,
                 priority:priority.value,
                 status:statuss.value,
                 date:date.value,
                 description:description.value,
             }
            //  console.log(create);                                                                                                                                                                                                                                                                                                                                                                                                      
             tasks.push(create);  
             console.log(tasks);

// initialiser task form
             title.value = type.value   = date.value = description.value ='';
             select1.selectedIndex = 0 ;
             select2.selectedIndex = 0 ;
             
    
}

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    
}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}
function reloadTasks() {
    // Remove tasks elements
   

    // Set Task count
}