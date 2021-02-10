<?php
require './employeeManager.php';

$method = $_GET['method'];
$args = $_GET['params'];

function requestController($method, $args = 0)
{
    return $args ? $method($args) : $method();
}

echo requestController($method);
