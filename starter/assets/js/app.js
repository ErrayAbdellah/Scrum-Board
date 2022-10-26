// /**
//  * In this file app.js you will find all CRUD functions name.
//  * 
//  */
//  let cmptCreate     = 0;
//  let title          = document.getElementById("titleIn")                    ;
//  let type           = document.querySelectorAll("input[name='Type']")       ;
//  let statuss        = document.getElementById("select1")                    ;
//  let priority       = document.getElementById("select2")                    ;
//  let date           = document.getElementById("date")                       ;
//  let description    = document.getElementById("exampleFormControlTextarea1");
//  let submit         = document.getElementById("submit")                     ;
//  let radio2         = document.getElementById('flexRadioDefault2')          ;

//  ///
// var to_do_tasks_count       = document.getElementById("to-do-tasks-count")      ;
// var in_progress_tasks_count = document.getElementById("in-progress-tasks-count");
// var done_tasks_count        = document.getElementById("done-tasks-count")       ;

//  ////les classes
//  let todo           = document.getElementById("to-do-tasks")        ;
//  let progress       = document.getElementById("in-progress-tasks")  ;
//  let done           = document.getElementById("done-tasks")         ;

// initTaskForm();
// reloadTasks();

// function CleareForm()
// {
//     document.getElementById("formTask").reset();
//     document.getElementById("buttonCu").innerHTML = `
//         <button type="button"data-bs-dismiss="modal" class="btn btn-danger rounded-3 w-25 ">Cancel</button>
//         <button type="button" id="sumbit"  onclick="createTask()" class="btn btn-success rounded-3 w-25">Save</button>`
// }

// function createTask() {
    
//     initTaskForm();
    
//     let radioChecked;
//     for(const i of type)
//     {
//         if(i.checked)
//         {
//             radioChecked = i.value;
//             break;
//         };
//     };
//     let create =
//             {
//                  title          :   title.value         ,
//                  type           :   radioChecked        ,
//                  status         :   statuss.value       ,
//                  priority       :   priority.value      ,
//                  date           :   date.value          ,
//                  description    :   description.value   ,
//              }
                                                                                                                                                                                                                                                                                                                                                                                                   
//              tasks.push(create)  ; 
//              reloadTasks() ;

// // initialiser task form
//              title.value           = type.value   = date.value = description.value ='';
//              select1.selectedIndex = 0 ;
//              select2.selectedIndex = 0 ;          
//             //  reloadTasks();
// }

// function initTaskForm() {
 
//     todo.innerHTML      = "";
//     progress.innerHTML  = "";
//     done.innerHTML      = "";
// }

// function reloadTasks() 
// {
//     initTaskForm();
//     let cmpTodo        = 0;
//     let cmpProgresse   = 0;
//     let cmpDon         = 0; 
//     // Remove tasks elements
//     // Set Task count
//     cmptCreate =1;
//     for(let i=0;i<tasks.length;i++)
//     { 
//         if(tasks[i]["status"]=="To Do") 
//         { 
//          todo.innerHTML += `<button data-id="`+i+`" id="todoButton" onclick="editTask(this)"class="btnBtn border-1 border-secondary d-flex" draggable="true" >
//                                 <div class="col-1">
//                                     <i class="bi bi-question-circle text-success fa-2x"></i>
//                                 </div>		
//                                 <div id="buttonStatus" hidden>To Do</div>						
//                                 <div class="text-start col-11">									
//                                     <div class="fw-bold mt-1" id="todoTitle">
//                                         `+tasks[i]["title"]+`
//                                     </div>
//                                     <div class="my-1">
//                                         <div class="text-secondary-300">
//                                             #`+cmptCreate+` created in <span id="buttonDate">`+tasks[i]["date"]+`</span>
//                                         </div>
//                                         <div class="mt-1" title="`+tasks[i]["description"]+`">
//                                             `+tasks[i]["description"].slice(0,55)+`...
//                                         </div>
//                                         <div id="buttonDescription" hidden>`+tasks[i]["description"]+`</div>
//                                     </div>
//                                     <div class="my-1">
//                                     <span id="buttonPriority" class="btn btn-info rounded-pill me-3">`+tasks[i]["priority"]+`</span>	
//                                     <span id="buttonType" class="btn btn-gray-500 rounded-pill">`+tasks[i]["type"]+`</span>
//                                     </div>
//                                 </div>
//                             </button>`;
//             cmpTodo++;
//             to_do_tasks_count.innerText = cmpTodo; 
//         }else if(tasks[i]["status"]=="In Progress")
//         {
//             progress.innerHTML += `<button data-id="${i}" onclick="editTask(this)"class="btnBtn border-1 border-secondary d-flex" draggable="true">
//                                     <div class="col-1">
//                                         <i class="spinner-border spinner-border-sm text-success"></i> 
//                                     </div>	
//                                     <div id="buttonStatus" hidden>In Progress</div>						
//                                     <div class="text-start col-11">									
//                                         <div class="fw-bold mt-1" id="todoTitle">
//                                             `+tasks[i]["title"]+`
//                                         </div>
//                                         <div class="mt-1">
//                                             <div class="text-secondary-300">
//                                                 #`+cmptCreate+` created in <span id="buttonDate">`+tasks[i]["date"]+`</span>
//                                             </div>
//                                             <div class="mt-1" title="`+tasks[i]["description"]+`">
//                                                 `+tasks[i]["description"].slice(0,55)+`...
//                                             </div>
//                                             <div id="buttonDescription" hidden>`+tasks[i]["description"]+`</div>
//                                         </div>
//                                         <div class="my-1">
//                                         <span id="buttonPriority" class="btn btn-info rounded-pill me-3">`+tasks[i]["priority"]+`</span>	
//                                         <span id="buttonType" class="btn btn-gray-500 rounded-pill">`+tasks[i]["type"]+`</span>
//                                         </div>
//                                     </div>
//                                 </button>`;
//             cmpProgresse++;
//             in_progress_tasks_count.innerText = cmpProgresse;
//         }else if(tasks[i]["status"]=="Done")
//         {
//             done.innerHTML += `<button data-id="`+i+`" onclick="editTask(this)"class="btnBtn border-1 border-secondary d-flex" draggable="true">
//                                     <div class="col-1">
//                                         <i class="bi bi-check-circle text-success fa-2x"></i> 
//                                     </div>
//                                     <div id="buttonStatus" hidden>Done</div>							
//                                     <div class="text-start col-11">									
//                                         <div class="fw-bold mt-1" id="todoTitle">
//                                             `+tasks[i]["title"]+`
//                                         </div>
//                                         <div class="mt-1">
//                                             <div class="text-secondary-300">
//                                                 #`+cmptCreate+` created in <span id="buttonDate">`+tasks[i]["date"]+`</span>
//                                             </div>
//                                             <div class="mt-1" title="`+tasks[i]["description"]+`">
//                                                 `+tasks[i]["description"].slice(0,55)+`...
//                                             </div>
//                                             <div id="buttonDescription" hidden>`+tasks[i]["description"]+`</div>
//                                         </div>
//                                         <div class="my-1">
//                                             <span id="buttonPriority" class="btn btn-info rounded-pill me-3">`+tasks[i]["priority"]+`</span>	
//                                             <span id="buttonType" class="btn btn-gray-500 rounded-pill">`+tasks[i]["type"]+`</span>
//                                         </div>
//                                     </div>
//                                 </button>`;
//             cmpDon++;
//             done_tasks_count.innerText =cmpDon;
//         }

