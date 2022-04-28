import { Component, Input, OnInit } from '@angular/core';
import { RootDataService } from 'src/app/services/root-data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  // projectsList:any=[];
  title: string = '';
  selectedIndex: number = 0;
  indecators: boolean = true;
  constructor(private rootService: RootDataService) {}

  @Input() project: any;
  ngOnInit(): void {
    // this.projectsList=this.rootService.data.projects.projectsList;
    // this.title=this.rootService.data.projects.title;
  }
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}
