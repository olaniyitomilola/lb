<?php

include('../controller.php');

if($_SERVER["REQUEST_METHOD"] == "POST"){
    try{
        $firstName = $_POST["first_name"];
        $lastName = $_POST["last_name"];
        $email = $_POST["email"];
        $password = $_POST["password"];

        $newPassword =  password_hash($password,PASSWORD_DEFAULT);

   

        $result = createManager($firstName,$lastName,$email, $newPassword);
        echo json_encode($result);

    }catch(Exception $error){
        $response = [
            'success' => false,
            'error' => $error
        ];

        echo json_encode($response);
    }
    
    
    

}

?>