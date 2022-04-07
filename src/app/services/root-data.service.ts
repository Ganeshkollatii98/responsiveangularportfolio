import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RootDataService {
  data = {
    name: 'Ganesh',
    navBarTitles: {
      home: 'fa fa-home',
      about: 'fa fa-user',
      experience: 'fa fa-briefcase',
      projects: 'fa fa-diagram-project',
      contact: 'fa fa-address-card',
    },
    profiles: [
      '../../../../assets/profiles/linkedin.svg',
      '../../../../assets/profiles/github.svg',
      '../../../../assets/profiles/instagram.svg',
      '../../../../assets/profiles/twitter.svg',
    ],
    about: {
      title: 'About Me',
      content: `
      I'm Ganesh Kollati, a web developer from Andhra Pradesh, INDIA. I study at ITM University Gwalior (M.P)
       as a Graduate student in Bachelors of Computer Science Engineering. I hold 1 year experience as a Software Engineer
       where I design and build apps for devices, big and small. I try to learn a new skill every day. I'm honest, communicable,
       responsible and always ready to work on something new.`,
      personalInfo: {
        Birthday: '8 Nov 1998',
        Age: 23,
        Email: 'ganeshkollatii@gmail.com',
        Degree: 'Bachelor of computer science',
      },
      skills: [
        {
          skillTitle: 'Front End Development',
          skillList: [
            '../../../../assets/skills/javascript.svg',
            '../../../../assets/skills/angular.svg',
            '../../../../assets/skills/react.svg',
            '../../../../assets/skills/redux.svg',
            '../../../../assets/skills/html.svg',
            '../../../../assets/skills/css.svg',
            '../../../../assets/skills/tailwind.svg',
            '../../../../assets/skills/bootstrap.svg',
          ],
        },
        {
          skillTitle: 'Other Tools',
          skillList: [
            '../../../../assets/skills/git.svg',
            '../../../../assets/skills/nodejs.png',
          ],
        },
      ],
    },
  };
  constructor() {}
}
