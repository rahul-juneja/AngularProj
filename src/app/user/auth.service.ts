import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:3000/signup"

  constructor(private http: HttpClient) { }

  loginService() {
    return this.http.get<any>(this.url)
  }
  regService(data: object) {
    return this.http.post<any>(this.url, data).pipe(map((res: any) => {
      return res;
    }))
  }

}
