import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private apiUrl = 'http://localhost:4200/api';
  private apiUrl1 = 'http://localhost:4200/api/learning-package';

  constructor(private http: HttpClient) { }
  getLearningPackages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl1).pipe(
        catchError((error) => {
          return throwError(error); // Gérer les erreurs ici si nécessaire
        })
    );
  }
  supprimerMatiere(packageName: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/supMatiere/${packageName}`).pipe(
        catchError((error) => {
          return throwError(error);
        })
    );
  }
  createMatiere(packageName: string, description: string): Observable<any> {
    const matiereData = {
      packageName,
      description
    };

    return this.http.post<any>(`${this.apiUrl}/CreationMatiere`, matiereData).pipe(
      catchError((error) => {
        return throwError(error); // Gérer les erreurs ici si nécessaire
      })
    );
  }
}
