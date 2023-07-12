<?php session_start();

// Est-ce qu'un paramètre action est présent
if (isset($_REQUEST['action'])) {

    // Est-ce que l'action demandée est l'accueil
    if ($_REQUEST['action'] == 'home') {
        // Ajoute le controleur de la page 'à propos'
        require('controller/controllerAPropos.php');
        
        // Appel la fonction aPropos pour afficher la page
        aPropos();
    }
}
else {
    // Ajoute le controleur de la page 'à propos'
    require('controller/controllerAPropos.php');
    
    // Appel la fonction aPropos pour afficher la page
    aPropos();
}

?>