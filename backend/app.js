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



app.delete('/supMatiere/:packageName', async (req, res) => {
    const packageName = req.params.packageName;

    try {
        const learningPackage = await LearningPackage.findOne({
            where: { packageName: packageName }
        });

        if (!learningPackage) {
            return res.status(404).json({ message: `LearningPackage avec le nom ${packageName} non trouvé.` });
        }

        await learningPackage.destroy();

        res.status(200).json({ message: `LearningPackage avec le nom ${packageName} supprimé.` });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du LearningPackage.', error: error.message });
    }
});






const { Sequelize } = require('sequelize');
const { LearningPackage } = require('./learningPackage.model');
const { Course } = require('./course.model'); // Assurez-vous que le modèle est correctement exporté
const { Question } = require('./question.model');

const sequelize = new Sequelize('LearningFactDb', 'LearningDbUser', 'root', {
    host: 'localhost',
    dialect: 'postgres',
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

        await Question.sync({ alter: true });
        console.log('La synchronisation de Question avec la base de données a réussi.');
    } catch (error) {
        console.error('Erreur lors de la synchronisation avec la base de données :', error);
    }
})();

// Récupération des Learning Packages avec leur nombre de courses associées
app.get('/api/charts', async (req, res) => {
    try {
        const learningPackages = await LearningPackage.findAll({
            attributes: ['id', 'packageName'], // Sélectionne les attributs à récupérer
            raw: true
        });

        // Récupère les IDs des packages d'apprentissage
        const packageIds = learningPackages.map(learningPackage => learningPackage.id);

        // Compte le nombre de cours pour chaque package
        const courseCounts = await Course.findAll({
            attributes: ['learning_package_id', [Sequelize.fn('COUNT', Sequelize.col('id')), 'courseCount']],
            where: {
                learning_package_id: packageIds
            },
            group: ['learning_package_id'],
            raw: true
        });

        // Fusionne les données des packages avec les counts de cours
        const packagesWithCourseCount = learningPackages.map(pkg => {
            const matchingCourseCount = courseCounts.find(course => course.learning_package_id === pkg.id);
            return {
                ...pkg,
                courseCount: matchingCourseCount ? parseInt(matchingCourseCount.courseCount) : 0
            };
        });

        res.status(200).json(packagesWithCourseCount); // Répond avec les packages et le nombre de cours associés
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des données.', error: error.message });
    }
});


app.get('/api/learning-package', async (req, res) => {
    try {
        const learningPackages = await LearningPackage.findAll();

        res.status(200).json(learningPackages);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des LearningPackages.', error: error.message });
    }
});

