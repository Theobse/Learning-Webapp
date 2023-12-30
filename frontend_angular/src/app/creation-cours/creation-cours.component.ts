import { Component } from '@angular/core';
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
  nomMatiere: string = '';

  constructor(private router: Router, private coursService: CoursService) { }

  onSubmitCours(): void {
    // Vérification que les champs ne sont pas vides
    if (this.titreCours.trim() === '' || this.descriptionCours.trim() === '' || this.nomMatiere.trim() === '') {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Appel du service pour créer un nouveau cours
    this.coursService.createCours(this.titreCours, this.descriptionCours, this.nomMatiere)
      .subscribe(
        () => {
          alert('Cours créé avec succès !');
          // Réinitialiser les champs après la création
          this.titreCours = '';
          this.descriptionCours = '';
          this.nomMatiere = '';
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
