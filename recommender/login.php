<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recommender</title>
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">RECOMMENDER</div>
          
        </div>
        <div class="container_body sign_in">
            <h1>Manager's Log In</h1>
            <p>New Manager? <span><a href="./signup.php">Register</a></span></p>
            <form class="sign_in_form">
                <input type="email" placeholder="email" id="email" name="email">
                <input type="password" placeholder="********" id="password" name="password">
                <input type="button" value="Sign In" id="signInBtn">
                <div id="notification"></div>
            </form>
        </div>
    </div>
    <script src="./script.js"></script>
</body>
</html>