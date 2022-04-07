import { Component, OnInit } from '@angular/core';
import { RootDataService } from 'src/app/services/root-data.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  navItemsObject!:any;
  name:string="";
  constructor( private rootService:RootDataService) { 
     
  }
  keepOrder = (a:any, b:any) => {
    return a;
  }
  ngOnInit(): void {
    this.navItemsObject=this.rootService.data.navBarTitles;
    this.name=this.rootService.data.name;
  }
  

}
