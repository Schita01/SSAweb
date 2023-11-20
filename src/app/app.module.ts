import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import {ServicesComponent} from "./pages/services/services.component";
import {SharedModule} from "./pages/shared/shared.module";
import {HomeComponent} from "./pages/home/home.component";
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseCardComponent } from './pages/shared/course-card/course-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ProjectsComponent,
    ServicesComponent,
    HomeComponent,
    CoursesComponent,
    CourseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
