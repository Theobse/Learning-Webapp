// learningPackage.model.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize'; // Importez la configuration Sequelize

class LearningPackage extends Model {
    public id!: number;
    public packageName!: string;
    public description!: string;
    // Définissez d'autres colonnes de modèle ici si nécessaire
}

LearningPackage.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        packageName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        // Ajoutez d'autres colonnes de modèle ici si nécessaire
    },
    {
        sequelize, // Utilisez l'instance Sequelize
        modelName: 'LearningPackage', // Nom du modèle
        tableName: 'LearningPackage', // Nom de la table dans la base de données
    }
);

export { LearningPackage };
