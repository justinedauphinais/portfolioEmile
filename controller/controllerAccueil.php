<?php

// Ce fichier est appelé par le routeur (index.php) et gère le comportement
// de la page d'accueil

// Fonction qui affichera l'accueil
function home() {
    // Appel la vue accueil
    require('view/homeView.php');
}

?>