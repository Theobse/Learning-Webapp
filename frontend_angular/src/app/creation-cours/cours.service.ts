import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiUrl = 'http://localhost:4200/api'; // Remplacez par votre URL backend

  constructor(private http: HttpClient) { }

  createCours(title: string, description: string, learning_package_id : string): Observable<any> {
    const coursData = {
      title,
      description,
      learning_package_id
    };
    return this.http.post<any>(`${this.apiUrl}/CreationCours`, coursData).pipe(
      catchError((error) => {
        return throwError(error); // Gérer les erreurs ici si nécessaire
      })
    );
  }
}
