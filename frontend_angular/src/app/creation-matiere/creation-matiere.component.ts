import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatiereService} from "./matiere.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-creation-matiere',
  templateUrl: './creation-matiere.component.html',
  styleUrls: ['./creation-matiere.component.css']
})
export class CreationMatiereComponent {
  nomMatiere: string = '';
  descriptionMatiere: string = '';

  constructor(private router: Router, private matiereService: MatiereService) { }

  onSubmit(): void {
    // Vérification que les champs ne sont pas vides
    if (this.nomMatiere.trim() === '' || this.descriptionMatiere.trim() === '') {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Appel du service pour créer une nouvelle matière
    this.matiereService.createMatiere(this.nomMatiere, this.descriptionMatiere)
      .subscribe(
        () => {
          alert('Matière créée avec succès !');
          this.nomMatiere = '';
          this.descriptionMatiere = '';
        },
        (error: HttpErrorResponse) => { // Spécifiez le type de l'erreur
          console.error('Erreur lors de la création de la matière : ', error);
          alert('Erreur lors de la création de la matière. Veuillez réessayer.');
        }
      );
  }

  returnAccueil() {
    this.router.navigate(['accueil']);
  }

}
