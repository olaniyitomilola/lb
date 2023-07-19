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
            <h1>Register a New Account</h1>
            <p>Already have an Account?<span><a href="./login.php">Log in</a></span></p>
            <form>
                <input type="text" placeholder="First Name" name="first_name" id="first_name" name="first_name">
                <input type="text" placeholder="Last Name" name="last_name" id="last_name" name="last_name">
                <input type="email" placeholder="Email" id="email" name="email">
                <input type="password" placeholder="Enter Password" id="password" name="password">
                <input type="password" placeholder="Confirm Password" id="confirm_password">

                <input type="button" value="Register">
            </form>
        </div>
    </div>
    <script src="./script.js"></script>
</body>
</html>