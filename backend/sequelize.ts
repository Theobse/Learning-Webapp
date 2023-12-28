import { Sequelize } from 'sequelize';

// Remplacez les valeurs suivantes par les informations de votre base de données PostgreSQL
const sequelize = new Sequelize('LearningFactDb', 'LearningDbUser', 'root', {
    host: 'localhost',
    dialect: 'postgres', // Le dialecte PostgreSQL
    port: 5432,
});

export default sequelize;
