Ce projet est une application web de type "Portfolio en Ligne" construite avec React et React Router. Il vise à présenter mes compétences de développeur web, mes services, mes réalisations passées (Portfolio) et à fournir un moyen simple de me contacter.L'application est une Single Page Application (SPA), permettant une navigation fluide entre les différentes sections sans rechargement complet de la page.

Technologies principales : React, React Router.
Styling : Bootstrap.
⚙️ PrérequisAvant de commencer, assurez-vous que les éléments suivants sont installés sur votre machine :Node.js : Version 16 ou supérieure (recommandé).npm (Node Package Manager) ou Yarn.Vous pouvez vérifier vos versions en exécutant les commandes suivantes dans votre terminal :

Bashnode -v
npm -v

🖥️ Instructions d'Installation et de Lancement

Suivez les étapes ci-dessous pour installer les dépendances et démarrer l'application en local.1
. Cloner le Dépôt 

Ouvrez votre terminal et clonez le dépôt Git à l'aide de la commande :
Bash  git clone 
https://git-scm.com/book/fr/v2/Les-bases-de-Git-Demarrer-un-depot-Git
cd [john-doe-portfolio]

2. Installation des DépendancesInstallez tous les paquets nécessaires (y compris react-router-dom) définis dans le fichier package.json :Bash  
npm install
# ou
# yarn install

3. Lancement de l'ApplicationDémarrez le serveur de développement local. Cette commande lancera l'application dans votre navigateur par défaut (généralement à l'adresse http://localhost:5173 ou http://localhost:3000).Bashnpm run dev
# ou
# npm start 
# (selon la commande configurée dans votre package.json)
L'application est maintenant lancée et prête à être utilisée en mode développement.
📂 Structure des Routes
L'application utilise React Router pour gérer les chemins de navigation :
Chemin de l'URL Composant Rendu Description "/Home.jsx" Page d'accueil avec une présentation des services 
Détail des prestations proposées "./Services.jsx"
Galerie des réalisations et projets "./Portfolio.jsx"
Formulaire de contact et informations"./contact.jsx"
Mentions légales du site "./Mentions.jsx"