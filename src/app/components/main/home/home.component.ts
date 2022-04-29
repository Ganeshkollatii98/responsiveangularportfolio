import { Component, OnInit } from '@angular/core';
import { RootDataService } from 'src/app/services/root-data.service';
import * as AOS from 'aos';
import { AsideHelperService } from 'src/app/services/aside/aside-helper.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profiles!:any;
  isSectionOpenWhenToggleClciked:any='';
  constructor(private rootService:RootDataService,private asideHelperService:AsideHelperService) { 
      AOS.init();
  }

  ngOnInit(): void {
    this.profiles=this.rootService.data.profiles;
  }
  ngDoCheck(){
    this.isSectionOpenWhenToggleClciked=this.asideHelperService.sideNavBarStatus;
  }

}
