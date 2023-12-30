import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HightchartService {
  private apiUrl = 'http://localhost:4200/api/charts';

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(data => console.log('Données récupérées depuis le backend : ', data)),
      catchError(error => {
        console.error('Erreur lors de la récupération des données : ', error);
        throw error;
      })
    );
  }
}
