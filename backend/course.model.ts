// course.model.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize'; // Importez la configuration Sequelize
import { LearningPackage } from './learningPackage.model'; // Importez le modèle de LearningPackage

class Course extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public isAvailable!: boolean; // Ajout de la colonne booléenne
    public learning_package_id!: number; // Clé étrangère

    // Définissez d'autres colonnes de modèle ici si nécessaire
}

Course.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true, // Par défaut, le cours est disponible
        },
        learning_package_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: LearningPackage,
                key: 'id'
            }
        },
        // Ajoutez d'autres colonnes de modèle ici si nécessaire
    },
    {
        sequelize, // Utilisez l'instance Sequelize
        modelName: 'Course', // Nom du modèle
        tableName: 'course', // Nom de la table dans la base de données
    }
);

export { Course }; // Exportez le modèle de cette façon
