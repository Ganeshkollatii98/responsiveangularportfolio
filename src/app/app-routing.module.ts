import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/main/about/about.component';
import { ContactComponent } from './components/main/contact/contact.component';
import { ExperienceComponent } from './components/main/experience/experience.component';
import { HomeComponent } from './components/main/home/home.component';
import { ProjectsComponent } from './components/main/projects/projects.component';

const routes: Routes = [
   {path:"",component:HomeComponent},
   {path:"home",component:HomeComponent},
   {path:"about",component:AboutComponent},
   {path:"experience",component:ExperienceComponent},
   {path:"projects",component:ProjectsComponent},
   {path:"contact",component:ContactComponent}
   
   

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
