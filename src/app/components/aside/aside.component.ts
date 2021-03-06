import { Component, OnInit } from '@angular/core';
import { RootDataService } from 'src/app/services/root-data.service';
import { NgModule } from '@angular/core';
import { AsideHelperService } from 'src/app/services/aside/aside-helper.service';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  navItemsObject!:any;
  name:string="";
  isToggleClicked=false;
  skinColor:any;
  skinValue:any;
  isNavActive:any=false;
  selectedItem:any;
  sideNavOpen:any='';
  colors:any={
     'color-1':"#ec1839",
     'color-2':"#fa5b0f",
     'color-3':"#37b182",
     'color-4':"#1854b4",
     'color-5':"#f021b2"
  }
  constructor( private rootService:RootDataService,private asideHelperService:AsideHelperService) { 
    //  localStorage.setItem('skin-color','#ec1839');
     
     
  }
  keepOrder = (a:any, b:any) => {
    return a;
  }
  ngOnInit(): void {
    this.navItemsObject=this.rootService.data.navBarTitles;
    this.name=this.rootService.data.name;
    console.log(this.navItemsObject);
  }
  listClick(event:any, newValue:any) {
    console.log(newValue);
    this.selectedItem = newValue;  // don't forget to update the model here
    // ... do other stuff here ...
   }
  
   handleToggle(){
       this.asideHelperService.handleAsideNavToggleBar(this.sideNavOpen);
       this.sideNavOpen=this.asideHelperService.sideNavBarStatus;   
   }
  // Handle this
  // window.addEventListener("scroll", () => {
  //   if(document.querySelector(".style-switcher").classList.contains ("open"))
  //   {
  //   document.querySelector(".style-switcher").classList.remove("open");
  //   }
  //   })

}
