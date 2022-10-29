import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  regForm!: FormGroup;
  username:any;


  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    // this.regForm = this.formBuilder.group({
    //   f_name: ['', [Validators.required, Validators.minLength(3)]],
    //   l_name: ['', [Validators.required, Validators.minLength(3)]],
    //   email: ['', [Validators.required, Validators.email]],
    //   pass: ['', [Validators.required, 
    //     Validators.pattern('((?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&]).{8,30})')]]
  
    // })
    this.username = localStorage.getItem('email')
    console.log(this.username)
  
  }
  get f(){
    return this.regForm.controls

  }
  logout(){
    localStorage.clear()
    this.router.navigateByUrl('login')
  }

  onSubmit(){
    console.log(this.regForm);
  }
}
