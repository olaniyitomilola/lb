<?php

include('../controller.php');

if($_SERVER["REQUEST_METHOD"] == "POST"){
    try{
        $firstName = $_POST["first_name"];
        $lastName = $_POST["last_name"];
        $email = $_POST["email"];
      
        if(isset($_POST["layer1"])){
            $layer1 = true;
        } else{$layer1 = null;}

        if(isset($_POST["layer2"])){
            $layer2 = true;
        } else{$layer2 = null;}

        if(isset($_POST["smart_contract"])){
            $smartContract = true;
        }else{$smartContract = null;}
        if(isset($_POST["defi"])){
            $defi = true;
        } else{$defi = null;}

         if(isset($_POST["liquid_staking_tokens"])){
            $lst = true;
        } else{$lst = null;}

        $result = createSubscription($firstName,$lastName,$email,$layer1,$lst, $defi, $smartContract,$layer2);
        echo json_encode($result);

    }catch(Exception $error){
        $response = [
            'success' => false,
            'error' => $error
        ];

        echo json_encode($response);
    }
    
    
    

}

if($_SERVER["REQUEST_METHOD"] == "GET"){
    try{
        $category = $_GET["category"];
        
        $result = getUsersWithCategory($category);
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