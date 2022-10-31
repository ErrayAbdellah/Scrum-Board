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
    $('#modal-taskU').modal('show');
}