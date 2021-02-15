<?php
require './sessionHelper.php';
require './employeeManager.php';
$method;
$args;

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $method = $_GET['method'];
        $args = $_GET['params'];
    break;
    case 'POST':
        $method = $_POST['method'];
        $args = $_POST['params'];
    break;
}

function requestController($method, $args = 0)
{
    return $args ? $method($args) : $method();
}

if (sessionCheck()) {
    echo requestController($method,$args);
}else{
    echo 1;
}



