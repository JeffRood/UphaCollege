import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from 'src/app/Services/Teachers/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  form:FormGroup;
  formEdit:FormGroup;
  TeacherId:any
  TeacherData:any=[]

  constructor(private teacherService:TeacherService, private fb: FormBuilder)
  {
    this.form = this.fb.group({
      name:['', Validators.required],
      lastName:['', Validators.required],
      enrollment:['', Validators.required]
    })


    this.formEdit =this.fb.group({
      name:[''],
      lastName:[''],
      enrollment:['']
    })

  }

  ngOnInit(): void {
    this.getTeacher();
  }

  getTeacher()
  {
    this.teacherService.getTeachers().subscribe(data=>{
      this.TeacherData = data;
      console.log(data)
    })
  }

  getTeacherByid(id:number)
  {
    this.teacherService.getTeachersById(id).subscribe(data=>{
      this.TeacherId= data.id;
      this.formEdit.patchValue({
        name:data.name,
        lastName: data.lastName,
        enrollment:data.enrollment
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
  postTeacher()
  {
    const teacherData =
    {
      name:this.form.get('name')?.value,
      lastName: this.form.get('lastName')?.value,
      enrollment:this.form.get('enrollment')?.value
    }
    if(this.form.status == "INVALID"){
      alert("Complete todos los campos")
      return;
    }
    this.teacherService.postTeachers(teacherData).subscribe(data=>{
      this.getTeacher();
      this.ClearData();
    })
  }

  deleteTeacher(id:number)
  {
    this.teacherService.deleteTeachers(id).subscribe(data=>{
      this.getTeacher();
    })
  }

  updateTeacher(model:any)
  {
    console.log(model.value)
    this.teacherService.putTeachers(model.value, this.TeacherId).subscribe(data=>{
      this.getTeacher();
    })
  }


}
