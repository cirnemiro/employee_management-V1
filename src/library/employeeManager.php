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
    return $updateEmployee;
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
