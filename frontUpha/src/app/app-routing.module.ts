import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssigmentMatterComponent } from './Components/assigment-matter/assigment-matter.component';
import { CoursesComponent } from './Components/courses/courses.component';
import {HomeComponent} from './Components/home/home.component'
import { StudentsComponent } from './Components/students/students.component';
import { TeachersComponent } from './Components/teachers/teachers.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'Students',
    component:StudentsComponent
  },
  {
    path:'Teacher',
    component:TeachersComponent
  },
  {
    path:'Course',
    component:CoursesComponent
  },
  {
    path:'Assigment',
    component:AssigmentMatterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
