/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
 let cmpTodo        = 0;
 let cmpProgresse   = 0;
 let cmpDon         = 0; 
 let cmptCreate     = 0;
 let title          = document.getElementById("titleIn")                    ;
 let type           = document.querySelectorAll("input[name='Type']")       ;
 let statuss        = document.getElementById("select1")                    ;
 let priority       = document.getElementById("select2")                    ;
 let date           = document.getElementById("date")                       ;
 let description    = document.getElementById("exampleFormControlTextarea1");
 let submit         = document.getElementById("submit")                     ;
 
 let radio2         = document.getElementById('flexRadioDefault2')          ;

 ///
var to_do_tasks_count       = document.getElementById("to-do-tasks-count")      ;
var in_progress_tasks_count = document.getElementById("in-progress-tasks-count");
var done_tasks_count        = document.getElementById("done-tasks-count")       ;

 ////les classes
 let todo           = document.getElementById("to-do-tasks")        ;
 let progress       = document.getElementById("in-progress-tasks")  ;
 let done           = document.getElementById("done-tasks")         ;

 todo.innerHTML     = "";
 progress.innerHTML = "";
 done.innerHTML     = "";

var btn             = document.querySelector(".btnBtn");


//  let newTasks       = [] ;
//  newTasks           = tasks ; 
//  console.log(newTasks) ;
 

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



// function reloadTasks() {
//     // Remove tasks elements
    
//     // Set Task count
//     for(var i=0;i<tasks.length;i++)
//     {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
//         reloadtask(i);
//     }
    
// }




function createTask() {
    
//   initTaskForm() ;
    
    // Afficher le boutton save
    // if(title.value =='' && select1.selectedIndex == 0 &&  select2.selectedIndex == 0 && date.value=='' && description.value=='' )
    // submit.visible

    todo.innerHTML      = "";
    progress.innerHTML  = "";
    done.innerHTML      = "";
   

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
                 title          :   title.value         ,
                 type           :   radioChecked        ,
                 status         :   statuss.value       ,
                 priority       :   priority.value      ,
                 date           :   date.value          ,
                 description    :   description.value   ,
             }
            //  console.log(create);                                                                                                                                                                                                                                                                                                                                                                                                      
             tasks.push(create)  ;  
             console.log(tasks)  ;
             cmpTodo        = 0;
             cmpProgresse   = 0;
             cmpDon         = 0; 
             cmptCreate     = 0;
            //  console.log(tasks);
             reloadTasks() ;

// initialiser task form
             title.value           = type.value   = date.value = description.value ='';
             select1.selectedIndex = 0 ;
             select2.selectedIndex = 0 ;            
             
            //  reloadTasks();
}

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    
}

function editTask(index) {
    // Initialisez task form


    // title.value 
    // type.value   = 
    // date.value = 
    // description.value ='';
    // select1.selectedIndex = 0 ;
    // select2.selectedIndex = 0 ;


    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}



function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data
    // let tasksToDelte = document.querySelectorAll(".task");

    // for(t in tasksToDelte)
    // {
    //     console.log("element to delete"+t);
    //     // t.remove();
    //     console.log("hi!!") ;
    // }
    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements
    
    // Set Task count
    for(let i=0;i<tasks.length;i++)
    {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        reloadtask(i);
    }
    
}


