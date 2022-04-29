import { Component, OnInit } from '@angular/core';
import { RootDataService } from 'src/app/services/root-data.service';
import * as AOS from 'aos';
import { AsideHelperService } from 'src/app/services/aside/aside-helper.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  title:string="";
  timeLineElements!:any;
  isSectionOpenWhenToggleClciked:any='';
  constructor(private rootService:RootDataService,private asideHelperService:AsideHelperService) {
     AOS.init();
   }

  ngOnInit(): void {
    this.title=this.rootService.data.experience.title;
    this.timeLineElements=this.rootService.data.experience.timelineElements;
  }
  ngDoCheck(){
    this.isSectionOpenWhenToggleClciked=this.asideHelperService.sideNavBarStatus;
  }

}
