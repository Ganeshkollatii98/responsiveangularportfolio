import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { RootDataService } from 'src/app/services/root-data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footerName: any;
  footerMadeMsg: any;
  footerSocialMediaMsg:any;
  footerImage:any;
  constructor(private rootDateSerivce: RootDataService) {
    AOS.init();
  }

  ngOnInit(): void {
      this.footerName=this.rootDateSerivce.data.footer.name;
      this.footerMadeMsg=this.rootDateSerivce.data.footer.made_msg;
      this.footerImage=this.rootDateSerivce.data.footer.image;
      this.footerSocialMediaMsg=this.rootDateSerivce.data.footer.socialMediaTitle;
  }
}
