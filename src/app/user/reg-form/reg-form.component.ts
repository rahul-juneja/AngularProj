import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {

  regForm !: FormGroup;
  confirm: boolean = false;
  submitted = false;
  data:any;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      f_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      l_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      username: ['', [Validators.required, Validators.pattern('([a-z0-9_]{1,15})')]],
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      pass: ['', [Validators.required, Validators.pattern('((?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&]).{8,30})')]],
      repass: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      role: ['', [Validators.required]],
      gender: ['', [Validators.required]],


    })
  }

  get f() {
    return this.regForm.controls
  }
  confirmPass() {
    if (this.regForm.controls['pass'].value === this.regForm.controls['repass'].value) {
      this.confirm = true;
    }
    else {
      this.confirm = false;
      console.log('Here');
    } 
  }

  regSubmit() {
    this.submitted = true
    console.log(this.regForm.value)
    if(this.regForm.valid){
      this.data = {
        firstname: this.f['f_name'].value,
        lastname: this.f['l_name'].value,
        username: this.f['username'].value,
        email: this.f['email'].value,
        password: this.f['pass'].value,
        phone: this.f['phone'].value,
        gender: this.f['gender'].value,
        role: this.f['role'].value
      }
      this.authService.regService(this.data).subscribe(res=>{
        alert('Updated Successfully!!!')
        localStorage.setItem('email',this.data.email)
        localStorage.setItem('pass',this.data.password)
        this.regForm.reset()
        this.router.navigateByUrl('')

      })
      
    }

  }

}
