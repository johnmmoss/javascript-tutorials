import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { ILogRow } from './log-row';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  logs:ILogRow;

  constructor(
    private httpClient:HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get<ILogRow>('api/log.json').subscribe(
      response => {
        this.logs = response
      },
      error => {
        console.log(error);
      }
    )
  }
}
