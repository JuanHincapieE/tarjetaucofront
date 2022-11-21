import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
  })

  export class UserService {
    constructor(private http: HttpClient) {}
  
    register(user: any): Observable<any> {
      return this.http.post("http://localhost:8080/api/v1/rest/register", user);
    }

    login(user: any): Observable<any> {
        return this.http.post("http://localhost:8080/api/authenticate", user);
      }
  }
