import { Component, OnInit } from '@angular/core';
import { RootDataService } from 'src/app/services/root-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title:string='';
  message:string='';

  constructor(private rootService:RootDataService) { }

  ngOnInit(): void {
    this.title=this.rootService.data.contact.title;
    this.message=this.rootService.data.contact.message;
  }

}
