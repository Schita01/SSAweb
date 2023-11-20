import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ServicesComponent} from "./pages/services/services.component";
import {CoursesComponent} from "./pages/courses/courses.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'courses', component: CoursesComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
