import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Stats } from '../app/stats';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private apiUrl =  'https://localhost:5001/api/';  

  constructor(private http: HttpClient) { }


  getSystemStats(): Observable<Stats>  {
    return this.http.get<Stats>(this.apiUrl + "stats");
  }  
}







