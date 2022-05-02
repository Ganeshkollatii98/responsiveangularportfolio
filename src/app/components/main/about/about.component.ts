import { Component, OnInit } from '@angular/core';
import { RootDataService } from 'src/app/services/root-data.service';
import * as AOS from 'aos';
import { AsideHelperService } from 'src/app/services/aside/aside-helper.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutContent: string = '';
  aboutTitle: string = '';
  personalInfo!: any;
  skillsList!: any;
  skillTitle!: any;
  isSectionOpenWhenToggleClciked:any='';
  linkedInUrl!:any;
  githubUrl!:any;
  constructor(private rootService: RootDataService,private asideHelperService:AsideHelperService) {
    AOS.init();
  }
  keepOrder(a: any, b: any) {
    return a;
  }
  ngOnInit(): void {
    this.aboutContent = this.rootService.data.about.content;
    this.aboutTitle = this.rootService.data.about.title;
    this.personalInfo = this.rootService.data.about.personalInfo;
    this.skillsList = this.rootService.data.about.skills;
    

  }
  ngDoCheck(){
    this.isSectionOpenWhenToggleClciked=this.asideHelperService.sideNavBarStatus;

  }
}
