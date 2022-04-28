import { Component, OnInit } from '@angular/core';
import { RootDataService } from 'src/app/services/root-data.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profiles!:any;
  constructor(private rootService:RootDataService) { 
      AOS.init();
  }

  ngOnInit(): void {
    this.profiles=this.rootService.data.profiles;
  }

}
