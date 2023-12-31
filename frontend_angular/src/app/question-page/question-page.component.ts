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
  public courseList: Course[] = [];
  public selectedCourseIdVariable: number | null = null;
  public currentQuestionIndex: number = 0;
  private questionDifficulty: string = ""

  constructor (
    private router: Router,
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
  }

  nextQuestion() {
    // Increment the current question index to move to the next question
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  returnAccueil() {
    this.router.navigate(['accueil']);
  }

  validerCours() {
    const courseID = this.selectedCourseIdVariable;
    this.currentQuestionIndex = 0;

    // Vérifiez si courseID n'est pas null avant d'appeler le service
    if (courseID !== null) {
      // Utilisez le service pour récupérer les questions
      this.questionService.getQuestionsByCourseID(+courseID).subscribe(
        (data) => {
          this.questions = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération des questions', error);
        }
      );
    }
  }


  resetQuestions() {
    // Reset questions to the original list
    this.validerCours();
  }

  selectDifficulty(difficulty: string) {
    this.questionDifficulty = difficulty;
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
