import { Sequelize } from 'sequelize';

// Remplacez les valeurs suivantes par les informations de votre base de données PostgreSQL
const sequelize = new Sequelize('LearningFactDb', 'learningDbUser', 'root', {
    host: 'localhost',
    dialect: 'postgres', // Le dialecte PostgreSQL
});

export default sequelize;
