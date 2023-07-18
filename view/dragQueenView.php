<?php $title = 'Accueil' ?>
<?php ob_start(); ?>

<main id="dragQueen">
    <section>
        <p>model : Lady Boom Boom</p>
        <div id="photo_01"></div>
    </section>
</main>

<?php $content = ob_get_clean(); ?>
<?php require('template.php'); ?>