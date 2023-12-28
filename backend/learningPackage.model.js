"use strict";
// learningPackage.model.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearningPackage = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize"); // Importez la configuration Sequelize
class LearningPackage extends sequelize_1.Model {
}
exports.LearningPackage = LearningPackage;
LearningPackage.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    packageName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    // Ajoutez d'autres colonnes de modèle ici si nécessaire
}, {
    sequelize: sequelize_2.default,
    modelName: 'LearningPackage',
    tableName: 'LearningPackage', // Nom de la table dans la base de données
});
//# sourceMappingURL=learningPackage.model.js.map