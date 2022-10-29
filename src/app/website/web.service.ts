import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  
  url = "http://localhost:3000/signup"

  constructor(private http: HttpClient) { }

  profileService() {
    return this.http.get<any>(this.url)
  }
  updateService(userId:number, data:any){
    // console.log(this.url+"/"+userId)
    return this.http.put(this.url+"/"+userId,data)
    
  }
  
  deleteService(userId:number){
    this.url = this.url + "/" + userId
    return this.http.delete(this.url)
    
  }
}
