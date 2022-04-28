import { Component, OnInit } from '@angular/core';
import { RootDataService } from 'src/app/services/root-data.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectsList: any = [];
  title: string = '';

  constructor(private rootService: RootDataService) {
      AOS.init();
  }
  ngOnInit(): void {
    this.projectsList = this.rootService.data.projects.projectsList;
    this.title = this.rootService.data.projects.title;
  }
}
