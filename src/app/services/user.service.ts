import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUser } from "../models";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class UserService {
  apiURL = "https://jsonplaceholder.typicode.com/posts/1";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser> {
    return this.http.get<any>(this.apiURL);
  }
}
