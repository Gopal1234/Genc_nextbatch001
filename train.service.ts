import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Train } from '../models/train';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  private baseUrl = 'http://localhost:8080/api/train';

  constructor(private http: HttpClient) { }
  createTrain(train: Train): Observable<Train> {
    return this.http.post<Train>(`${this.baseUrl}/create`, train);
  }

  getAllTrains(): Observable<Train[]> {
    return this.http.get<Train[]>(`${this.baseUrl}/view`);
  }

  getTrainById(tno: number): Observable<Train> {
    return this.http.get<Train>(`${this.baseUrl}/view/by/${tno}`);
  }

  searchByRoute(route: string): Observable<Train[]> {
    return this.http.get<Train[]>(`${this.baseUrl}/search/by/routes?p1=${route}`);
  }

  updateTrain(tno: number, train: Train): Observable<any> {
    return this.http.put(`${this.baseUrl}/edit/${tno}`, train, { responseType: 'text' });
  }

  deleteTrain(tno: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove/${tno}`);
  }




}
