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
 let progress = document.getElementById("in-progress-tasks");
 let done = document.getElementById("done-tasks");

 todo.innerHTML = "";
 progress.innerHTML = "";
 done.innerHTML = "";

    reloadTasks();




















 
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
    for(var i=0;i<tasks.length;i++)
    {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        reloadtask(i);
    }
    
}

function reloadtask(i)
{
   
    
    let cmpTodo = 0;
    let cmpProgresse = 0;
    let cmpDon = 0; 
      
        if(tasks[i]["status"]=="To Do") 
        { 
            todo.innerHTML += '<button class="border-1 border-secondary d-flex" style="background-color: #CAEBF2;"><div class="col-1"><i class="bi bi-question-circle text-success fa-2x"></i>				</div>								<div class="text-start col-11">									<div class="fw-bold">'+tasks[i]["title"]+'</div><div class=""><div class="text-secondary-300">#1 created in '+tasks[i]["date"]+'</div><div class="" title="'+tasks[i]["description"]+'">'+tasks[i]["description"].slice(0,55)+'...</div></div><div class=""><span class="btn btn-info rounded-pill">High</span>	<span class="btn btn-gray-500 rounded-pill">Feature</span></div></div></button>';
            cmpTodo++;
        }else if(tasks[i]["status"]=="In Progress")
        {
            progress.innerHTML += '<button class="border-1 border-secondary d-flex" style="background-color: #CAEBF2;"><div class="col-1"><i class="bi bi-question-circle text-success fa-2x"></i>				</div>								<div class="text-start col-11">									<div class="fw-bold">'+tasks[i]["title"]+'</div><div class=""><div class="text-secondary-300">#1 created in '+tasks[i]["date"]+'</div><div class="" title="'+tasks[i]["description"]+'">'+tasks[i]["description"].slice(0,55)+'...</div></div><div class=""><span class="btn btn-info rounded-pill">High</span>	<span class="btn btn-gray-500 rounded-pill">Feature</span></div></div></button>';
            cmpProgresse++;
        }else if(tasks[i]["status"]=="Done")
        {
            done.innerHTML += '<button class="border-1 border-secondary d-flex" style="background-color: #CAEBF2;"><div class="col-1"><i class="bi bi-question-circle text-success fa-2x"></i>				</div>								<div class="text-start col-11">									<div class="fw-bold">'+tasks[i]["title"]+'</div><div class=""><div class="text-secondary-300">#1 created in '+tasks[i]["date"]+'</div><div class="" title="'+tasks[i]["description"]+'">'+tasks[i]["description"].slice(0,55)+'...</div></div><div class=""><span class="btn btn-info rounded-pill">High</span>	<span class="btn btn-gray-500 rounded-pill">Feature</span></div></div></button>';
            cmpDon++;
        }
      
}

    

