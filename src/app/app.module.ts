import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { HomeComponent } from './components/main/home/home.component';
import { AboutComponent } from './components/main/about/about.component';
import { ContactComponent } from './components/main/contact/contact.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { ExperienceComponent } from './components/main/experience/experience.component';
import { ProjectComponent } from './components/main/projects/project/project.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { FormsModule } from '@angular/forms';


// import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    ExperienceComponent,
    ProjectComponent,
    FooterComponent,
    
    // ProjectComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
