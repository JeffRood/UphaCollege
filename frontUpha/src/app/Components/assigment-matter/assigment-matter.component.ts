import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AssigmentMatterService } from 'src/app/Services/AssigmentMatter/assigment-matter.service';
import { CourseService } from 'src/app/Services/Courses/course.service';
import { CoursesService } from 'src/app/Services/Courses/courses.service';
import { SelectionServiceService } from 'src/app/Services/Selection/selection-service.service';
import { TeacherService } from 'src/app/Services/Teachers/teacher.service';

@Component({
  selector: 'app-assigment-matter',
  templateUrl: './assigment-matter.component.html',
  styleUrls: ['./assigment-matter.component.css']
})
export class AssigmentMatterComponent implements OnInit {

  constructor(private selectionService:AssigmentMatterService, private teacherService:TeacherService, private courseService:CoursesService) { }


  TeacherId:any;
  CourseId:any;
  Matters:any = []
  Teachers:any = []

  ngOnInit(): void {
    this.getCourses();
    this.getTeachers();
  }

  postSelectionMatter()
  {
    const selectionData =
    {
      teachersId:this.TeacherId,
      coursesId:this.CourseId
    }

    this.selectionService.postSellectionMatter(selectionData).subscribe(data=>{
      alert(data)
      console.log(data.console.error.text);
    })
  }


  getCourses()
  {
    this.courseService.getCourses().subscribe((data:any)=>{
      this.Matters = data;
    })
  }

  getTeachers()
  {
    this.teacherService.getTeachers().subscribe((data:any)=>{
      this.Teachers = data;
    })
  }

  getCourseId(item:any){

    this.CourseId = item.id;
    this.postSelectionMatter();
  }

  getStudentId(item:any){
    this.TeacherId = item.id;
  }

}
