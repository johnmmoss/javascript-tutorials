import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ILogRow } from './log-row';
import { tap, map } from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  logs: ILogRow[];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {

    this.httpClient.get<ILogRow[]>('api/log.json')
      .pipe(
        tap( x => console.log(x)),
        //tap( x => x.message = x.message.substr(0, 10)),
        map( x => this.logs = x))
      .subscribe();
  }
}