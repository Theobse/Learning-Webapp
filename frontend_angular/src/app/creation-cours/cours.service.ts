import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiUrl = 'http://localhost:4200/api/Coursv2';
  private apiUrl1 = 'http://localhost:4200/api/learning-package';
  private apiUrl2= 'http://localhost:4200/api/learning-package2';
  private apiUrl3= 'http://localhost:4200/api';


  constructor(private http: HttpClient) { }

  createCours(title: string, description: string, learning_package_id : string): Observable<any> {
    const coursData = {
      title,
      description,
      learning_package_id
    };
    return this.http.post<any>(this.apiUrl, coursData).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getLearningPackages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl1).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getLearningPackages2(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl2).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }


  getCoursByMatiere(matiere: string): Observable<any[]> {
    const url = `${this.apiUrl3}/cours-by-matiere/${matiere}`;
    return this.http.get<any[]>(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  deleteSelectedCourse(nomCours: string): Observable<any> {
    const url = `${this.apiUrl3}/suppression-cours/${nomCours}`;

    return this.http.delete(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

}
