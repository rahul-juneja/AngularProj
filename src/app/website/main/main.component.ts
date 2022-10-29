import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data: any;
  updateForm!: FormGroup
  updateData: any
  userId!:number

  constructor(private router: Router, private webServ: WebService,
    private formBuilder: FormBuilder
  ) {
  }
  ngOnInit(): void {

    this.updateForm = this.formBuilder.group({
      f_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      l_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      username: ['', [Validators.required, Validators.pattern('([a-z0-9_]{1,15})')]],
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      role: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    })


    this.webServ.profileService().subscribe((data: any) => {
      // console.log(data)
      this.data = data
      // console.log(this.updateForm.value)
    })

  }

  get f() {
    return this.updateForm.controls
  }

  updateDet(userId: number) {
    // console.log(this.data[userId-1])
    this.f['f_name'].setValue(this.data[userId-1].firstname)
    this.f['l_name'].setValue(this.data[userId-1].lastname)
    this.f['username'].setValue(this.data[userId-1].username)
    this.f['email'].setValue(this.data[userId-1].email)
    this.f['phone'].setValue(this.data[userId-1].phone)
    this.f['gender'].setValue(this.data[userId-1].gender)
    this.f['role'].setValue(this.data[userId-1].role)
    this.userId = userId
  }
  submitData(){
    if(this.updateForm.valid){
      this.updateData = {
        firstname: this.f['f_name'].value,
        lastname: this.f['l_name'].value,
        username: this.f['username'].value,
        email: this.f['email'].value,
        phone: this.f['phone'].value,
        gender: this.f['gender'].value,
        role: this.f['role'].value
      }
      console.log(this.updateData)
      this.webServ.updateService(this.userId,this.updateData).subscribe(res=>{
        alert('Updated Successfully')
      })
    }else{
      alert("Form is not Valid!!")
    }
    
  }
  deleteDet() {

  }
  infoDet() {

  }
}
