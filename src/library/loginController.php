<?php

$username = $_POST['username'];
$password = $_POST['password'];

require '../library/loginManager.php';
require '../library/sessionHelper.php';

$currentUser = loginValidation($username , $password);

if($currentUser){
    // logged as currentIUser
    header('location: ../dashboard.php');

}else{
    //error logging -> redirect to loggin page + error message
}



// execute application
//sessioncheck(start(loginValidation($username , $password)))

