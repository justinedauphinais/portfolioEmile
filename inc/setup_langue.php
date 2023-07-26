<?php 

if (isset($_REQUEST['langue'])) {
    $_SESSION['langue'] = $_REQUEST['langue'];
}

// Set la langue par défaut
if (!isset($_SESSION['langue'])) {
    $_SESSION['langue'] = 'en';
}

$langue = $_SESSION['langue'];
?>