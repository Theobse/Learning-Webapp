import { Component, OnInit } from '@angular/core';
import { LessonSelectService } from "./lesson-select.service";
import { Router } from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";
import { Observable, of } from 'rxjs';


interface CourseDetails {
  title: string;
  description: string;
}

@Component({
  selector: 'app-lesson-select',
  templateUrl: './lesson-select.component.html',
  styleUrls: ['./lesson-select.component.css']
})
export class LessonSelectComponent implements OnInit {
  lessons: any[] = [];

  selectedMatiere: string='';
  listeTTCours: CourseDetails[] = [];

  constructor(private router: Router, private lessonSelectService: LessonSelectService) { }


  returnAccueil() {
    this.router.navigate(['accueil']);
  }


  ngOnInit(): void {
    this.getLessons(); // Appel de la méthode pour récupérer les leçons au chargement du composant
  }


  getLessons(): void {
    this.lessonSelectService.getAllLessons()
      .subscribe(
        (data) => {
          this.lessons = data; // Affectation des données reçues à la variable lessons
        },
        (error) => {
          console.error('Erreur lors de la récupération des leçons : ', error);
        }
      );
  }

  doSomething(): void {
    if (!this.selectedMatiere) {
      return;
    }
    this.lessonSelectService.getCoursByMatiere(this.selectedMatiere)
      .subscribe(
        (cours: any[]) => {
          this.listeTTCours = cours.map((course: any) => {
            return { title: course.title, description: course.description };
          });
          console.log('Cours associés à la matière sélectionnée : ', this.listeTTCours);
        },
        (error: any) => {
          console.error('Erreur lors de la récupération des cours pour la matière sélectionnée : ', error);
        }
      );
  }



}

