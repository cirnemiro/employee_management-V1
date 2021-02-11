<?php
/**
 * EMPLOYEE FUNCTIONS LIBRARY
 *
 * @author: Jose Manuel Orts
 * @date: 11/06/2020
 */

function requestManager($obj,$action){
    //new json
    $data = json_decode(getAllEmployees());
    $all = [];
    switch ($action) {
        case 'add':
            array_push($data,json_decode($obj));         
            break;
        case 'update':
        case 'delete':        
            foreach ($data as $employee) {
                if ($employee->id == $obj['id']) {
                    $action == 'update' && array_push($all, json_encode($obj));    
                } else {
                    array_push($all, json_encode($employee));
                }
            }
            break;
    }

    $result = [];
    
    foreach ($all as $string) {     
        array_push($result, json_decode($string));
    }
    file_put_contents('../../resources/employees.json', json_encode($result));

    return 'it\'s '.$action.'d';
}

function getAllEmployees()
{
    $data = file_get_contents('../../resources/employees.json');
    return $data;   
}

function addEmployee($newEmployee)
{
    // return requestManager($newEmployee,'add');
    return requestManager($newEmployee,'add');
}


function deleteEmployee($deleteEmployee)
{
    return requestManager($deleteEmployee,'delete');
}


function updateEmployee($updateEmployee)
{
    return requestManager($updateEmployee,'update');
    // return [requestManager($updateEmployee,'add'),'mensaje'];
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
