"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize"); // Importez la configuration Sequelize
class Question extends sequelize_1.Model {
}
exports.Question = Question;
Question.init({
    QuestionID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    LearningPackageID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: false,
    },
    Question: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    Answer: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    // Ajoutez d'autres colonnes de modèle ici si nécessaire
}, {
    sequelize: sequelize_2.default,
    modelName: 'Question',
    tableName: 'question', // Nom de la table dans la base de données
});
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
//# sourceMappingURL=question.model.js.map