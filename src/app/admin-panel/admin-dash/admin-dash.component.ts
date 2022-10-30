import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/website/web.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss']
})
export class AdminDashComponent implements OnInit {
  data: any;
  updateForm!: FormGroup
  updateData: any
  email:any
  
  userId!:number

  constructor(private router: Router, private webServ: WebService,
    private formBuilder: FormBuilder
  ) {
  }
  ngOnInit(): void {

    this.email = localStorage.getItem('email')


    this.updateForm = this.formBuilder.group({
      f_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      l_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      username: ['', [Validators.required, Validators.pattern('([a-z0-9_]{1,15})')]],
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      pass: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      role: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    })


    this.webServ.profileService().subscribe((data: any) => {
      // console.log(data)
      this.data = data
      // console.log(this.updateForm.value)
    })

    $('.sidebarCollapse').on('click', function (sidebar) {
      sidebar.preventDefault();
      $('.main-container').toggleClass("sidebar-closed");
      $('.header.navbar').toggleClass('expand-header');
      $('.main-container').toggleClass("sbar-open");
      $('.overlay').toggleClass('show');
      $('html,body').toggleClass('sidebar-noneoverflow');
    });

  }

  get f() {
    return this.updateForm.controls
  }

  autoFill(user: number) {
    this.userId = user
    this.data.map((person:any)=>{
      // console.log(val.id)
      if(person.id==user){
        this.f['f_name'].setValue(person.firstname)
        this.f['l_name'].setValue(person.lastname)
        this.f['username'].setValue(person.username)
        this.f['email'].setValue(person.email)
        this.f['pass'].setValue(person.password)
        this.f['phone'].setValue(person.phone)
        this.f['gender'].setValue(person.gender)
        this.f['role'].setValue(person.role)
      }
    }
    )
  }
  updateDet(){
    if(this.updateForm.valid){
      this.updateData = {
        firstname: this.f['f_name'].value,
        lastname: this.f['l_name'].value,
        username: this.f['username'].value,
        email: this.f['email'].value,
        password: this.f['pass'].value,
        phone: this.f['phone'].value,
        gender: this.f['gender'].value,
        role: this.f['role'].value
      }
      console.log(this.updateData)
      this.webServ.updateService(this.userId,this.updateData).subscribe(res=>{
        alert('Updated Successfully')
        window.location.reload()      
      })
    }else{
      alert("Form is not Valid!!")
    }
    
  }
  deleteDet(user:number) {
    console.log(user)
    this.webServ.deleteService(user).subscribe(res=>{
      alert("User Deleted Successfully!!")
      window.location.reload()
    })

  }
  infoDet(user:any) {
    localStorage.setItem('id', user)
    this.router.navigateByUrl('/admin/profile')
  }
  logout(){
    localStorage.clear()
    this.router.navigateByUrl('/user/login')

  }

  togglefunction(){
    console.log("here")
  }

}
