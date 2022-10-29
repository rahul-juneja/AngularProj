import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/website/web.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  user:any = localStorage.getItem('id')
  profile:any
  constructor(private webServ: WebService) { }

  ngOnInit(): void {
    this.webServ.profileService().subscribe((data: any) => {
      // console.log(data)
      this.profile = data
      // console.log(this.profile)
      data.map((person:any)=>{
        console.log(person)
        if(person.id == parseInt(this.user)){
          this.profile = person
          console.log(this.profile)
        }
      })
      // console.log(this.updateForm.value)
    })
    
    
    // this.webServ.profileService().subscribe((data: any) => {
    //   data.map((person:any)=>{
    //     if(person.id==parseInt(this.user)){
    //       this.profile = person
    //     }))

  }

}
