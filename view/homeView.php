<?php $title = 'Accueil' ?>
<?php ob_start(); ?>

<main id="index">
    <div id="photos">
        <div id="photo_01"></div>
        <div id="photo_02"></div>
    </div>
</main>

<?php $content = ob_get_clean(); ?>
<?php require('template.php'); ?>