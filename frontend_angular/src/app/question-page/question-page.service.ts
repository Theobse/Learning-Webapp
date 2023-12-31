import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private apiUrl = 'http://localhost:4200'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  getQuestionsByCourseID(CourseID: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/QuestionsByCourseID/${CourseID}`);
  }

  getAllCourse(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/cours/`);
  }

}
