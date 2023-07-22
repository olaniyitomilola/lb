<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recommender | Clients</title>
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">RECOMMENDER</div>
            <div class="navLinks">
                <a  href="./homepage.php">Home</a>
                <a class="active" href="./clients.php">Clients</a>
                <a href="./investments.php">Investments</a>
            </div>
        </div>
        <div class="container_body">
            <div class="searchClient">
                <input type="search" placeholder="Search Client">
                <input type="button" value="Search">
            </div>
            <div class="clientListHeader">
                <h3>Client List</h3>
            </div>
            <div class="clientList">
                <div class="eachClient">
                    <div class="clientInfo">
                        <div class="clientName">
                            Michael Blackson
                        </div>
                        <ul class="clientPreferences">
                            <li>Layer 1</li>
                            <li>Liquid Staking Tokens</li>
                            <li>Decentralized Finance</li>
                            <li>Smart Contract Platform</li>
                            <li>Layer 2</li>
                        </ul>
                        <div class="riskTolerance">Risk Tolerance: <span>High</span></div>

                    </div>
                    <div class="clientRecomendations">
                        <h3>Recommended Tokens</h3>
                        <ul>
                            <li>Bitcoin</li>
                            <li>Ethereum</li>
                            <li>Cardano</li>
                        </ul>

                    </div>

                </div>
                 <div class="eachClient">
                    <div class="clientInfo">
                        <div class="clientName">
                            Bankole Williams
                        </div>
                        <ul class="clientPreferences">
                            <li>Layer 1</li>
                            <li>Liquid Staking Tokens</li>
                      
                        </ul>
                        <div class="riskTolerance">Risk Tolerance: <span>Low</span></div>

                    </div>
                    <div class="clientRecomendations">
                        <h3>Recommended Tokens</h3>
                        <ul>
                            <li>Bitcoin</li>
                            <li>Ethereum</li>
                            <li>Cardano</li>
                        </ul>

                    </div>

                </div>
            </div>
          
        </div>
    </div>
    <script src="./script.js"></script>
</body>
</html>