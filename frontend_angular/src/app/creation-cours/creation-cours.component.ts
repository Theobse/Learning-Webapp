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

  //menu déroulant matiere
  selectedMatiere: string = '';
  listeMatieres: string[] =[];

  //menu déroulant matiere2
  matiereChoisie: string='';
  listeTTMatieres: string[] =[];

  coursChoisie : string='';
  listeTTCours : string[] =[];

  constructor(private router: Router, private coursService: CoursService) { }

  ngOnInit(): void {
    this.getLearningPackages();
    this.getLearningPackages2();
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

  onDeleteSelectedCourse() {
    if (!this.coursChoisie) {
      return;
    }
    this.coursService.deleteSelectedCourse(this.coursChoisie)
      .subscribe(
        () => {
          alert('Le cours a été supprimé avec succès !');
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de la suppression du cours : ', error);
          alert('Erreur lors de la suppression du cours. Veuillez réessayer.');
        }
      );
  }

  getLearningPackages2() {
    // Appel à votre service pour récupérer les packages d'apprentissage depuis votre API
    this.coursService.getLearningPackages2()
      .subscribe(
        (packages: any[]) => {
          // Récupération des noms des packages d'apprentissage
          this.listeTTMatieres = packages.map((pkg) => pkg.packageName);
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de la récupération des packages d\'apprentissage : ', error);
          // Gérer l'erreur si nécessaire
        }
      );
  }


  onFetchCoursForMatiere(): void {
    if (!this.matiereChoisie) {
      return;
    }
    this.coursService.getCoursByMatiere(this.matiereChoisie)
      .subscribe(
        (coursTitles: string[]) => {
          this.listeTTCours = coursTitles; // Assignez directement les titres des cours à la liste
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de la récupération des cours pour la matière sélectionnée : ', error);
        }
      );
  }







  returnAccueil() {
    this.router.navigate(['accueil']);
  }


}
