<?php
session_start();
$_SESSION['session'] = true;

if(!isset($_SESSION['sessionTimer'])){
    $_SESSION['sessionTimer'] = time();
}
function sessionCheck(){
    $rest =  time() - $_SESSION['sessionTimer'];
    if ($rest < 10) {
        return true;
    }else{
        session_destroy();
        return false;
    }
}


// $_SESSION['session'] = false;
// function hola(){
//     return true;
// }


// //Get the current timestamp.    ( $currentTime - $_SESSION['sessionTimer'] ) > 2000
// $now = time();
// //Calculate how many seconds have passed.
// $timeSince = $now - $_SESSION['timer'];


// sessioncheck(getallemployees())
?>
