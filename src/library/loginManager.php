<?php


echo 'we are here';


if (isset($username) and isset($password)) {
    // iterate the employees json
    $json = file_get_contents('../../resources/users.json');
    $users = json_decode($json);
    $usersTrue = json_decode($json, true);

    echo 'false->'.$users.'<br>';
    echo 'true->'.$usersTrue;
    echo $json;

// foreach ($users as $user) {
        // echo 'false';
        // echo $user;
    // }
} else {
    // echo error
    echo 'hola';
}
