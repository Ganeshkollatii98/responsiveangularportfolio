import { Component, OnInit } from '@angular/core';
import { RootDataService } from 'src/app/services/root-data.service';
import * as AOS from 'aos';
import { AsideHelperService } from 'src/app/services/aside/aside-helper.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title:string='';
  message:string='';
  isSectionOpenWhenToggleClciked:any='';
  constructor(private rootService:RootDataService,private asideHelperService:AsideHelperService) {
    AOS.init();
   }

  ngOnInit(): void {
    this.title=this.rootService.data.contact.title;
    this.message=this.rootService.data.contact.message;
  }
  ngDoCheck(){
      this.isSectionOpenWhenToggleClciked=this.asideHelperService.sideNavBarStatus;
  }

}
