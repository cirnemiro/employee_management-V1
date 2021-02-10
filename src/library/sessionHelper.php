<?php
session_start();

$_SESSION['session'] = false;

function sessionCheck($method){
    if($_SESSION['session']){
        //active session
        $method;
    }else{
        // expired session -> reeirect loggin page + session expired
    }
}