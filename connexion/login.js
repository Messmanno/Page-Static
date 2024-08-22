function login() {
    // Récupération des éléments du formulaire
    var usernameField = document.getElementById('username');
    var passwordField = document.getElementById('password');
    var errorMessage = document.getElementById('error-message');
    
    // Récupération des valeurs des champs
    var username = usernameField.value.trim();
    var password = passwordField.value.trim();
    
    // Réinitialiser le message d'erreur et les styles
    errorMessage.style.display = 'none';
    errorMessage.innerHTML = ''; 
    usernameField.classList.remove('is-invalid');
    passwordField.classList.remove('is-invalid');

    // Validation des champs vides
    var valid = true;
    if (username === "") {
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'Le champ Nom d\'utilisateur est requis.';
        usernameField.classList.add('is-invalid');
        valid = false;
    }
    if (password === "") {
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'Le champ Mot de passe est requis.';
        passwordField.classList.add('is-invalid');
        valid = false;
    }

    if(username === "" && password === ""){
                errorMessage.style.display = "block";
                errorMessage.innerHTML = "Veuillez remplir les champs.";
                usernameField.classList.add('is-invalid');
                passwordField.classList.add('is-invalid');
                valid = false;
        
            }
    
    if (!valid) return; // Arrête la fonction si un champ est vide

    // Simulation de la validation (vous pouvez ajouter votre propre logique ici)
    if (username === "admin" && password === "admin") {
        alert("Connexion réussie !");
        window.location.href = "/Dashboard.html"
        // Redirection ou toute autre action après la connexion
    } else {
        // Affiche un message d'erreur si les identifiants sont incorrects
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
}
