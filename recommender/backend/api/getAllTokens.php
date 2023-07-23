<?php
    include('../controller.php');

    if($_SERVER['REQUEST_METHOD'] == "GET"){
        try{
            $result = getAllTokens();
            echo json_encode($result);
        }catch(Exception $e){
            echo json_encode([
                'message' => "something went wrong",
                'error' => $e->getMessage()
            ]);
        }
    
    }

     if($_SERVER['REQUEST_METHOD'] == "POST"){
        try{
            $userId = $_POST['id'];
            $result = getClientRecommendation($userId);
            echo json_encode($result);
        }catch(Exception $e){
            echo json_encode([
                'message' => "something went wrong",
                'error' => $e->getMessage()
            ]);
        }
    
    }


?>