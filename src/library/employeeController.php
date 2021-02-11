<?php
require './employeeManager.php';

// $method = $_SERVER['REQUEST_METHOD']['method'];
// $args = $_SERVER['REQUEST_METHOD']['params'];

$method;
$args;

// print_r($_SERVER['REQUEST_METHOD']);
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

echo requestController($method, $args);
