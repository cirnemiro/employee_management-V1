<?php

$username = $_POST['username'];
$password = $_POST['password'];

require '../library/loginManager.php';
require '../library/sessionHelper.php';

$currentUser = loginValidation($username, $password);

if ($currentUser) {
    // logged as currentIUser
    header('location: ../dashboard.php');
} else {
    header('location: ../../index.php');
    // pop out loggeds failed
}

// execute application
//sessioncheck(start(loginValidation($username , $password)))