app.get('/api/learning-package2', async (req, res) => {
    try {
        const learningPackages = await LearningPackage.findAll();

        res.status(200).json(learningPackages);
    } catch (error) {
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

app.post('/api/CreationQuestion', async (req, res) => {
    try {
        const newQuestion = await Question.create(req.body); // Utiliser Sequelize pour créer un nouveau LearningPackage dans la base de données
        res.status(200).json(newQuestion); // Répondre avec le LearningPackage créé en JSON
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de la question.', error: error.message });
    }
});

app.delete('/api/DeleteQuestion/:id', async (req, res) => {
    const questionID = req.params.id; // Utilisez "id" au lieu de "QuestionID"

    try {
        const question = await Question.findOne({
            where: { QuestionID: questionID }
        });

        if (!question) { // Utilisez "question" au lieu de "learningPackage"
            return res.status(404).json({ message: `Question avec l'id ${questionID} non trouvé.` });
        }

        await question.destroy();

        res.status(200).json({ message: `Question avec l'id ${questionID} supprimé.` });
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de la question.', error: error.message });
    }
});


app.get('/api/QuestionsByCourseID/:CourseID', async (req, res) => {
    const CourseID = req.params.CourseID;

    try {
        const questions = await Question.findAll({
            attributes: ['QuestionID', 'Question', 'Answer'],
            where: { CourseID: CourseID }
        });

        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des questions.', error: error.message });
    }
});

app.put('/api/updateQuestionParameter/:questionId', async (req, res) => {
    const questionId = req.params.questionId;
    const { fieldToUpdate, incrementValue } = req.body;

    try {
        // Récupérez la question existante
        const existingQuestion = await Question.findByPk(questionId);

        if (!existingQuestion) {
            return res.status(404).json({ message: 'Question non trouvée.' });
        }

        // Vérifiez si le champ à mettre à jour existe dans la question
        if (!existingQuestion[fieldToUpdate]) {
            return res.status(400).json({ message: `Champ ${fieldToUpdate} à mettre à jour non trouvé dans la question.` });
        }

        // Incrémente la valeur du champ spécifié
        existingQuestion[fieldToUpdate] += incrementValue;

        // Enregistrez les modifications dans la base de données
        await existingQuestion.save();

        res.status(200).json({ message: 'Question mise à jour avec succès.' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de la question.', error: error.message });
    }
});

app.post('/api/CreationMatiere', async (req, res) => {
    try {
        const newPackage = await LearningPackage.create(req.body); // Utiliser Sequelize pour créer un nouveau LearningPackage dans la base de données
        res.status(200).json(newPackage); // Répondre avec le LearningPackage créé en JSON
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création du LearningPackage.', error: error.message });
    }
});

app.post('/api/Cours', async (req, res) => {
    try {
        const newCourse = await Course.create(req.body); // Utiliser Sequelize pour créer un nouveau LearningPackage dans la base de données
        res.status(200).json(newCourse); // Répondre avec le LearningPackage créé en JSON
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création du cours.', error: error.message });
    }
});

app.post('/api/Coursv2', async (req, res) => {
    try {
        const { title, description, learning_package_id } = req.body;

        const learningPackage = await LearningPackage.findOne({
            where: { packageName: learning_package_id }
        });

        if (!learningPackage) {
            return res.status(404).json({ message: 'Matière non trouvée.' });
        }

        const newCourse = await Course.create({
            title: title,
            description: description,
            learning_package_id: learningPackage.id
        });

        res.status(200).json(newCourse);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création du cours.', error: error.message });
    }
});

app.get('/api/cours/', async (req, res) => {
    try {
        const listcours = await Course.findAll();
        res.status(200).json(listcours)
    }
    catch (error) {
        res.status(400).json({message: 'Erreur lors de la récupération des cours'});
    }
});

app.get('/api/cours-by-matiere/:matiere', async (req, res) => {
    try {
        const matiere = req.params.matiere;
        const learningPackage = await LearningPackage.findOne({
            where: { packageName: matiere }
        });
        if (!learningPackage) {
            return res.status(404).json({ message: 'Aucun cours trouvé pour cette matière.' });
        }
        const courses = await Course.findAll({
            where: { learning_package_id: learningPackage.id },
            attributes: ['title'] // Sélectionner uniquement l'attribut 'title'
        });

        const courseTitles = courses.map(course => course.title); // Récupérer uniquement les titres

        res.status(200).json(courseTitles);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des cours par matière.', error: error.message });
    }
});

app.get('/api/cours-by-matiere1/:matiere', async (req, res) => {
    try {
        const matiere = req.params.matiere;
        const learningPackage = await LearningPackage.findOne({
            where: { packageName: matiere }
        });
        if (!learningPackage) {
            return res.status(404).json({ message: 'Aucun cours trouvé pour cette matière.' });
        }
        const courses = await Course.findAll({
            where: { learning_package_id: learningPackage.id },
            attributes: ['title', 'description'] // Sélectionner à la fois 'title' et 'description'
        });

        res.status(200).json(courses); // Envoyer tous les cours avec titres et descriptions
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des cours par matière.', error: error.message });
    }
});


app.delete('/api/suppression-cours/:courseTitle', async (req, res) => {
    try {
        const courseTitle = req.params.courseTitle;
        const course = await Course.findOne({ where: { title: courseTitle } });
        if (!course) {
            return res.status(404).json({ message: `Cours avec le titre "${courseTitle}" non trouvé.` });
        }
        await course.destroy();
        res.status(200).json({ message: `Cours avec le titre "${courseTitle}" supprimé.` });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du cours.', error: error.message });
    }
});

app.delete('/api/supMatiere/:nomMatiere', async (req, res) => {
    try {
        const nomMatiere = req.params.nomMatiere;
        const matiere = await LearningPackage.findOne({ where: { packageName: nomMatiere } });
        if (!matiere) {
            return res.status(404).json({ message: `Matière avec le nom "${nomMatiere}" non trouvée.` });
        }
        const courses = await Course.findAll({ where: { learning_package_id: matiere.id } });
        await Course.destroy({ where: { learning_package_id: matiere.id } });
        await matiere.destroy();
        res.status(200).json({ message: `Matière avec le nom "${nomMatiere}" et ses cours associés supprimés.` });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de la matière et de ses cours associés.', error: error.message });
    }
});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});