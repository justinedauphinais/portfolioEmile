<?php $title = 'Accueil' ?>
<?php ob_start(); ?>

<main id="dragQueen">
    <section id="boomboom" class="queenPhotos">
        <p class="noOpacity">model : Lady Boom Boom</p>
        <div>
            <div id="b_01" class="boomboomPhotos"></div>
            <div id="b_02" class="boomboomPhotos hide"></div>
            <div id="b_03" class="boomboomPhotos hide"></div>
        </div>
    </section>
    <section id="fountain" class="queenPhotos">
        <p>model : Lady Boom Boom</p>
        <div id="p_01"></div>
    </section>
    <section id="sam" class="queenPhotos">
        <p>model : Lady Boom Boom</p>
        <div id="p_01"></div>
    </section>
</main>

<?php $content = ob_get_clean(); ?>
<?php require('template.php'); ?>