function reloadtask(i) 
{    
    // console.log(tasks.length) ;
    // console.log(tasks[i]) ;
    // console.log("here "+tasks.length) ;
    cmptCreate++;
   
    if(tasks[i]["status"]=="To Do") 
    { 
    todo.innerHTML += `<button data-id="`+i+`" id="todoButton" onclick="reset(this)"class="btnBtn border-1 border-secondary d-flex" >
                            <div class="col-1">
                                <i class="bi bi-question-circle text-success fa-2x"></i>
                            </div>		
                            <div id="buttonStatus" hidden>To Do</div>						
                            <div class="text-start col-11">									
                                <div class="fw-bold" id="todoTitle">
                                    `+tasks[i]["title"]+`
                                </div>
                                <div class="">
                                    <div class="text-secondary-300">
                                        #`+cmptCreate+` created in <span id="buttonDate">`+tasks[i]["date"]+`</span>
                                    </div>
                                    <div class="" title="`+tasks[i]["description"]+`">
                                        `+tasks[i]["description"].slice(0,55)+`...
                                    </div>
                                    <div id="buttonDescription" hidden>`+tasks[i]["description"]+`</div>
                                </div>
                                <div class="">
                                <span id="buttonPriority" class="btn btn-info rounded-pill">`+tasks[i]["priority"]+`</span>	
                                <span id="buttonType" class="btn btn-gray-500 rounded-pill">`+tasks[i]["type"]+`</span>
                                </div>
                            </div>
                        </button>`;
        cmpTodo++;
        to_do_tasks_count.innerText = cmpTodo; 
    }else if(tasks[i]["status"]=="In Progress")
    {
        progress.innerHTML += `<button data-id="`+i+`" onclick="reset(this)"class="btnBtn border-1 border-secondary d-flex" >
                                    <div class="col-1">
                                        <i class="bi bi-question-circle text-success fa-2x"></i>
                                    </div>		
                                    <div id="buttonStatus" hidden>In Progress</div>						
                                    <div class="text-start col-11">									
                                        <div class="fw-bold" id="todoTitle">
                                            `+tasks[i]["title"]+`
                                        </div>
                                        <div class="">
                                            <div class="text-secondary-300">
                                                #`+cmptCreate+` created in <span id="buttonDate">`+tasks[i]["date"]+`</span>
                                            </div>
                                            <div class="" title="`+tasks[i]["description"]+`">
                                                `+tasks[i]["description"].slice(0,55)+`...
                                            </div>
                                            <div id="buttonDescription" hidden>`+tasks[i]["description"]+`</div>
                                        </div>
                                        <div class="">
                                        <span id="buttonPriority" class="btn btn-info rounded-pill">`+tasks[i]["priority"]+`</span>	
                                        <span id="buttonType" class="btn btn-gray-500 rounded-pill">`+tasks[i]["type"]+`</span>
                                        </div>
                                    </div>
                                </button>`;
        
        cmpProgresse++;
        in_progress_tasks_count.innerText = cmpProgresse;
    }else if(tasks[i]["status"]=="Done")
    {
        done.innerHTML += `<button data-id="`+i+`" onclick="reset(this)"class="btnBtn border-1 border-secondary d-flex" >
                                <div class="col-1">
                                    <i class="bi bi-question-circle text-success fa-2x"></i>
                                </div>
                                <div id="buttonStatus" hidden>Done</div>							
                                <div class="text-start col-11">									
                                    <div class="fw-bold" id="todoTitle">
                                        `+tasks[i]["title"]+`
                                    </div>
                                    <div class="">
                                        <div class="text-secondary-300">
                                            #`+cmptCreate+` created in <span id="buttonDate">`+tasks[i]["date"]+`</span>
                                        </div>
                                        <div class="" title="`+tasks[i]["description"]+`">
                                            `+tasks[i]["description"].slice(0,55)+`...
                                        </div>
                                        <div id="buttonDescription" hidden>`+tasks[i]["description"]+`</div>
                                    </div>
                                    <div class="">
                                        <span id="buttonPriority" class="btn btn-info rounded-pill">`+tasks[i]["priority"]+`</span>	
                                        <span id="buttonType" class="btn btn-gray-500 rounded-pill">`+tasks[i]["type"]+`</span>
                                    </div>
                                </div>
                            </button>`;
        cmpDon++;
        done_tasks_count.innerText =cmpDon;
    }

}
    

function reset(item)
{
    console.log( item.querySelector("#buttonPriority"));
    
    var buttonObjet = {
        Title           : item.querySelector("#todoTitle").innerText         ,
        Type            : item.querySelector("#buttonType").innerText        ,
        Priority        : item.querySelector("#buttonPriority").innerText    ,
        status          : item.querySelector("#buttonStatus").innerText      ,
        date            : item.querySelector("#buttonDate").innerText        ,    
        description     : item.querySelector("#buttonDescription").innerText ,
    }
    
    title.value         = buttonObjet.Title         ;
    // type.value          = buttonObjet.Type          ;
    priority.value      = buttonObjet.Priority      ;
    statuss.value       = buttonObjet.status        ;
    date.value          = buttonObjet.date          ;
    description.value   = buttonObjet.description   ;

    if(buttonObjet.Type==="Feature")
    {
      document.querySelector("#flexRadioDefault1").checked = true ;

    }else if(buttonObjet.Type==="Bug")
    {
        document.querySelector("#flexRadioDefault2").checked = true ;
    }

    $('#modal-task').modal('show');

    console.log(buttonObjet.Title);

    // Update Button
    document.getElementById("buttonCu").innerHTML = `<button type="button" id="sumbit"   class="btn btn-success rounded-3 w-25" onclick="updateTask(this)" data-id="`+item.getAttribute('data-id')+`" >Update</button>`
    
    // Delete Button
    //document.getElementById("buttonCu").innerHTML += `<button class = "btn btn-danger col-3 col-sm-3 col-md-2" type = "button" onclick="deleteTask(this)" data-id="`+element.getAttribute('data-id')+`">Delete</button>`
   
}


function updateTask(item) {
    // GET TASK ATTRIBUTES FROM INPUTS

    

    let attTaks = item.getAttribute("data-id");
    let itemTasks = item.querySelector("button[data-id = '"+attTaks+"']");
    // Créez task object
    let radioChecked;
    for(const i of type)
    {
        if(i.checked)
        {
            radioChecked = i.value;
            break;
        };
    };
    var TasksObject = 
    {
        title          :   title.value         ,
        type           :   radioChecked        ,
        statuss        :   statuss.value       ,
        priority       :   priority.value      ,
        date           :   date.value          ,
        description    :   description.value   ,
    }
   
    
    // Fermer Modal form
    tasks[attTaks] = TasksObject;
    // Refresh tasks
    todo.innerHTML     = "";
    progress.innerHTML = "";
    done.innerHTML     = "";
    reloadTasks();
    console.log(tasks);
    // $('#modal-task').modal('hide');
    
}