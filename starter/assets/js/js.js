function getData(id,title,type,priority,status,date,description)
{

    document.querySelector('#titleU').value             = title         ;
    document.querySelector('#SelectStatus').value       = status        ;
    document.querySelector('#selectPriority').value     = priority      ;
    document.getElementById('date2').value               = date          ;
    document.querySelector('#description').value        = description   ;
    document.querySelector('#hiddenId').value           = id            ;

    if(type==="Feature")
    {
        document.querySelector("#Radio1").checked = true ;

    }else if(type==="Bug")
    {
        document.querySelector("#Radio2").checked = true ;
    }
    $('#modal-taskU').modal('show');

    
}













function CleareForm()
{
    document.getElementById("formTask").reset();
}

var tas = document.querySelectorAll('.tas');

// function dragAndDrop()
// {
//     var btn = document.querySelectorAll('.btnBtn') ;
//     btn.forEach(item => {

//         item.addEventListener('dragstart', function(){
//             console.log("dragdop");
//         })

//     } )

// }


function letDrag(e)
{
    e.preventDefault();
}

var idMove ;
function drag(e)
{
    e.preventDefault();
    idMove = e.target.id 
}

function dropTodo()
{

}
function dropInProgresse()
{
    
}
function dropDone()
{

}
