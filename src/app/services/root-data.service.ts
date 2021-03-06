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
    getInTouchMediaLinks: {
      linkedIn: 'https://www.linkedin.com/in/ganesh-kollati-2b238818b/',
      github: 'https://github.com/GaneshKollatii98',
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
      I'm Ganesh Kollati, a web developer from Andhra Pradesh, INDIA. I Studied at ITM University Gwalior (M.P)
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
    experience: {
      title: 'Experience',
      timelineElements: [
        {
          id: 1,
          company: 'Epam Systems',
          title: 'Software Engineer ',
          location: 'Hyderabad',
          description: `: Worked on two projects 1) Pizza ordering web app and Tech Stack is Frontend:- AngularJS, Bootstrap and Backend:- GraphQL, PostgreSQL, Sequelize. 
            2. Banking application all crud operations Tech Stack is Front End : AngularJS,Bootstrap`,

          date: 'January 2022 - present',
          icon: 'laptop',
          type: 'Work',
        },
        {
          id: 2,
          company: 'Infosys',
          title: 'System Engineer',
          location: 'Hyderabad',
          description:
            ': Worked on front end application Stack :- HTML, css, javascript',
          date: 'November 2020 - December 2021',
          icon: 'laptop',
          type: 'Work',
        },
        {
          id: 3,
          title: 'ITM University',
          location: 'Gwalior, Madya Pradesh',
          degree: 'Bachelors of computer science engineering',
          description: '',
          date: '2016 - 2020 Passed Out',
          icon: 'graduation-cap',

          type: 'University',
        },
        {
          id: 4,
          title: 'Narayana Juniour Collage',
          location: 'Bhimavaram, Andhra Pradesh',
          degree: 'Mathematics and physics,Chemistry',

          description: '',
          date: '2014 - 2016',
          icon: 'school',
          type: 'High School',
        },
        {
          id: 5,
          title: "St Mary's English Medium School",
          location: 'Bhimavaram, Andhra Pradesh',
          degree: 'Schooling',

          description: '',
          date: '2013 - 2014',
          icon: 'school-flag',
          type: 'School',
        },
      ],
    },
    projects: {
      title: 'Projects',
      projectsList: [
        {
          title: 'Pizza Man',
          experienceType: 'Personal Project',
          description:
            'Pizza Man is always open to serve you. Order all your favorite pizzas from the comfort of your home, and we will ensure free delivery for all orders.',
          techStack:'Angular, BootStrap, Nodejs,Express ,Sequlize.',
          sourceCodeURL:
            'https://github.com/Ganeshkollatii98/MyAnatomy-Training-Project/tree/master/Pizza-Man',
          liveURL: '',
          images: [
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/pizzaman/Home.PNG',
              imageAlt: 'Home Page',
            },
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/pizzaman/loginPage.PNG',
              imageAlt: 'Login Page',
            },
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/pizzaman/RigisterPage.PNG',
              imageAlt: 'Registration Page',
            },
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/pizzaman/menu.PNG',
              imageAlt: 'Menu Page',
            },
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/pizzaman/menuFilter.PNG',
              imageAlt: 'Menu Page Filters',
            },
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/pizzaman/cartEmpty.PNG',
              imageAlt: 'Cart Page Empty',
            },
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/pizzaman/cartFilled.PNG',
              imageAlt: 'Cart Page Filled',
            },
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/pizzaman/CheckOutBTN.PNG',
              imageAlt: 'Checkout Page',
            },
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/pizzaman/successPage.PNG',
              imageAlt: 'Success Page',
            },
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/pizzaman/ordersList.PNG',
              imageAlt: 'Orders Page',
            },
            {
              video: {
                type: 'video',
                videoUrl: '../../../../assets/projects/pizzaman/sortVideo.mp4',
                videoAlt: 'Pizza Man Short Video',
              },
            },
          ],
        },
        {
          title: 'Save Your Expenses',
          experienceType: 'Personal Project',
          description:
            'Save your expenses, with the help of this application we can easliy track our daily expenses for every year.',
          techStack:'React,css',
          sourceCodeURL:
            'https://github.com/Ganeshkollatii98/new.reactexpensechart.com',
          liveURL: 'https://saveexpenses.netlify.com',
          images: [
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/expenses/1.PNG',
              imageAlt: 'Home Page',
            },
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/expenses/2.PNG',
              imageAlt: 'Login Page',
            },
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/expenses/3.PNG',
              imageAlt: 'Registration Page',
            },
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/expenses/4.PNG',
              imageAlt: 'Menu Page',
            },
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/expenses/5.PNG',
              imageAlt: 'Menu Page Filters',
            },
            {
              type: 'image',
              imageUrl: '../../../../assets/projects/expenses/6.PNG',
              imageAlt: 'Cart Page Empty',
            },
            {
              video: {
                type: 'video',
                videoUrl:
                  '../../../../assets/projects/expenses/saveexpenses.mp4',
                videoAlt: 'Save Expenses',
              },
            },
          ],
        },
        // Add New Projects here
      ],
    },
    contact: {
      title: 'Coffee With Me.',
      message:
        "I am always excited to work on some awesome projects, message me and let's discuss over coffee.",
    },
    footer: {
      name: 'Ganesh Kollati',
      made_msg: 'Made with ?????? In India',
      socialMediaTitle: 'You can find me every where',
      image: '../../../../assets/foot.jpg',
    },
  };
  constructor() {}
}
