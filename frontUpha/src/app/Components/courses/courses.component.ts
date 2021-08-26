import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/Services/Courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  form:FormGroup;
  formEdit:FormGroup;
  CoursesId:any
  CoursesData:any=[]

  constructor(private coursesServices:CoursesService,private fb: FormBuilder)
  {
    this.form = this.fb.group({
      name:['', Validators.required],
    })


    this.formEdit =this.fb.group({
      name:[''],
    })
  }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses()
  {
    this.coursesServices.getCourses().subscribe(data=>{
      this.CoursesData = data;
    })
  }

  getCoursesByid(id:number)
  {
    this.coursesServices.getCoursesById(id).subscribe(data=>{
      this.CoursesId= data.id;
      this.formEdit.patchValue({
        name:data.name,
      })
    })
  }

  ClearData()
  {
    this.form.patchValue({
      name:'',
      lastName: '',
      enrollment:''
    })
  }
  postCourses()
  {
    const studentData =
    {
      name:this.form.get('name')?.value,
      lastName: this.form.get('lastName')?.value,
      enrollment:this.form.get('enrollment')?.value
    }

    if(this.form.status == "INVALID"){
      alert("Complete todos los campos")
      return;
    }
    this.coursesServices.postCourses(studentData).subscribe(data=>{
      this.getCourses();
      this.ClearData();
    })
  }

  deleteCourses(id:number)
  {
    this.coursesServices.deleteCourses(id).subscribe(data=>{
      this.getCourses();
    })
  }

  updateCourses(model:any)
  {
    this.coursesServices.putCourses(model.value, this.CoursesId).subscribe(data=>{
      this.getCourses();
    })
  }
}
