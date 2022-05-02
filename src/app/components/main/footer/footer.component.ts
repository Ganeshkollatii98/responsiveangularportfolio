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
  linkedInUrl!:any;
  githubUrl!:any;
  constructor(private rootService: RootDataService) {
    AOS.init();
  }

  ngOnInit(): void {
      this.footerName=this.rootService.data.footer.name;
      this.footerMadeMsg=this.rootService.data.footer.made_msg;
      this.footerImage=this.rootService.data.footer.image;
      this.footerSocialMediaMsg=this.rootService.data.footer.socialMediaTitle;
      this.linkedInUrl=this.rootService.data.getInTouchMediaLinks.linkedIn;
    this.githubUrl=this.rootService.data.getInTouchMediaLinks.github;
  }
}
