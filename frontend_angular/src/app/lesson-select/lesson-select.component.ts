import { Component, OnInit } from '@angular/core';
import { LessonSelectService } from "./lesson-select.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-select',
  templateUrl: './lesson-select.component.html',
  styleUrls: ['./lesson-select.component.css']
})
export class LessonSelectComponent implements OnInit {
  lessons: any[] = [];
  selectedLesson: any;
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
  getAvailableCoursesCount(lessonId: number): number {

    return 0;
  }

}
