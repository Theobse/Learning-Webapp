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

  selectedMatiere: string = '';
  listeMatieres: string[] =[];

  constructor(private router: Router, private matiereService: MatiereService) { }
  ngOnInit(): void {
    this.getLearningPackages();
  }
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
    getLearningPackages(): void {
        // Appel à votre service pour récupérer les packages d'apprentissage depuis votre API
        this.matiereService.getLearningPackages()
            .subscribe(
                (packages: any[]) => {
                    this.listeMatieres = packages.map((pkg) => pkg.packageName);
                },
                (error: HttpErrorResponse) => {
                    console.error('Erreur lors de la récupération des packages d\'apprentissage : ', error);
                }
            );
    }
  onSup()     {
      if (this.selectedMatiere.trim() === '' ) {
          alert('Veuillez remplir tous les champs.');
          return;
      }

      this.matiereService.supprimerMatiere(this.selectedMatiere)
          .subscribe(
              () => {
                  alert('Matière supprimée avec succès !');
                  this.getLearningPackages();
              },
              (error: HttpErrorResponse) => {
                  console.error('Erreur lors de la suppression de la matière : ', error);
                  alert('Erreur lors de la suppression de la matière. Veuillez réessayer.');
              }
          );

  }


  returnAccueil() {
    this.router.navigate(['accueil']);
  }

}
