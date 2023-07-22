<?php

include('../controller.php');

if($_SERVER["REQUEST_METHOD"] == "GET"){
    try{
        $tokenid = $_GET["id"];

        $response = removeToken($tokenid);
    
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