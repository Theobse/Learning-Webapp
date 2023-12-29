import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private apiUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  createMatiere(packageName: string, description: string): Observable<any> {
    const matiereData = {
      packageName,
      description
    };

    return this.http.post<any>(`${this.apiUrl}/Creation`, matiereData).pipe(
      catchError((error) => {
        return throwError(error); // Gérer les erreurs ici si nécessaire
      })
    );
  }
}
