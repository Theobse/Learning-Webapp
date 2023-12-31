import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private apiUrl = 'http://localhost:3000'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  getQuestionsByLearningPackage(learningPackageId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/QuestionsByLearningPackage/${learningPackageId}`);
  }
}
