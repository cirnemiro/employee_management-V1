<?php

function loginValidation($username , $password){
    if ($username && $password ) {
        // json for validation
        $json = file_get_contents('../../resources/users.json');
        $users = json_decode($json,true);
        
        // iterate the employees json for validation
        foreach ($users as $user) {
            if ($user[0]['name'] === $username) {
                $passwordVerification = password_verify ($password , $user[0]['password']) ;
                if ($passwordVerification) {      
                    echo 'success';
                    return $username;
                }
                else{
                    return false;
                }
            }else{
                return false;
            }
        }
    } else {
        // echo error -> redirect login
        
    }
} 

