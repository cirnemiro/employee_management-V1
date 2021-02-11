<?php
/**
 * EMPLOYEE FUNCTIONS LIBRARY
 *
 * @author: Jose Manuel Orts
 * @date: 11/06/2020
 */

function getAllEmployees()
{
    $data = file_get_contents('../../resources/employees.json');
    return $data;
    // TODO implement it
}

function addEmployee($newEmployee)
{
    return json_encode($newEmployee);
}


function deleteEmployee($id)
{
    return $id;
}


function updateEmployee($updateEmployee)
{
    $data = getAllEmployees();
    $json = json_decode($data);
    

    $all = [];

    foreach ($json as $employee) {
        if ($employee->id === $updateEmployee['id']) {
            array_push($all, json_encode($updateEmployee));
        } else {
            array_push($all, json_encode($employee));
        }
    }
    
    $result = [];
    
    foreach ($all as $string) {
        array_push($result, json_decode($string));
    }

    file_put_contents('../../resources/employees.json', json_encode($result));
    return json_encode($result);
}


function getEmployee($id)
{
    // TODO implement it
}


function removeAvatar($id)
{
    // TODO implement it
}


// function getQueryStringParameters(): array
// {
    // // TODO implement it
// }

// function getNextIdentifier(array $employeesCollection): int
// {
    // // TODO implement it
// }
