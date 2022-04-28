import { Component, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolioPersonal';
  navItemsObject!: any;
  name: string = '';
  isToggleClicked = false;
  skinColor: any;
  skinValue: any;
  colors: any = {
    'color-1': '#ec1839',
    'color-2': '#fa5b0f',
    'color-3': '#37b182',
    'color-4': '#1854b4',
    'color-5': '#f021b2',
  };
  
  themeModeAdd:any;

  // @HostBinding('style.--skin-color')
  constructor(private elementRef: ElementRef) {
    // console.log(this.elementRef.nativeElement.classList.contains('dark'));
    
    this.initialSkinColorSetUp();
    this.inititalThemeSetup()
  }
   
  inititalThemeSetup(){
    // localStorage.getItem('setTheme')
    
    if(localStorage.getItem('setTheme')==='dark'){
      
      this.themeModeAdd=localStorage.getItem('setTheme')
    }
    else{
      this.themeModeAdd=localStorage.getItem('setTheme')

    }
      
  }

  initialSkinColorSetUp() {
    this.skinColor = localStorage.getItem('skin-color');
    if (localStorage.getItem('skin-color') === '#ec1839') {
      this.elementRef.nativeElement.style.setProperty(
        '--skin-color',
        '#ec1839'
      );
    } else {
      this.elementRef.nativeElement.style.setProperty(
        '--skin-color',
        this.skinColor
      );
    }
  }
  // toogle swticher
  setActivityStyle(colorClass: any) {
    /* colors:any={
        'color-1':"#ec1839",
        'color-2':"#fa5b0f",
        'color-3':"#37b182",
        'color-4':"#1854b4",
        'color-5':"#f021b2"
     } */
    for (var [key, value] of Object.entries(this.colors)) {
      if (colorClass === key) {
        this.skinValue = value;
        localStorage.setItem('skin-color', this.skinValue);
        this.skinColor = localStorage.getItem('skin-color');
        this.elementRef.nativeElement.style.setProperty(
          '--skin-color',
          this.skinColor
        );
      }
    }
  }
  handleToggler() {
    if (!this.isToggleClicked) {
      this.isToggleClicked = true;
    } else {
      this.isToggleClicked = false;
    }
  }
  handleToggleModes(element:any)
  {
      const modeIconValue=element.value;
      if(modeIconValue==='fas fa-moon' && localStorage.getItem('setTheme')==='')
      {
          localStorage.setItem('setTheme','dark');
          this.themeModeAdd=localStorage.getItem('setTheme')
      }
      else{
        localStorage.setItem('setTheme','');
        this.themeModeAdd=localStorage.getItem('setTheme')
      }
      
  }
}
