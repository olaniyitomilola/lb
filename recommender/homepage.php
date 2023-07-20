<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recommender | Home</title>
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">RECOMMENDER</div>
            <div class="navLinks">
                <a class="active" href="./homepage.php">Home</a>
                <a href="./clients.php">Clients</a>
                <a href="./investments.php">investments</a>
            </div>
          
        </div>
        <div class="container_body">
            <div class="analysisBox">
                <div class="box">
                    <h4>Number of Subscribed Clients</h4>
                    <h2>4</h2>
                </div>
                <div class="box">
                    <h4>Number of Tokens</h4>
                    <h2>20</h2>
                </div>
            </div>
            <div class="tokenBySector">
                <h4>Tokens by  categories</h4>
                <div class="tokenCategory">
                    <div class="eachCategory">
                        <div id="category">Layer 1</div>
                        <div id="numIncat">5</div>
                    </div>
                    <div class="eachCategory">
                        <div id="category">Exchange-based Tokens</div>
                        <div id="numIncat">5</div>
                    </div>
                    <div class="eachCategory">
                        <div id="category">Liquid Staking Tokens</div>
                        <div id="numIncat">7</div>
                    </div>
                     <div class="eachCategory">
                        <div id="category">Yield Farming</div>
                        <div id="numIncat">3</div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    <script src="./script.js"></script>
</body>
</html>