<?php

$username = $_POST['username'];
$password = $_POST['password'];

require '../library/loginManager.php';
require '../library/sessionHelper.php';

$currentUser = loginValidation($username , $password);

if($currentUser){
    // logged as currentIUser
<<<<<<< HEAD
    header('location: ../dashboard.php');

=======
    
>>>>>>> 0bf487c04ba2a5eadf779e6e9a58211558c1f906
}else{
    //error logging -> redirect to loggin page + error message
}



// execute application
//sessioncheck(start(loginValidation($username , $password)))

