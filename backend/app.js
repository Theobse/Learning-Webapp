"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.use(express.json());

app.get('/api/liveness', (req, res) => {
    res.send('OK !!!');
});


const { Pool } = require('pg');
// Configuration de la connexion à la base de données
const pool = new Pool({
    user: 'LearningDbUser', // Utilisateur de la base de données
    host: 'localhost', // Nom du serveur (dans ce cas, localhost)
    database: 'LearningFactDb', // Nom de la base de données
    password: 'root', // Mot de passe de l'utilisateur
    port: 5432, // Port par défaut de PostgreSQL
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données', err);
    } else {
        console.log('Connexion à la base de données réussie !');
        // Vous pouvez effectuer d'autres opérations ici
    }
});









const { Sequelize } = require('sequelize');
const { LearningPackage } = require('./learningPackage.model');
const { Course } = require('./course.model'); // Assurez-vous que le modèle est correctement exporté

// Remplacez les informations suivantes par votre configuration de base de données PostgreSQL
const sequelize = new Sequelize('LearningFactDb', 'LearningDbUser', 'root', {
    host: 'localhost',
    dialect: 'postgres', // Spécifiez le dialecte comme PostgreSQL
    port: 5432,
});

(async () => {
    try {
        await sequelize.authenticate(); // Vérifie la connexion à la base de données
        console.log('Connexion à la base de données réussie.');

        await LearningPackage.sync({ alter: true });
        console.log('La synchronisation de LearningPackage avec la base de données a réussi.');

        await Course.sync({ alter: true });
        console.log('La synchronisation de Course avec la base de données a réussi.');
    } catch (error) {
        console.error('Erreur lors de la synchronisation avec la base de données :', error);
    }
})();










app.get('/api/learning-package', async (req, res) => {
    try {
        // Utiliser Sequelize pour récupérer tous les éléments de LearningPackage depuis la base de données
        const learningPackages = await LearningPackage.findAll();

        // Répondre avec les LearningPackages récupérés en JSON
        res.status(200).json(learningPackages);
    } catch (error) {
        // Gérer les erreurs lors de la récupération des LearningPackages
        res.status(500).json({ message: 'Erreur lors de la récupération des LearningPackages.', error: error.message });
    }
});



app.post('/api/learning-package', async (req, res) => {
    try {
        const newPackage = await LearningPackage.create(req.body); // Utiliser Sequelize pour créer un nouveau LearningPackage dans la base de données
        res.status(200).json(newPackage); // Répondre avec le LearningPackage créé en JSON
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création du LearningPackage.', error: error.message });
    }
});

app.put('/api/learning-package/:id', async (req, res) => {
    try {
        const packageId = req.params.id; // Récupérez l'identifiant du LearningPackage depuis les paramètres de l'URL
        const updatedPackageName = req.body.packageName; // Récupérez le nouveau nom du package à partir du corps de la requête

        // Trouvez le LearningPackage par ID dans la base de données
        const learningPackage = await LearningPackage.findByPk(packageId);

        if (!learningPackage) {
            // Si le package n'est pas trouvé, renvoyez une erreur 404
            return res.status(404).json({ message: `LearningPackage avec l'ID ${packageId} non trouvé.` });
        }

        // Mettez à jour le champ packageName avec la nouvelle valeur
        learningPackage.packageName = updatedPackageName;

        // Enregistrez les modifications dans la base de données
        await learningPackage.save();

        // Répondre avec le LearningPackage mis à jour
        res.status(200).json(learningPackage);
    } catch (error) {
        // Gérer les erreurs lors de la mise à jour du LearningPackage
        res.status(500).json({ message: 'Erreur lors de la mise à jour du LearningPackage.', error: error.message });
    }
});


// Route DELETE pour supprimer un LearningPackage par son ID
app.delete('/api/package/:packageId', async (req, res) => {
    try {
        const packageId = req.params.packageId; // Récupérez l'identifiant du LearningPackage depuis les paramètres de l'URL

        // Trouvez le LearningPackage par ID dans la base de données
        const learningPackage = await LearningPackage.findByPk(packageId);
        if (!learningPackage) {
            return res.status(404).json({ message: `LearningPackage avec l'ID ${packageId} non trouvé.` });
        }

        // Supprimez le LearningPackage de la base de données
        await learningPackage.destroy();

        // Répondre avec un message de réussite
        res.status(200).json({ message: `LearningPackage avec l'ID ${packageId} supprimé.` });
    } catch (error) {
        // Gérer les erreurs lors de la suppression du LearningPackage
        res.status(500).json({ message: 'Erreur lors de la suppression du LearningPackage.', error: error.message });
    }
});

app.post('/api/Creation', async (req, res) => {
    try {
        const newPackage = await LearningPackage.create(req.body); // Utiliser Sequelize pour créer un nouveau LearningPackage dans la base de données
        res.status(200).json(newPackage); // Répondre avec le LearningPackage créé en JSON
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création du LearningPackage.', error: error.message });
    }
});


// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});






