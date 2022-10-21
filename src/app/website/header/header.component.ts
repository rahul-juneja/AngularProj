import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  regForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      f_name: ['', [Validators.required, Validators.minLength(3)]],
      l_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, 
        Validators.pattern('((?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&]).{8,30})')]]
  
    })
  
  
  }
  get f(){
    return this.regForm.controls
  }


  onSubmit(){
    console.log(this.regForm);
  }
}
