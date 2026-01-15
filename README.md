# Movie Box - Application de gestion de films

Une application React pour gérer votre collection de films avec possibilité d'ajouter, filtrer et afficher des films.

## Fonctionnalités

- ✅ Affichage de la liste des films avec leurs informations (titre, description, poster, note)
- ✅ Filtrage des films par titre et/ou note minimale
- ✅ Ajout de nouveaux films avec formulaire
- ✅ Interface utilisateur moderne et responsive

## Installation

1. Installer les dépendances :
```bash
npm install
```

## Lancement

Pour lancer l'application en mode développement :

```bash
npm start
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## Structure du projet

```
movie-boxv2/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MovieCard.js      # Composant pour afficher un film
│   │   ├── MovieCard.css
│   │   ├── MovieList.js      # Composant pour afficher la liste des films
│   │   ├── MovieList.css
│   │   ├── Filtre.js         # Composant de filtrage
│   │   └── Filtre.css
│   ├── App.js                # Composant principal
│   ├── App.css
│   ├── index.js
│   └── index.css
├── data.js                    # Données des films
└── package.json
```

## Utilisation

### Ajouter un film

Remplissez le formulaire "Ajouter un nouveau film" avec :
- **Titre** : Le titre du film
- **Description** : Une description du film
- **URL du poster** : L'URL de l'image du poster
- **Note** : Une note entre 1 et 5

### Filtrer les films

Utilisez la section "Filtrer les films" pour :
- Rechercher par **titre** : Tapez une partie du titre
- Filtrer par **note minimale** : Entrez une note minimale (1-5)
- Cliquez sur **Réinitialiser** pour effacer les filtres

## Technologies utilisées

- React 18.2.0
- CSS3
- Create React App


