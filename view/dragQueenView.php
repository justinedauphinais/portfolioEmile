<?php $title = 'Accueil' ?>
<?php ob_start(); ?>

<main id="dragQueen">
    <section id="0" class="queenPhotos">
        <p>model : Lady Boom Boom</p>
        <div id="photo_01"></div>
    </section>
    <section id="1" class="queenPhotos">
        <p>model : Lady Boom Boom</p>
        <div id="photo_01"></div>
    </section>
    <section id="2" class="queenPhotos">
        <p>model : Lady Boom Boom</p>
        <div id="photo_01"></div>
    </section>
</main>

<?php $content = ob_get_clean(); ?>
<?php require('template.php'); ?>