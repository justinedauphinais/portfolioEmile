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
    <script src="inc/script/form.js" defer></script>
    <script src="inc/script/dragQueen.js" defer></script>
    <link rel="stylesheet" href="https://use.typekit.net/jtd1rom.css">
    <title>Emile Rouillard</title>
</head>

<?php require_once('inc/setup_langue.php'); ?>

<body>
    <header>
        <div id="nameFlex">
            <div id="leftBracket" class="noOpacity bracketName"></div>
            <div id="emilerouillard">
                <div>
                    <div id="name1"></div>
                    <div id="socials" style="--height: 75px; --speed: 0.5s;">
                        <div id="socialsInnerDiv">
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
                </div>
                <div>
                    <div id="name2"></div>
                    <div id="email">
                        <p id="emailInnerDiv" style="--height: 16px; --speed: 0.3s;">emile.graphiste@gmail.com</p>
                    </div>
                </div>
                <div id="serviceDiv">
                    <div id="name3"></div>
                    <p id="service" class=<?= str_contains($_SERVER['REQUEST_URI'], "aPropos")?"":"hide"; ?>>service</p>
                </div>
                <div id="othersDiv">
                    <div id="name4"></div>
                    <p id="design" class=<?= str_contains($_SERVER['REQUEST_URI'], "aPropos")?"":"hide"; ?>><?php echo ($_SESSION['langue'] == "fr" )?"désign graphique":"graphic design" ?></p>
                    <p id="photographie" class=<?= str_contains($_SERVER['REQUEST_URI'], "aPropos")?"":"hide"; ?>><?php echo ($_SESSION['langue'] == "fr" )?"photographie":"photography" ?></p>
                </div>
                <div id="contactDiv">
                    <div id="name5"></div>
                    <p id="contact" class=<?= str_contains($_SERVER['REQUEST_URI'], "aPropos")?"":"hide"; ?>><?php echo ($_SESSION['langue'] == "fr" )?"me contactez":"contact me" ?></p>
                    <div id="langues" class=<?= str_contains($_SERVER['REQUEST_URI'], "index") || strcmp($_SERVER['REQUEST_URI'], '\\Emile\\') ? "" : "hide"; ?>>
                        <a href="<?= $url;?>?langue=en">Français</a>
                        <a href="<?= $url;?>?langue=fr">Anglais</a>
                    </div>
                </div>
            </div>
            <div id="rightBracket" class="noOpacity bracketName"></div>
        </div>
        <a href="aPropos.php" id="nameButton"></a>
    </header>

    <form id="contactModal" class="hide">
        <div id="modalNom">
            <label>
                <?php echo ($_SESSION['langue'] == "fr" )?"nom":"name" ?>
            </label>
            <input id="nomInput" type="text" name="subject" />
        </div>
        <div id="modalEmail">
            <label>email</label>
            <input id="emailInput" type="text" name="reply_to" />
        </div>
        <div id="modalMessage">
            <label>message</label>
            <textarea id="messageInput" name="text"></textarea>
        </div>
        <div id="modalButton">
            <button type="submit" id="sendButton"><?php echo ($_SESSION['langue'] == "fr" )?"envoyer":"send" ?> →</button>
        </div>
    </form>