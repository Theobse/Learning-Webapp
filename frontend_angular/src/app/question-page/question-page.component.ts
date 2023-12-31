import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionService } from './question-page.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})

export class QuestionPageComponent {
  public questions: Question[] = [];
  public selectedCourseId: number | null = null;
  public courseList: Course[] = [];

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.questionService.getAllCourse().subscribe(
      (data: Course[]) => {
        this.courseList = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des cours', error);
      }
    );

    // Récupérez l'ID du LearningPackage à partir de la route
    const learningPackageId = this.route.snapshot.paramMap.get('learningPackageId');

    // Vérifiez si learningPackageId n'est pas null avant d'appeler le service
    if (learningPackageId !== null) {
      // Utilisez le service pour récupérer les questions
      this.questionService.getQuestionsByLearningPackage(+learningPackageId).subscribe(
        (data) => {
          this.questions = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération des questions', error);
        }
      );
    }
  }

  returnAccueil() {
    this.router.navigate(['accueil']);
  }

  onCourseSelectionChange(): void {
    // Gérez ici le changement de sélection de cours
    // Vous pouvez charger les questions du cours sélectionné en utilisant this.selectedCourseId
    console.log('Selected Course ID:', this.selectedCourseId);
  }
}

interface Question {
  QuestionID: number;
  Question: string;
  Answer: string;
  // Ajoutez d'autres propriétés de question selon vos besoins
}

interface Course {
  id: number;
  title: string;
  description: string;
  isAvailable: boolean;
  learning_package_id: number;
  createdAt: string;
  updatedAt: string;
  // Ajoutez d'autres propriétés de cours selon vos besoins
}
