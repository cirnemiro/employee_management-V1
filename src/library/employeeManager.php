<?php
/**
 * EMPLOYEE FUNCTIONS LIBRARY
 *
 * @author: Jose Manuel Orts
 * @date: 11/06/2020
 */

function requestManager($obj, $action)
{
    //new json
    $data = json_decode(getAllEmployees());
    $all = [];
    $result = [];
    switch ($action) {
        case 'added':
            array_push($data, $obj);
            $result = $data;
            break;
        case 'updated':
        case 'deleted':
            foreach ($data as $employee) {
                if ($employee->id == $obj['id']) {
                    $action == 'updated' && array_push($all, json_encode($obj));
                } else {
                    array_push($all, json_encode($employee));
                }
            }
            foreach ($all as $string) {
                array_push($result, json_decode($string));
            }
            break;
    }
  
    file_put_contents('../../resources/employees.json', json_encode($result));

    return $action;
}

function getAllEmployees()
{
    $data = file_get_contents('../../resources/employees.json');
    return $data;
}

function addEmployee($newEmployee)
{
    // return requestManager($newEmployee,'add');
    return requestManager($newEmployee, 'added');
}


function deleteEmployee($deleteEmployee)
{
    return requestManager($deleteEmployee, 'deleted');
}


function updateEmployee($updateEmployee)
{
    return requestManager($updateEmployee, 'updated');
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
