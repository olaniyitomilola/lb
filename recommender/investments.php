<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recommender | Investments</title>
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">RECOMMENDER</div>
            <div class="navLinks">
                <a href="./homepage.php">Home</a>
                <a href="./clients.php">Clients</a>
                <a class="active"  href="./investments.php">investments</a>


            </div>
          
        </div>
        <div class="container_body">

            <div class="searchClient tokens">
                <input type="search" placeholder="Search Token">
                <input type="button" value="Search">
            </div>

            <div class="tokenHeaderAndAdd">
                <h3>Token List</h3>
                <input type="button" value="Add">
            </div>
            <div class="tokenList">
                <div class="eachToken">
                    <div id="tokenIdentifier">BTC</div>
                    <div id="tokenName">Bitcoin</div>
                    <div id="tokenCategory">Layer 1</div>
                    <div id="tokenPrice">$29450</div>
                    <div id="riskLevel">Low</div>

                    <div class="eachTokenButtons">
                        <input type="button" value="Edit">
                        <input type="button" value="Send">
                    </div>

                </div>
                <div class="eachToken">
                    <div id="tokenIdentifier">ETH</div>
                    <div id="tokenName">Ethereum</div>
                    <div id="tokenCategory">Layer 1</div>
                    <div id="tokenPrice">$1,898.39</div>
                    <div id="riskLevel">Moderate</div>
                    <div class="eachTokenButtons">
                        <input type="button" value="Edit">
                        <input type="button" value="Send">
                    </div>

                </div>
                 <div class="eachToken">
                    <div id="tokenIdentifier">ADA</div>
                    <div id="tokenName">Cardano</div>
                    <div id="tokenCategory">Layer 1</div>
                    <div id="tokenPrice">$0.3271</div>
                    <div id="riskLevel">High</div>
                    <div class="eachTokenButtons">
                        <input type="button" value="Edit">
                        <input type="button" value="Send">
                    </div>
                </div>
            </div>
          
        </div>
    </div>
    <script src="./script.js"></script>
</body>
</html>