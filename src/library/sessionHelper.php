<?php
session_start();

if(!isset($_SESSION['sessionTimer'])){
    $_SESSION['sessionTimer'] = time();
}
function sessionCheck(){
    $rest =  time() - $_SESSION['sessionTimer'];
    if ($rest < 180) {
        return true ; 
    }else{
        session_destroy();
        return false;
    }
}
?>

