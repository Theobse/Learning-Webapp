import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent {
  constructor(private router: Router) {}
  returnAccueil() {
    this.router.navigate(['accueil']);
  }
}
