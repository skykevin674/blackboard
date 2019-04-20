import { Component, OnInit } from "@angular/core";
import { Api } from '../service/api';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})

export class MainComponent implements OnInit {

  constructor(private api: Api) {

  }

  ngOnInit() {
    this.api.test().subscribe();
  }
}
