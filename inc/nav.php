<nav>
    <div id="accueilLine">
        <a id="accueil" href="index.php">
            <?php echo ($_SESSION['langue'] == "fr" )?"accueil":"home" ?>
        </a>
        <p id="accueilBracketRight" class="noOpacity bracketAccueil">)</p>
        <p id="<?php echo ($_SESSION['langue'] == "fr" )?"accueilBracketLeft":"accueilBracketLeftEn" ?>" class="noOpacity bracketAccueil">(</p>
    </div>
    <div id="accueilLine">
        <a id="action" href="index.php">
            <?php echo ($_SESSION['langue'] == "fr" )?"action":"action" ?>
        </a>
        <p id="actionBracketRight" class="noOpacity bracketAction">)</p>
        <p id="actionBracketLeft" class="noOpacity bracketAction">(</p>
    </div>
    <div id="modeLine">
        <a id="mode" href="index.php">
            <?php echo ($_SESSION['langue'] == "fr" )?"mode":"mode" ?>
        </a>
        <p id="modeBracketRight" class="noOpacity bracketMode">)</p>
        <p id="modeBracketLeft" class="noOpacity bracketMode">(</p>
    </div>
    <div id="dragQueenLine">
        <a id="dragQueenLink" href="dragQueen.php">
            <?php echo ($_SESSION['langue'] == "fr" )?"drag queen":"drag queen" ?>
        </a>
        <p id="dragQueenBracketRight" class="noOpacity bracketDragQueen">)</p>
        <p id="dragQueenBracketLeft" class="noOpacity bracketDragQueen">(</p>
    </div>
</nav>