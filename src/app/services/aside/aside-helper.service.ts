import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsideHelperService {
  sideNavBarStatus:any='';
  constructor() { 
      
  }

  handleAsideNavToggleBar(sideNavOpen:any){
    if(sideNavOpen==='')
    {
     this.sideNavBarStatus='open';
    }
    else{
     this.sideNavBarStatus='';
    }
  }
}
