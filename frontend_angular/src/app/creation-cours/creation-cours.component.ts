import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-creation-cours',
  templateUrl: './creation-cours.component.html',
  styleUrls: ['./creation-cours.component.css']
})
export class CreationCoursComponent {
  constructor(private router: Router) {}

  returnAccueil() {
    this.router.navigate(['accueil']);
  }
}
