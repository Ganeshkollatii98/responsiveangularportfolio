import { Component, OnInit } from '@angular/core';
import { RootDataService } from 'src/app/services/root-data.service';
import * as AOS from 'aos';
import { AsideHelperService } from 'src/app/services/aside/aside-helper.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectsList: any = [];
  title: string = '';
  isSectionOpenWhenToggleClciked:any='';
  constructor(private rootService: RootDataService,private asideHelperService:AsideHelperService) {
      AOS.init();
  }
  ngOnInit(): void {
    this.projectsList = this.rootService.data.projects.projectsList;
    this.title = this.rootService.data.projects.title;
  }
  ngDoCheck(){
    this.isSectionOpenWhenToggleClciked=this.asideHelperService.sideNavBarStatus;
  }
}
