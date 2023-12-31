import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize';
import { Course } from './course.model'; // Importez le modèle Course


class Question extends Model {
    public QuestionID!: number;
    public CourseID!: number;
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
        CourseID: {
            type: DataTypes.INTEGER,
            primaryKey: false,
            references: {
                model: Course, // Le modèle de la table à laquelle vous faites référence
                key: 'id', // La clé primaire de la table à laquelle vous faites référence
            },
        },
        Question: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        Answer: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        Easy: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Medium: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Hard: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        // Ajoutez d'autres colonnes de modèle ici si nécessaire
    },
    {
        sequelize, // Utilisez l'instance Sequelize
        modelName: 'Question', // Nom du modèle
        tableName: 'question', // Nom de la table dans la base de données
    }
);

export { Question };

