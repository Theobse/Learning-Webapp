"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Remplacez les valeurs suivantes par les informations de votre base de données PostgreSQL
const sequelize = new sequelize_1.Sequelize('LearningFactDb', 'learningDbUser', 'root', {
    host: 'localhost',
    dialect: 'postgres', // Le dialecte PostgreSQL
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map