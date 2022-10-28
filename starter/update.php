<?php 
	include("scripts.php");
?>

<!DOCTYPE html>
<html lang="en" >
<head>
	<meta charset="utf-8" />
	<title>YouCode | Scrum Board</title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
	<meta content="" name="description"/>
	<meta content="" name="author"/>
	
	<!-- ================== BEGIN core-css ================== -->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
	<link href="assets/css/vendor.min.css" rel="stylesheet" />
	<link href="assets/css/default/app.min.css" rel="stylesheet" />
	<link href="assets/css/style.css" rel="stylesheet" />
	<!-- ================== END core-css ================== -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</head>
<body  >


            <div class="modal-dialog modal-dialog-centered" role="document">
                
            <div class="modal-content "style="background-color: #CAEBF2;">
                    <div class=" card-header bg-secondary text-center ">
                    <h2 class="text-white ">Add Task</h2>
                    </div>
                    <div class="modal-body">
                        <!--begin form-->
                        <?php 
                            $id = $_GET['id'];
                            $con = $GLOBALS['con'];

                            $result = mysqli_query($con , "SELECT * FROM tasks WHERE id = ".$id);
                            $row = mysqli_fetch_assoc($result);

                        ?>
                        <form action="scripts.php" method="POST"  >
                            <div class="align-items-md-center ">
                                <div>
                                    <label for="formGroupExampleInput" class="form-label">Title</label>
                                    <input type="text" name="InTitle" class="form-control" id="titleIn" placeholder="Example input placeholder" value="<?php echo $row['title'] ; ?>" required>
                                </div>
                                <!-- radion Button -->
                                <div>
                                        <label class="form-label">Type</label>
                                        <div class="form-check">
                                            <input class="form-check-input ch" type="radio" value="1" name="Type" id="flexRadioDefault1" <?php if($row['type_id'] == 1){ echo "checked" ;} ?>>
                                            <label class="form-check-label text-secondary-500" for="flexRadioDefault1">
                                            Feature
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input ch" type="radio" value="2" name="Type" id="flexRadioDefault2"  <?php if($row['type_id'] == 2){ echo "checked" ;} ?>>
                                            <label class="form-check-label text-secondary-500" for="flexRadioDefault2">
                                            Bug
                                            </label>
                                        </div>
                                </div>
                                <!-- end radion Button -->
                                    <div>
                                        <label for="formGroupExampleInput" class="form-label">Status</label>
                                        <select class="form-select" name ="status" aria-label="Default select example" id="select1" required>
                                            <option selected>Please select</option>
                                            <option value="1" <?php if($row['status_id'] == 1){ echo "selected" ;} ?>>Todo</option>
                                            <option value="2" <?php if($row['status_id'] == 2){ echo "selected" ;} ?>>In Progress</option>
                                            <option value="3" <?php if($row['status_id'] == 3){ echo "selected" ;} ?>>Done</option>
                                        </select>
                                        <label for="formGroupExampleInput" class="form-label">Priority</label>
                                        <select class="form-select" name="Priority" aria-label="Default select example" id="select2" >
                                            <option selected>Please select</option>
                                            <option value="1" <?php if($row['priority_id'] == 1){ echo "selected" ;} ?>>High</option>
                                            <option value="2" <?php if($row['priority_id'] == 2){ echo "selected" ;} ?>>Medium</option>
                                            <option value="3" <?php if($row['priority_id'] == 3){ echo "selected" ;} ?>>low</option>
                                        </select>
                                    </div>
                                    <!-- end select-->
                                    <div>
                                            <label for="formGroupExampleInput" class="form-label">Date</label>
                                            <input type="date" name="date" class="form-control" id="date" required value="<?php  echo $row['task_datetime'];  ?>">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                        <textarea class="form-control" name="description" id="exampleFormControlTextarea1" rows="4" required><?php  echo $row['description'];  ?></textarea>
                                    </div>
                                <!--end form-->
                            </div>
                            <div class="modal-footer" id="buttonCu">
                                <input type="submit"data-bs-dismiss="modal" class="btn btn-danger rounded-3 w-25 "  value="Cancel">
                                <input type="submit" id="sumbit"  class="btn btn-success rounded-3 w-25" name="save" value="Save">
                            </div>
                        </form>
                    </div>
                    
                    </div>
                </div>	
	<!-- ================== BEGIN core-js ================== -->
	<script src="assets/js/vendor.min.js"></script>
	<script src="assets/js/app.min.js"></script>
	<!-- ================== END core-js ================== -->
	<script src="assets/js/data.js"></script>
	<script src="assets/js/app.js"></script>
</body>
</html>





