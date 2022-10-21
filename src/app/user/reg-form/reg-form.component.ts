import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {

  regForm !: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      f_name :['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      l_name :['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      username :['', [Validators.required, Validators.pattern('([a-z0-9_]{1,15})')]],
      email :['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      pass :['', [Validators.required]],
      repass :['', [Validators.required]],
      phone :['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      
    })
  }

  get f(){
    return this.regForm.controls
  }
  regSubmit(){
    console.log(this.regForm.value)
  }

}
