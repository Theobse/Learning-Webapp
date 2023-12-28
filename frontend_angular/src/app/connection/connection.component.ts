import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent {
  constructor(private router: Router) {}
  seConnecter() {
    this.router.navigate(['accueil']);
  }
}