//         cmptCreate++;
//     }
// }

// function editTask(item)
// {
//     var buttonObjet = {
//         Title           : item.querySelector("#todoTitle").innerText         ,
//         Type            : item.querySelector("#buttonType").innerText        ,
//         Priority        : item.querySelector("#buttonPriority").innerText    ,
//         status          : item.querySelector("#buttonStatus").innerText      ,
//         date            : item.querySelector("#buttonDate").innerText        ,    
//         description     : item.querySelector("#buttonDescription").innerText ,
//     }
    
//     title.value         = buttonObjet.Title         ;
//     priority.value      = buttonObjet.Priority      ;
//     statuss.value       = buttonObjet.status        ;
//     date.value          = buttonObjet.date          ;
//     description.value   = buttonObjet.description   ;

//     if(buttonObjet.Type==="Feature")
//     {
//       document.querySelector("#flexRadioDefault1").checked = true ;

//     }else if(buttonObjet.Type==="Bug")
//     {
//         document.querySelector("#flexRadioDefault2").checked = true ;
//     }

//     $('#modal-task').modal('show');


//     // Update Button
//     document.getElementById("buttonCu").innerHTML = `<button type="button" id="sumbit"   class="btn btn-success rounded-3 w-25" onclick="updateTask(this)" data-id="`+item.getAttribute('data-id')+`" >Update</button>`
    
//     // Delete Button
//     document.getElementById("buttonCu").innerHTML += `<button type="button" id="sumbit"   class="btn btn-danger rounded-3 w-25" onclick="deleteTask(this)" data-id="`+item.getAttribute('data-id')+`">Delete</button>`
// }

// function updateTask(item) {
//     // GET TASK ATTRIBUTES FROM INPUTS    
//     let attTaks = item.getAttribute("data-id");
//     // Créez task object
//     let radioChecked;
//     for(const i of type)
//     {
//         if(i.checked)
//         {
//             radioChecked = i.value;
//             break;
//         };
//     };
    
//     var TasksObject = 
//     {
//         title          :   title.value         ,
//         type           :   radioChecked        ,
//         status         :   statuss.value       ,
//         priority       :   priority.value      ,
//         date           :   date.value          ,
//         description    :   description.value   ,
//     }
    
//     // Fermer Modal form
//     tasks[attTaks] = TasksObject;
//      reloadTasks() ;
//      $('#modal-task').modal('hide');
// }

// function deleteTask(item) {
   
//     if (confirm('Do you really want to delete this??')) {
//         // Save it!
//         var taskId = item.getAttribute('data-id');

//         tasks.splice(taskId, 1);
    
//         $('#modal-task').modal('hide');
//         reloadTasks();
//       } 
// }