<?php

include('../controller.php');

if($_SERVER["REQUEST_METHOD"] == "POST"){
    try{
        $token_name = $_POST["token_name"];
        $token_identifier = $_POST["token_identifier"];
        $token_price = $_POST["token_price"];
        $token_category = $_POST["token_category"];
        $token_risk = $_POST["token_risk"];
    
        $response = AddToken($token_name,$token_identifier,$token_price,$token_category,$token_risk);
    
        echo json_encode($response);
    }catch(Exception $error){
        $response = [
            'success' => false,
            'error' => $error
        ];

        echo json_encode($response);
    }
    
    
    

}

?>