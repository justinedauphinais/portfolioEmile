<?php $title = 'Accueil' ?>
<?php ob_start(); ?>

<main id="dragQueen">
    <section class="queenPhotos">
        <div id="models">
            <div id="modelsInnerDiv" style="--margin-top: 26px;">
                <p><?php echo ($_SESSION['langue'] == "fr" )?"modèle":"model" ?> : Lady Boom Boom</p>
                <p><?php echo ($_SESSION['langue'] == "fr" )?"modèle":"model" ?> : Fountain</p>
            </div>
        </div>
        <div id="scene">
            <div class="cube">
                <div class="cube__face cube__face--front">
                    <div id="boomboom" class="queenPhotos">
                        <div>
                            <div id="b_01" class="boomboomPhotos"></div>
                            <div id="b_02" class="boomboomPhotos hide"></div>
                            <div id="b_03" class="boomboomPhotos hide"></div>
                        </div>
                    </div>
                </div>
                <div class="cube__face cube__face--back">
                    <div id="" class="queenPhotos">
                        <div>
                            <div id="b_01" class=""></div>
                            <div id="b_02" class=" hide"></div>
                            <div id="b_03" class=" hide"></div>
                        </div>
                    </div>
                </div>
                <div class="cube__face cube__face--top">
                    <div id="" class="queenPhotos">
                        <div>
                            <div id="b_01" class=""></div>
                            <div id="b_02" class=" hide"></div>
                            <div id="b_03" class=" hide"></div>
                        </div>
                    </div>
                </div>
                <div class="cube__face cube__face--bottom">
                    <div id="" class="queenPhotos">
                        <div>
                            <div id="b_01" class=""></div>
                            <div id="b_02" class=" hide"></div>
                            <div id="b_03" class=" hide"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php $content = ob_get_clean(); ?>
<?php require('template.php'); ?>