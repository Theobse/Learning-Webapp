import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LessonSelectService {
  private apiUrl = 'http://localhost:4200/api/learning-package';
  private apiUrl3  = 'http://localhost:4200/api';


  constructor(private http: HttpClient) { }

  getAllLessons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(data => console.log('Données récupérées depuis le backend : ', data)),
      catchError(error => {
        console.error('Erreur lors de la récupération des données : ', error);
        throw error;
      })
    );
  }

  getCoursByMatiere(matiere: string): Observable<any[]> {
    const url = `${this.apiUrl3}/cours-by-matiere1/${matiere}`;
    return this.http.get<any[]>(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

}
