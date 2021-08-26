import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/Services/Courses/courses.service';
import { SelectionServiceService } from 'src/app/Services/Selection/selection-service.service';
import { StudentService } from 'src/app/Services/Students/student.service';

@Component({
  selector: 'app-selection-matter',
  templateUrl: './selection-matter.component.html',
  styleUrls: ['./selection-matter.component.css']
})
export class SelectionMatterComponent implements OnInit {

  constructor(private _selectionServices:SelectionServiceService,
              private _coursesService:CoursesService,
              private _studentService:StudentService) { }
  Matters:any = []
  Students:any = []
  StudentId:any;
  CourseId:any;
  SelectedCourses:any =[]
  ngOnInit(): void {
    this.getCourses();
    this.getStudents();
  }

  postSelectionMatter()
  {
    const selectionData =
    {
      StudentId:this.StudentId,
      CoursesId:this.CourseId
    }

    if(selectionData.StudentId != null)
    {
      this._selectionServices.SaveSelection(selectionData).subscribe(data=>{
        alert(data.message)
        console.log(data.console.error.text);
      })
    }
    else
    {
      alert("Seleccione un estudiante")
    }
  }


  getSelectionMatter()
  {
    this._selectionServices.GetSelection(this.StudentId).subscribe((data:any)=>{
      this.SelectedCourses = data;
    })
  }

  getCourses()
  {
    this._coursesService.getCourses().subscribe((data:any)=>{
      this.Matters = data;
    })
  }

  getStudents()
  {
    this._studentService.getStudents().subscribe((data:any)=>{
      this.Students = data;
    })
  }



  getCourseId(item:any){

    this.CourseId = item.id;
    this.postSelectionMatter();
  }

  getStudentId(item:any){
    this.StudentId = item.id;
  }


}
