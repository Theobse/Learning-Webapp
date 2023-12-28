import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-form',
  templateUrl: './accueil-form.component.html',
  styleUrls: ['./accueil-form.component.css']
})
export class AccueilFormComponent {
  constructor(private router: Router) {}

  redirectToConnexionPage() {
    this.router.navigate(['connection']);
  }

}
