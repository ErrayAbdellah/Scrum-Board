<?php
    //INCLUDE DATABASE FILE
    include('database.php');
    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

//ROUTING
    if(isset($_POST['save']))        saveTask();
    if(isset($_POST['update']))      updateTask();
    if(isset($_POST['delete']))      deleteTask();

    $GLOBALS['todo']        = 0 ;
    $GLOBALS['inProgress']  = 0 ;
    $GLOBALS['done']        = 0 ;

    $qry1 = mysqli_fetch_assoc(mysqli_query($con , "SELECT COUNT(*) as 'cmt' FROM tasks WHERE status_id = 1"));
    $cmtTodo = $qry1['cmt'];
    $qry2 = mysqli_fetch_assoc(mysqli_query($con , "SELECT COUNT(*) as 'cmt' FROM tasks WHERE status_id = 2"));
    $cmtInProgresse = $qry2['cmt'];
    $qry3= mysqli_fetch_assoc(mysqli_query($con , "SELECT COUNT(*) as 'cmt' FROM tasks WHERE status_id = 3"));
    $cmtDone = $qry3['cmt'];    
   

    function getTasks($test)
    {
       
        //CODE HERE
        
        $con = $GLOBALS['con'];
        //SQL SELECT

        foreach( array_values($GLOBALS['tasks'])  as $row  )
            {
                if($row['status_id'] == $test)
                { 
                  
                     $qryType = mysqli_fetch_assoc( mysqli_query($con,"select type.name FROM tasks ,type WHERE tasks.type_id = type.id && tasks.id =".$row['id'])) ;
                     $type = $qryType["name"] ;
                     $qryPr = mysqli_fetch_assoc( mysqli_query($con,"select priorities.name FROM tasks ,priorities WHERE tasks.priority_id = priorities.id && tasks.id =".$row['id'])) ;
                     $priority = $qryPr["name"] ;
                     $id = $row['id'];
                    ?>
                    
                        <button class="border-1 border-secondary d-flex btnBtn"  
                         onclick="getData(<?php echo $id; ?>,'<?php echo $row['title']; ?>','<?php echo $type; ?>',<?php echo $row['priority_id']; ?>,<?php echo $row['status_id']; ?>,'<?php echo $row['task_datetime']; ?>','<?php echo $row['description']; ?>')">
                            <div class="col-1">
                            <i class="bi bi-question-circle text-success fa-2x"></i>
                            </div>
                            <div class="text-start col-11 ">
                                <div class="fw-bold mt-1"><?php echo $row['title']; ?></div>
                                <div class="mt-1">
                                    <div class="text-secondary-300"><?php echo "#".$row['id']." created in ".$row['task_datetime']; ?></div>
                                    <div class="mt-1" title="<?php  echo $row['description'];  ?>"><?php echo substr($row['description'],0,55)?>...</div>
                                </div>
                                <div class="my-1">
                                    <span class="btn btn-info rounded-pill"><?php echo $priority?></span>
                                    <span class="btn btn-gray-500 rounded-pill"><?php echo $type?></span>
                                </div>
                            </div> 
                        </button>
                    <?php
                    
                }elseif($row['status_id']== $test  )
                {
                    $qryType = mysqli_fetch_assoc( mysqli_query($con,"select type.name FROM tasks ,type WHERE tasks.type_id = type.id && tasks.id =".$row['id'])) ;
                    $type = $qryType["name"] ;
                    $qryPr = mysqli_fetch_assoc( mysqli_query($con,"select priorities.name FROM tasks ,priorities WHERE tasks.priority_id = priorities.id && tasks.id =".$row['id'])) ;
                    $priority = $qryPr["name"] ;
                    $id = $row['id'];
                    ?>
                        
                        <button class="border-1 border-secondary d-flex btnBtn" 
                        onclick="getData(<?php echo $id; ?>,'<?php echo $row['title']; ?>','<?php echo $type; ?>',<?php echo $row['priority_id']; ?>,<?php echo $row['status_id']; ?>,'<?php echo $row['task_datetime']; ?>','<?php echo $row['description']; ?>')">
                       
                            <div class="col-1">
                                <i class="spinner-border spinner-border-sm text-success"></i> 
                            </div>	
                            <div class="text-start col-11 ">
                                <div class="fw-bold mt-1"><?php echo $row['title']; ?></div>
                                <div class="mt-1">
                                    <div class="text-secondary-300"><?php echo "#".$row['id']." created in ".$row['task_datetime']; ?></div>
                                    <div class="mt-1" title="<?php  echo $row['description'];  ?>"><?php echo substr($row['description'],0,55)?>...</div>
                                </div>
                                <div class="my-1">
                                    <span class="btn btn-info rounded-pill"><?php echo $priority?></span>
                                    <span class="btn btn-gray-500 rounded-pill"><?php echo $type?></span>
                                </div>
                            </div> 
                        </button>
                    <?php
                    
                }elseif($row['status_id']==  $test)
                {
                   
                    $qryType = mysqli_fetch_assoc( mysqli_query($con,"select type.name FROM tasks ,type WHERE tasks.type_id = type.id && tasks.id =".$row['id'])) ;
                    $type = $qryType["name"] ;
                    $qryPr = mysqli_fetch_assoc( mysqli_query($con,"select priorities.name FROM tasks ,priorities WHERE tasks.priority_id = priorities.id && tasks.id =".$row['id'])) ;
                    $priority = $qryPr["name"] ;
                    $id = $row['id'];
                    ?>
                        <button class="btnBtn border-1 border-secondary d-flex"   
                        onclick="getData(<?php echo $id; ?>,'<?php echo $row['title']; ?>','<?php echo $type; ?>',<?php echo $row['priority_id']; ?>,<?php echo $row['status_id']; ?>,'<?php echo $row['task_datetime']; ?>','<?php echo $row['description']; ?>')">
                            <div class="col-1">
                                <i class="bi bi-check-circle text-success fa-2x"></i> 
                            </div>		
                            <div class="text-start col-11">									
                                <div class="fw-bold mt-1" id="todoTitle"><?php echo $row['title']; ?></div>
                                <div class="mt-1">
                                    <div class="text-secondary-300"><?php echo "#".$row['id']." created in ".$row['task_datetime']; ?></div>
                                    <div class="mt-1" title="<?php  echo $row['description'];  ?>"><?php echo substr($row['description'],0,55)?>...</div>
                                </div>
                                <div class="my-1">
                                    <span id="buttonPriority" class="btn btn-info rounded-pill me-3"><?php echo $priority?></span>	
                                    <span id="buttonType" class="btn btn-gray-500 rounded-pill"><?php echo $type?></span>
                                </div>
                            </div>
                        </button>
                    <?php
                    
                }
            }
        //echo "Fetch all tasks";
    }

    function saveTask()
    {
        //CODE HERE
        $con = $GLOBALS['con'];
        //SQL INSERT

         $insert = " INSERT INTO `tasks`(`title`, `type_id`, `priority_id`, `status_id`, `task_datetime`, `description`) 
                    VALUES ('".$_POST['InTitle']."',".$_POST['Type'].",".$_POST['Priority'].",".$_POST['status'].",'".$_POST['date']."','".$_POST['description']."')";
        mysqli_query($con ,$insert);
        $_SESSION['message'] = "Task has been added successfully !";
        header('location: index.php');



    }

    function updateTask()
    {
        $hiddenId = $_POST['hiddenId'];
        //die($hiddenId);
        //CODE HERE
        $con = $GLOBALS['con'];
        //SQL UPDATE
        $title  = $_POST['InTitle'];
        $type  = $_POST['Type'];
        $Priority  = $_POST['Priority'];
        $status  = $_POST['status'];
        $date  = $_POST['date'];
        $description  = $_POST['description'];
        
        $update = "UPDATE `tasks` SET `title`='$title',`type_id`=$type,`priority_id`=$Priority,`status_id`=$status,`task_datetime`='$date',`description`='$description' WHERE id =". $hiddenId;
        mysqli_query($con,$update);
        $_SESSION['message'] = "Task has been updated successfully !";
		header('location: index.php');
    }

    function deleteTask()
    {
        //CODE HERE
        $hiddenId = $_POST['hiddenId'];
        $con = $GLOBALS['con'];
        //SQL DELETE
        $_SESSION['message'] = "Task has been deleted successfully !";

        $delete = "DELETE FROM `tasks` WHERE id =".$hiddenId;
        mysqli_query($con,$delete);
		header('location: index.php');
    }
?>