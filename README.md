# Learning-Webapp

Node & react Development 

Project by :
  - Théo Besse : Theobse
  - Alexandre Bernard : Tortoule
  - Jérémy Beugnon : itsj1


Ce projet implique le développement d'une application d'apprentissage. Notre application a été conçue pour offrir à l'utilisateur des cours sur divers sujets ainsi que des questions pour évaluer leurs connaissances.

En ouvrant l'application, on est dirigé vers la page d'accueil offrant cinq actions différentes :
  - Consulter les matières disponibles et les cours qui leur sont associés.
  - Créer ou supprimer une matière avec tous ses cours associés.
  - Créer ou supprimer un cours lié à une matière existante.
  - Accéder à l'interface des questions pour les différentes matières.
  - Consulter les statistiques disponibles

L'interface d'accueil est la suivante : 

![image](https://github.com/Theobse/Learning-Webapp/assets/149503355/016be02a-9964-4091-910f-7371de2df3d5)


Nous allons voir maintenant plus en détails chaque foncionnalitée.

# Consulter les matières disponibles et les cours qui leur sont associés.
Pour consulter les matières disponibles ainsi que les cours qui leur sont associés, l'interface fonctionne comme suit : en sélectionnant une matière, une liste des cours disponibles pour cette matière s'affiche. Ensuite, l'utilisateur peut choisir le cours qu'il souhaite consulter parmi cette liste.

Voici un apercu de l'interface pour cette fonctionnalité :

# Créer ou supprimer une matière avec tous ses cours associés
Pour ajouter ou retirer une matière et tous ses cours associés, notre interface est divisée en deux sections distinctes : une pour l'ajout et une pour la suppression.

L'ajout implique de donner un nom à la nouvelle matière ainsi qu'une brève description.
La suppression se réalise en sélectionnant directement le nom de la matière à retirer.

Voici un aperçu de l'interface pour cette fonctionnalité :

![image](https://github.com/Theobse/Learning-Webapp/assets/149503355/2e0c3be0-106e-410b-870e-d000d324b798)

# Créer ou supprimer un cours lié à une matière existante.

Pour la gestion des cours, notre interface est également segmentée en deux parties distinctes : l'une dédiée à l'ajout et l'autre à la suppression.

Lors de l'ajout d'un cours, l'utilisateur doit renseigner un titre pour le cours ainsi qu'un contenu détaillé. De plus, il est nécessaire de spécifier le nom de la matière à laquelle le cours sera associé.
Pour supprimer un cours, le processus implique d'abord de choisir la matière à partir de laquelle on souhaite supprimer un cours, puis de sélectionner le titre spécifique du cours à retirer.

Voici un aperçu de l'interface pour cette fonctionnalité :

![image](https://github.com/Theobse/Learning-Webapp/assets/149503355/762eb05a-2048-497e-a7fc-43c5ec4b0d22)
![image](https://github.com/Theobse/Learning-Webapp/assets/149503355/914c0d07-a201-42cf-97e7-2bff29b2b46e)

# Consulter les statistiques disponibles
Pour consulter les statistiques disponibles, l'utilisateur n'a pas besoin d'effectuer d'action particulière. Il lui suffit d'étudier les graphiques générés à l'aide de Highcharts sur la page dédiée aux statistiques.

Voici la page des statistiques  :



Après avoir travaillé sur les fonctionnalités antérieures, nous avons tenté de mettre en place une page de connexion. Malheureusement, bien que l'interface de connexion ait été conçue, le développement du backend n'a pas été réalisé, ce qui se traduit par une interface frontend nous ramenant à la page d'accueil sans demande de login ni de mot de passe. À ce jour, cette fonctionnalité est en suspens.


