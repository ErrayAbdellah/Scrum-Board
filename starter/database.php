<?php
    
    //CONNECT TO MYSQL DATABASE USING MYSQLI

use LDAP\Result;

    $con = new mysqli("localhost","root","","youcodescumboard");
    $qry = $con->prepare("select * from tasks");
    $qry->execute();
    $result = $qry->get_result();

    
?>