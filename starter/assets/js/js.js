function getData(id,title,type,priority,status,date,description)
{

    document.querySelector('#titleIn').value            = title         ;
    document.querySelector('#select1').value            = status        ;
    document.querySelector('#select2').value            = priority      ;
    document.getElementById('date').value               = date          ;
    document.querySelector('#description1').value        = description   ;
    document.querySelector('#hiddenId').value           = id            ;
    
    
    if(type==="Feature")
    {
        document.querySelector("#flexRadioDefault1").checked = true ;

    }else if(type==="Bug")
    {
        document.querySelector("#flexRadioDefault2").checked = true ;
    }
    
    document.getElementById("buttonCu").innerHTML = `<input type="submit"data-bs-dismiss="modal" class="btn btn-danger rounded-3 w-25 " value="Delete" name="delete">`;
    
    // Delete Button
    document.getElementById("buttonCu").innerHTML += `<input type="submit" id="sumbit"  class="btn btn-success rounded-3 w-25" name="update" value="Update">`;
    $('#modal-task').modal('show');
}





function CleareForm()
{
    document.getElementById("formTask").reset();
    document.getElementById("buttonCu").innerHTML = `	
        <input type="submit"data-bs-dismiss="modal" class="btn btn-danger rounded-3 w-25 "  value="Cancel">
        <input type="submit" id="sumbit"  class="btn btn-success rounded-3 w-25" name="save" value="Save">`
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


// function letDrag(e)
// {
//     e.preventDefault();
// }

// var idMove ;
// function drag(e)
// {
//     e.preventDefault();
//     idMove = e.target.id 
// }

// function dropTodo()
// {

// }
// function dropInProgresse()
// {
    
// }
// function dropDone()
// {

// }
