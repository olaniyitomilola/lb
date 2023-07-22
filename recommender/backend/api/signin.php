<?php
include('../controller.php');
//for user verification while trying to sign up
if($_SERVER['REQUEST_METHOD'] == "GET"){
    try{
        $email = $_GET['email'];
        $result = getUser($email);
        if(count($result) > 0){
            //user already exist
            echo json_encode([
                'success' => true,
                'id' => $result[0]['user_id'],
                'message' => "user already exist"
            ]);
        }else{
            echo json_encode([
                'success' => false,
                'message' => "Account does not exist"
            ]);
        }
    }catch(Exception $e){
        echo json_encode([
            'message' => "something went wrong",
            'error' => $e->getMessage()
        ]);
    }
    
}
//to sign in a user
if($_SERVER['REQUEST_METHOD'] == "POST"){
    try{
        $email = $_POST['email'];
        $password = $_POST['password'];
        
        $result = getUser($email);
        if(count($result) > 0){
            //user already exist
            //check if password is correct
            if(password_verify($password,$result[0]['password'])){
               
                echo json_encode([
            'success' => true,
            'message' =>  $result[0]
            ]);
            
            }else{
                //incorrect password
                echo json_encode([
                    'success' => false,
                    'message' => "Invalid Username or Password"
                ]);
            }
        }else{
            //user does
            echo json_encode([
                'success' => false,
                'message' => "Invalid username or password"
            ]);
        }
    }catch(Exception $e){
        echo json_encode([
            'message' => "something went wrong",
            'error' => $e->getMessage()
        ]);
    }
    
}

?>