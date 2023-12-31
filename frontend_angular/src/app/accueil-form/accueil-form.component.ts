import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-form',
  templateUrl: './accueil-form.component.html',
  styleUrls: ['./accueil-form.component.css']
})

export class AccueilFormComponent  {
  constructor(private router: Router) {}

  redirectToSelectPage() {
    this.router.navigate(['LessonSelect']);
  }
  seDeconnecter() {
    this.router.navigate(['connection']);
  }
  redirectToStatistic(){
    this.router.navigate(['statistique']);
  }
  redirectToCreateCourses(){
    this.router.navigate(['CreationMatiere']);
  }
  redirectToCreateCours(){
    this.router.navigate(['CreationCours']);
  }
  returnAccueil() {
    this.router.navigate(['accueil']);
  }

  redirectToQuestions() {
    this.router.navigate(['QuestionPage'])
  }
}
