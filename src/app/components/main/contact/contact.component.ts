import { Component, OnInit } from '@angular/core';
import { RootDataService } from 'src/app/services/root-data.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title:string='';
  message:string='';

  constructor(private rootService:RootDataService) {
    AOS.init();
   }

  ngOnInit(): void {
    this.title=this.rootService.data.contact.title;
    this.message=this.rootService.data.contact.message;
  }

}
