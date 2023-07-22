<?php 
// connection params using PDO
$host = 'localhost';
$dbUser = "root";
$dbPass = "";
$database = "recommender";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false
];



//connection to database using PDO by creating a new PDO object '$conn*-'

try{
    $pdo = new PDO("mysql:host=$host;dbname=$database",$dbUser,$dbPass,$options);

}catch(PDOException $e){
    echo json_encode([
        'message' => 'Connection to database failed: '. $e->getMessage()
    ]) ;
    exit();
}


?>