<?php session_start();

// Est-ce qu'un paramètre action est présent
if (isset($_REQUEST['action'])) {

    // Est-ce que l'action demandée est l'accueil
    if ($_REQUEST['action'] == 'home') {
        // Ajoute le controleur de Produit
        require('controller/controllerAccueil.php');

        // Appel la fonction listProduits contenu dans le controleur de Produit
        home();
    }
}
else {
    // Ajoute le controleur de Produit
    require('controller/controllerAccueil.php');
    
    // Appel la fonction listProduits contenu dans le controleur de Produit
    home();
}

?>