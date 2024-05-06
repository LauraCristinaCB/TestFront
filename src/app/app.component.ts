import { Component, OnInit } from '@angular/core';
import { DataService } from './services/Data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      console.log(response)
      this.title = response;
    });
  }
}
