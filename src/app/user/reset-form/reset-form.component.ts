import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.scss']
})
export class ResetFormComponent implements OnInit {

  resetForm!:FormGroup

  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      pass: ['', [Validators.required]]
    })

  }
  get f(){
    return this.resetForm.controls
  }
  resetSubmit(){
    console.log(this.resetForm.value)
    if(this.resetForm.valid){
      this.router.navigateByUrl("/home")
    }
  }

}
