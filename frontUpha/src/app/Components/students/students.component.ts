import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/Services/Students/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  form:FormGroup;
  formEdit:FormGroup;
  studentId:any
  StudentData:any=[]

  constructor(private studentsServices:StudentService,
              private fb: FormBuilder)
              {
                this.form = this.fb.group({
                  name:['', Validators.required],
                  lastName:['', Validators. required],
                  enrollment:['', Validators.required]
                })


                this.formEdit =this.fb.group({
                  name:[''],
                  lastName:[''],
                  enrollment:['']
                })
              }
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents()
  {
    this.studentsServices.getStudents().subscribe(data=>{
      this.StudentData = data;
    })
  }

  getStudentsByid(id:number)
  {
    this.studentsServices.getStudentsById(id).subscribe(data=>{
      this.studentId= data.id;
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
  postStudents()
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
    this.studentsServices.postStudents(studentData).subscribe(data=>{
      this.getStudents();
    })
  }

  deleteStudent(id:number)
  {
    this.studentsServices.deleteStudents(id).subscribe(data=>{
      this.getStudents();
    })
  }

  updateStudent(model:any)
  {
    console.log(model.value)
    this.studentsServices.putStudents(model.value, this.studentId).subscribe(data=>{
      this.getStudents();
    })
  }
}
