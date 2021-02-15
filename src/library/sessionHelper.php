<?php
session_start();

if (!isset($_SESSION['sessionTimer'])) {
    $_SESSION['sessionTimer'] = time();
}
function sessionCheck()
{
    $rest =  time() - $_SESSION['sessionTimer'];
    if ($rest < 180000000000000) {
        return true ;
    } else {
        session_destroy();
        return false;
    }
}
?>

