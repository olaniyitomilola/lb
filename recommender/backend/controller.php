
<?php
   include('connect.php');

    //This function fetches all the tokens in the investment_idea table
    //in the database
    function getAllTokens(){
        try{
            $query = $GLOBALS['pdo']->prepare("SELECT * FROM investment_ideas");
            
            $query->execute();

            $result = $query->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        }catch(Exception $e){
            return [
                'success' => false,
                'code' => $e->getCode(),
                'message' => $e->__toString()
            ];
        }
    }

    function AddToken($token_name,$token_identifier, $token_price, $token_category, $token_risk){
        try{
            
            $stmt = $GLOBALS['pdo']->prepare("INSERT INTO  investment_ideas (token_name, token_identifier,token_price, token_category, token_risk) VALUES(:token_name,:token_identifier,:token_price,:token_category,:token_risk )");
            $stmt->bindParam(':token_name',$token_name);
            $stmt->bindParam(':token_identifier',$token_identifier);
            $stmt->bindParam(':token_price',$token_price);
            $stmt->bindParam(':token_category',$token_category);
            $stmt->bindParam(':token_risk',$token_risk);


            $stmt->execute();  
            $res = [
                'success'=> true
            ] ;
            return $res;                                                      
        } catch(Exception $e){
            $res = [
                'success'=> false,
                'error' => $e->getMessage()
            ];
            return $res;
        }
    
    }

    function createSubscription($firstName,$lastName, $email, $layer_1, $liquid_staking_platform,$defi, $smart_contract_platform,$layer_2){
        try{
            $stmt = $GLOBALS['pdo']->prepare("INSERT INTO  subscription_list (first_name, last_name,email, layer_1, liquid_staking_token,defi,smart_contract_platform,layer_2) VALUES(:first_name, :last_name,:email, :layer_1, :liquid_staking_token,:defi,:smart_contract_platform,:layer_2 )");
            $stmt->bindParam(':first_name',$firstName);
            $stmt->bindParam(':last_name',$lastName);
            $stmt->bindParam(':email',$email);
            $stmt->bindParam(':layer_1',$layer_1);
            $stmt->bindParam(':liquid_staking_token',$liquid_staking_platform,);
            $stmt->bindParam(':defi',$defi);
            $stmt->bindParam(':smart_contract_platform',$smart_contract_platform);
            $stmt->bindParam(':layer_2',$layer_2);



            $stmt->execute();  
            $res = [
                'success'=> true
            ] ;
            return $res;                                                      
        } catch(Exception $e){
            $res = [
                'success'=> false,
                'error' => $e->getMessage()
            ];
            return $res;
        }
    
    }

     function createManager($firstName,$lastName, $email,$password){
        try{
            $stmt = $GLOBALS['pdo']->prepare("INSERT INTO  managers (first_name, last_name,email, password) VALUES(:first_name, :last_name,:email, :password )");
            $stmt->bindParam(':first_name',$firstName);
            $stmt->bindParam(':last_name',$lastName);
            $stmt->bindParam(':email',$email);
            $stmt->bindParam(':password',$password);
           
            $stmt->execute();  
            $res = [
                'success'=> true
            ] ;
            return $res;                                                      
        } catch(Exception $e){
            $res = [
                'success'=> false,
                'error' => $e->getMessage()
            ];
            return $res;
        }
    
    }

    //this function returns the details of registered clients
    function getClients(){
        try{
            $query = $GLOBALS['pdo']->prepare("SELECT * FROM subscription_list");
            
            $query->execute();

            $result = $query->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        }catch(Exception $e){
            return [
                'success' => false,
                'code' => $e->getCode(),
                'message' => $e->__toString()
            ];
        }
    }

    //
    function getUser($email){
    try{
        //
      
        $query = $GLOBALS['pdo']->prepare("SELECT * FROM managers where email = :email ");
        $query->bindParam(':email',$email);
        $query->execute();

        $result = $query->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }catch(PDOException $e){
        return [
            'success' => false,
            'code' => $e->getCode(),
            'message' => $e->__toString()
        ];
    }
}

function getClientRecommendation($userId){

    try{
        $query = $GLOBALS['pdo']->prepare("SELECT r.* , token.*
                                            FROM recommended_tokens r
                                            JOIN investment_ideas token ON r.token_id = token.id
                                            WHERE subscriber_id = :userId");
        $query->bindParam(':userId',$userId);


        $query->execute();  
        $result = $query->fetchAll(PDO::FETCH_ASSOC);
        $res = [
            'success'=> true,
            'message' =>$result

        ] ;
        return $res;                                                      
    } catch(Exception $e){
        $res = [
            'success'=> false,
            'error' => $e->getMessage()
        ];
        return $res;
    }
    
}

   
   
    //remove token from db


function removeToken($tokenid){
    try{
        $stmt = $GLOBALS['pdo'] ->prepare("DELETE FROM investment_ideas
                                             where id = :id");
        $stmt->bindParam('id',$tokenid);
        $stmt -> execute();

        $result = [
            'success' => true,
        ];

        return $result;

    }catch(PDOException $e){
        return[
            'sucess'=> false,
            'error' => 'Error' .$e->getMessage()
        ];
    }
}

function getUsersWithCategory($xchange){
    try{
        if($xchange == "Layer 1"){
            $query = $GLOBALS['pdo']->prepare("SELECT * FROM  subscription_list
        
            WHERE layer_1 IS NOT NULL");  
        }else if($xchange == "Smart Contract Platform"){
            $query = $GLOBALS['pdo']->prepare("SELECT * FROM subscription_list 
        
            WHERE smart_contract_platform IS NOT NULL");  
        }else if($xchange == "Layer 2"){
            $query = $GLOBALS['pdo']->prepare("SELECT * FROM subscription_list 
        
            WHERE layer_2 IS NOT NULL");   
        }else if($xchange == "Liquid Staking Tokens"){
            $query = $GLOBALS['pdo']->prepare("SELECT * FROM subscription_list 
        
            WHERE liquid_staking_token IS NOT NULL");   
        }
        else{
            $query = $GLOBALS['pdo']->prepare("SELECT * FROM subscription_list 
        
            WHERE defi IS NOT NULL");  
        }
    
        $query->execute();
        
        $result = $query->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }catch(Exception $e){
        $res = [
            'success'=> false,
            'error' => $e->getMessage()
        ];
        return $res;
    }
   
   
}

//send recommendation to cliebnt
function sendtoclient($token_id, $clientId){

    try{
        $query = $GLOBALS['pdo']->prepare("INSERT INTO  recommended_tokens (subscriber_id, token_id) VALUES(:subscriber_id,:token_id )");
        $query->bindParam(':token_id',$token_id);
        $query->bindParam(':subscriber_id',$clientId);


        $query->execute();  
        $res = [
            'success'=> true
        ] ;
        return $res;                                                      
    } catch(Exception $e){
        $res = [
            'success'=> false,
            'error' => $e->getMessage()
        ];
        return $res;
    }
    
}


?>