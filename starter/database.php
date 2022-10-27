<?php
    
    //CONNECT TO MYSQL DATABASE USING MYSQLI

use LDAP\Result;

    $con = mysqli_connect("localhost","root","","youcodescumboard");
    
    $qry = mysqli_query($con,"select * from tasks");
    
    
?>