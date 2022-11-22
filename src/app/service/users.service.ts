import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";
import { TokenModel } from "../models/token.model";
import { RegisterModel } from "../models/register.model";

@Injectable({
    providedIn: "root"
  })

  export class UserService {
    constructor(private http: HttpClient) {}
  
    public register(user: RegisterModel): Observable<any> {
      return this.http.post("http://localhost:8080/api/v1/rest/register", user);
    }

    public login(user: UserModel): Observable<TokenModel> {
        return this.http.post<TokenModel>("http://localhost:8080/api/v1/rest/authenticate", user);
      }
  }
