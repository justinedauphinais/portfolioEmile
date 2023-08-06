<?php $baseURL = "/portfolioEmile/"?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="inc/style/general.css">
    <link rel="stylesheet" href="inc/style/header.css">
    <link rel="stylesheet" href="inc/style/index.css">
    <link rel="stylesheet" href="inc/style/dragQueen.css">
    <link rel="stylesheet" href="inc/style/aPropos.css">
    <script src="inc/script/header.js" defer></script>
    <script src="inc/script/dragQueen.js" defer></script>
    <link rel="stylesheet" href="https://use.typekit.net/jtd1rom.css">
    <title>Emile Rouillard</title>
</head>

<?php require_once('inc/setup_langue.php'); ?>

<body>
    <aside>
        <ul>
            <?php 
                $url = substr($_SERVER['REQUEST_URI'], 0, strpos($_SERVER['REQUEST_URI'], "?"));
            ?>

            <li><a href="<?= $url;?>?langue=en">English</li>
            <li><a href="<?= $url;?>?langue=fr">Français</li>
        </ul>
    </aside>
    <header>
        <div id="nameFlex">
            <div id="leftBracket" class="noOpacity bracketName"></div>
                <div id="emilerouillard">
                    <div>
                        <div id="name1"></div>
                        <div id="socials">
                            <div id="socialLine">
                                <a id="behance" href="https://www.behance.net/Emile_Rouillard" target="_blank">behance</a>
                                <p id="behanceBracketRight" class="noOpacity bracketBehance">)</p>
                                <p id="behanceBracketLeft" class="noOpacity bracketBehance">(</p>
                            </div>
                            <div id="socialLine">
                                <a id="linkedin" href="https://www.linkedin.com/in/emile-rouillard/" target="_blank">linkedin</a>
                                <p id="linkedinBracketRight" class="noOpacity bracketLinkedin">)</p>
                                <p id="linkedinBracketLeft" class="noOpacity bracketLinkedin">(</p>
                            </div>
                            <div id="socialLine">
                                <a id="instagram" href="https://www.instagram.com/emilerouillard_photographe/" target="_blank">instagram</a>
                                <p id="instagramBracketRight" class="noOpacity bracketInstagram">)</p>
                                <p id="instagramBracketLeft" class="noOpacity bracketInstagram">(</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div id="name2"></div>
                        <p id="email">emile.graphiste@gmail.com</p>
                    </div>
                    <div id="serviceDiv">
                        <div id="name3"></div>
                        <p id="service" class=<?= str_contains($_SERVER['REQUEST_URI'], "aPropos")?"":"hide"; ?>>service</p>
                    </div>
                    <div id="othersDiv">
                        <div id="name4"></div>
                        <p id="design" class=<?= str_contains($_SERVER['REQUEST_URI'], "aPropos")?"":"hide"; ?>>désign graphique</p>
                        <p id="photographie" class=<?= str_contains($_SERVER['REQUEST_URI'], "aPropos")?"":"hide"; ?>>photographie</p>
                    </div>
                    <div id="contactDiv">
                        <div id="name5"></div>
                        <p id="contact" class=<?= str_contains($_SERVER['REQUEST_URI'], "aPropos")?"":"hide"; ?>>me contactez</p>
                    </div>
                </div>
            <div id="rightBracket" class="noOpacity bracketName"></div>
        </div>
        <a href="aPropos.php" id="nameButton"></a>
    </header>