"use strict";
// course.model.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize"); // Importez la configuration Sequelize
const learningPackage_model_1 = require("./learningPackage.model"); // Importez le modèle de LearningPackage
class Course extends sequelize_1.Model {
}
exports.Course = Course;
Course.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    isAvailable: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Par défaut, le cours est disponible
    },
    learning_package_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: learningPackage_model_1.LearningPackage,
            key: 'id'
        }
    },
    // Ajoutez d'autres colonnes de modèle ici si nécessaire
}, {
    sequelize: sequelize_2.default,
    modelName: 'Course',
    tableName: 'course', // Nom de la table dans la base de données
});
//# sourceMappingURL=course.model.js.map