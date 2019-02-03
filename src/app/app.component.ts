import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stats } from '../app/stats';
import { StatsService } from '../app/stats.service';
import { Url } from '../app/url';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  st$: Observable<Stats>;    

  constructor(private statsService: StatsService) { }  

  ngOnInit() {
    this.st$ = this.statsService.getSystemStats();
  }
}
