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
        <div class="container_body index">
            <h1>Invest with Confidence</h1>
            <div id="tagline">Invest with confidence with <span>RECOMMENDER,</span> Our team of experts will help you make the most of your money</div>
            <form class="subscription_form">
                <h3>Subscribe</h3>
                <input id="sub" class="firstName" type="text" placeholder="First Name" name="first_name">
                <input id="sub" type="text" class="lastName" placeholder="Last Name" name="last_name">
                <input id="sub" type="email" class="email" placeholder="email" name="email">
                <h4>Preferences</h4>
                <div class="preferences">
                    <label for="layer1">Layer 1</label>
                    <input type="checkbox" name="layer1">
                    <label for="smart_contract">Smart Contract Platform</label>
                    <input type="checkbox" name="smart_contract">
                    <label for="liquid_staking_tokens">Liquid Staking Tokens</label>
                    <input type="checkbox" name="liquid_staking_tokens">
                    <label for="layer1">Decentralized Finance</label>
                    <input type="checkbox" name="defi">
                    <label for="layer2">Layer 2</label>
                    <input type="checkbox" name="layer2">
                </div>
                <div id="notification"></div>
                <input class="indexBtn" type="button" value="Subscribe">
            </form>
        </div>
    </div>
    <script src="./script.js"></script>
</body>
</html>