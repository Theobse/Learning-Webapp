import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {CoursService} from "./cours.service";

@Component({
  selector: 'app-creation-cours',
  templateUrl: './creation-cours.component.html',
  styleUrls: ['./creation-cours.component.css']
})
export class CreationCoursComponent {
  titreCours: string = '';
  descriptionCours: string = '';

  selectedMatiere: string = '';
  listeMatieres: string[] =[];

  constructor(private router: Router, private coursService: CoursService) { }

  ngOnInit(): void {
    this.getLearningPackages(); // Appel à la méthode pour récupérer les packages d'apprentissage au chargement de la page
  }

  getLearningPackages(): void {
    // Appel à votre service pour récupérer les packages d'apprentissage depuis votre API
    this.coursService.getLearningPackages()
      .subscribe(
        (packages: any[]) => {
          // Récupération des noms des packages d'apprentissage
          this.listeMatieres = packages.map((pkg) => pkg.packageName);
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de la récupération des packages d\'apprentissage : ', error);
          // Gérer l'erreur si nécessaire
        }
      );
  }


  onSubmitCours(): void {
    // Vérification que les champs ne sont pas vides
    if (this.titreCours.trim() === '' || this.descriptionCours.trim() === '' || this.selectedMatiere.trim() === '') {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Appel du service pour créer un nouveau cours
    this.coursService.createCours(this.titreCours, this.descriptionCours, this.selectedMatiere)
      .subscribe(
        () => {
          alert('Cours créé avec succès !');
          // Réinitialiser les champs après la création
          this.titreCours = '';
          this.descriptionCours = '';
          this.selectedMatiere = '';
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de la création du cours : ', error);
          alert('Erreur lors de la création du cours. Veuillez réessayer.');
        }
      );
  }


  returnAccueil() {
    this.router.navigate(['accueil']);
  }
}
