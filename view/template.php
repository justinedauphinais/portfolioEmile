<?php 
    define('__ROOT__', dirname(dirname(__FILE__)));

    require_once(__ROOT__.'/inc/header.php');
    require_once(__ROOT__.'/inc/nav.php');
?>

<?= $content ?>

<?php require_once(__ROOT__.'/inc/footer.php'); ?>