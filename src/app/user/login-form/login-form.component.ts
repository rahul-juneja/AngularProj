import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm !: FormGroup
  firstname: any
  user_1: any;
  isLogged: boolean = false
  submitted:boolean = false

  constructor(private formBuilder: FormBuilder, private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      pass: ['', [Validators.required]]
    })

  }
  get f() {
    return this.loginForm.controls
  }
  loginSubmit() {
    if (this.loginForm.valid) {

      this.authService.loginService().subscribe((data: any) => {
        data.map((val: { email: any, password: any }) => {
          if (val.email == this.f['email'].value && val.password == this.f['pass'].value) {
            this.isLogged = true
            localStorage.clear()
          }
        })
        if (this.isLogged == true) {
          alert("SuccessFully Logged In!!!")
          localStorage.setItem('email', this.f['email'].value)
          localStorage.setItem('pass', this.f['pass'].value)
          this.router.navigateByUrl('')
        }
        else {
          alert("InCorrect Email or Password!")
        }
      });
    }else{
      this.submitted = true
    }
  }
  // showConfig() {
  //   this.authService.loginService().subscribe((data:any)=> this.user ={
  //         firstname: data.firstname,
  //         lastname:  data.lastname,
  //     });
  // }
  showConfig() {
    this.authService.loginService().subscribe((data: any) => {
      data.map((value: { firstname: any; }) => {
        if (value.firstname == 'rahul') {
          this.user_1 = value
        }
      })
      console.log(this.user_1)
    });

  }
}
