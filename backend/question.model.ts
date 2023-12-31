import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize'; // Importez la configuration Sequelize

class Question extends Model {
    public QuestionID!: number;
    public LearningPackageID!: number;
    public Question!: string;
    public Answer!: string;

    // Définissez d'autres colonnes de modèle ici si nécessaire
}

Question.init(
    {
        QuestionID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        LearningPackageID: {
            type: DataTypes.INTEGER,
            primaryKey: false,
        },
        Question: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        Answer: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        // Ajoutez d'autres colonnes de modèle ici si nécessaire
    },
    {
        sequelize, // Utilisez l'instance Sequelize
        modelName: 'Question', // Nom du modèle
        tableName: 'question', // Nom de la table dans la base de données
    }
);

export { Question }; // Exportez le modèle de cette façon

/*
const express = require('express');
const app = express();

// Endpoint pour récupérer une question par ID
app.get('/api/questions/:id', (req, res) => {
    const questionId = req.params.id;
    // Récupérez la question depuis la base de données en utilisant l'ID
    // Ensuite, renvoyez la question au format JSON
    res.json({ question: 'Quelle est la capitale de la France ?', id: questionId });
});
 */

