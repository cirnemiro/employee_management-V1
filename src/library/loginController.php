<?php

$username = $_POST['username'];
$password = $_POST['password'];

require '../library/loginManager.php';
echo loginValidation($username , $password);


