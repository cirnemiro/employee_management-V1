<?php
session_start();

if(!isset($_SESSION['sessionTimer'])){
    //Set the current timestamp.
    $_SESSION['sessionTimer'] = time();
} 
$rest =  time() - $_SESSION['sessionTimer'];



if ($rest < 5) {
    echo $rest;
}else{
    echo 'finished';
    unset($_SESSION['sessionTimer']);
    session_destroy();
}


