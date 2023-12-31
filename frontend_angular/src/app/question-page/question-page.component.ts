import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})

export class QuestionPageComponent {
  constructor(private router: Router){}

  returnAccueil() {
    // @ts-ignore
    this.router.navigate(['accueil']);
  }
}
