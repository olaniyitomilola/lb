<?php
include('../controller.php');
//add risk_rating to product
if($_SERVER['REQUEST_METHOD'] == "POST"){
       try{
        $subscriberId = $_POST['subscriber_id'];
        $tokenId = $_POST['token_id'];
      

        $result = sendtoclient($tokenId,$subscriberId);
        echo json_encode($result);
    }catch(Exception $e){
        echo json_encode([
            'message' => "something went wrong",
            'error' => $e->getMessage()
        ]);
    }
    
   
}


?>