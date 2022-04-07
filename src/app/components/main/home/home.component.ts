import { Component, OnInit } from '@angular/core';
import { RootDataService } from 'src/app/services/root-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profiles!:any;
  constructor(private rootService:RootDataService) { }

  ngOnInit(): void {
    this.profiles=this.rootService.data.profiles;
  }

}
