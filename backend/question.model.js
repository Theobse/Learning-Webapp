"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
const course_model_1 = require("./course.model"); // Importez le modèle Course
class Question extends sequelize_1.Model {
}
exports.Question = Question;
Question.init({
    QuestionID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CourseID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: false,
        references: {
            model: course_model_1.Course,
            key: 'id', // La clé primaire de la table à laquelle vous faites référence
        },
    },
    Question: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    Answer: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    Easy: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    Medium: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    Hard: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    // Ajoutez d'autres colonnes de modèle ici si nécessaire
}, {
    sequelize: sequelize_2.default,
    modelName: 'Question',
    tableName: 'question', // Nom de la table dans la base de données
});
//# sourceMappingURL=question.model.js.map