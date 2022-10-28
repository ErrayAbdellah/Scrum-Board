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

    // tasks-count
    function cmp($test)
    {
        foreach( array_values($GLOBALS['tasks'])  as $row  )
            {
                if($row['status_id']==1 && $test == 1){
                     $GLOBALS['todo']++;
                }elseif($row['status_id']==2 && $test==2 ){
                    $GLOBALS['inProgress']++;
                }elseif($row['status_id']==3  && $test ==3){
                     $GLOBALS['done']++;
                }

            }

            switch($test)
            {
                case 1: 
                    echo $GLOBALS['todo'];
                    break;
                case 2:
                    echo $GLOBALS['inProgress'];
                    break;
                case 3:
                    echo $GLOBALS['done'];
                    break;
            }

    }
   

    function getTasks($test)
    {
       
        //CODE HERE
        
        $con = $GLOBALS['con'];
        //SQL SELECT

        foreach( array_values($GLOBALS['tasks'])  as $row  )
            {
                if($row['status_id']==1 && $test == 1)
                { 
                  
                     $qryType = mysqli_fetch_assoc( mysqli_query($con,"select type.name FROM tasks ,type WHERE tasks.type_id = type.id && tasks.id =".$row['id'])) ;
                     $type = $qryType["name"] ;
                     $qryPr = mysqli_fetch_assoc( mysqli_query($con,"select priorities.name FROM tasks ,priorities WHERE tasks.priority_id = priorities.id && tasks.id =".$row['id'])) ;
                     $priority = $qryPr["name"] ;
                     $id = $row['id'];
                    ?>
                    
                        <button class="border-1 border-secondary d-flex btnBtn"  onclick="location.href='update.php?id=<?php echo $id; ?>'">
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
                }elseif($row['status_id']==2 && $test==2 ){
                    $qryType = mysqli_fetch_assoc( mysqli_query($con,"select type.name FROM tasks ,type WHERE tasks.type_id = type.id && tasks.id =".$row['id'])) ;
                    $type = $qryType["name"] ;
                    $qryPr = mysqli_fetch_assoc( mysqli_query($con,"select priorities.name FROM tasks ,priorities WHERE tasks.priority_id = priorities.id && tasks.id =".$row['id'])) ;
                    $priority = $qryPr["name"] ;
                    $id = $row['id'];
                    ?>
                        
                        <button class="border-1 border-secondary d-flex btnBtn"  onclick="location.href='update.php?id=<?php echo $id; ?>'"> 
                       
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
                }elseif($row['status_id']==3  && $test ==3){
                   
                    $qryType = mysqli_fetch_assoc( mysqli_query($con,"select type.name FROM tasks ,type WHERE tasks.type_id = type.id && tasks.id =".$row['id'])) ;
                    $type = $qryType["name"] ;
                    $qryPr = mysqli_fetch_assoc( mysqli_query($con,"select priorities.name FROM tasks ,priorities WHERE tasks.priority_id = priorities.id && tasks.id =".$row['id'])) ;
                    $priority = $qryPr["name"] ;
                    $id = $row['id'];
                    ?>
                        <button class="btnBtn border-1 border-secondary d-flex"   onclick="location.href='update.php?id=<?php echo $id; ?>'">
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
        $_SESSION['message'] = "Task has been added successfully !";
         $insert = " INSERT INTO `tasks`(`title`, `type_id`, `priority_id`, `status_id`, `task_datetime`, `description`) 
                    VALUES ('".$_POST['InTitle']."',".$_POST['Type'].",".$_POST['Priority'].",".$_POST['status'].",'".$_POST['date']."','".$_POST['description']."')";
        mysqli_query($con ,$insert);
        //echo "'".$_POST['InTitle']."',".$_POST['Type'].",".$_POST['Priority'].",".$_POST['status'].",'".$_POST['date']."','".$_POST['description']."'";
		 header('location: index.php');
        //echo "<h1> Hiiiiiiiiiiiiiiiiiiiiiii <h1>";

    }

    function updateTask()
    {
        //CODE HERE
        //SQL UPDATE
        $_SESSION['message'] = "Task has been updated successfully !";
		header('location: index.php');
    }

    function deleteTask()
    {
        //CODE HERE
        //SQL DELETE
        $_SESSION['message'] = "Task has been deleted successfully !";
		header('location: index.php');
    }

?>