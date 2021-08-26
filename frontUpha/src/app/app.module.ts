import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { StudentsComponent } from './Components/students/students.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { CardComponent } from './Components/card/card.component';
import { SelectionMatterComponent } from './Components/selection-matter/selection-matter.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { TeachersComponent } from './Components/teachers/teachers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AssigmentMatterComponent } from './Components/assigment-matter/assigment-matter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    NavBarComponent,
    CardComponent,
    SelectionMatterComponent,
    CoursesComponent,
    TeachersComponent,
    AssigmentMatterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
