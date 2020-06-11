import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { IUser } from "../models";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  user: IUser;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUserList();
  }

  getUserList(): void {
    this.userService.getUsers().subscribe(
      (resp: IUser) =>
        (this.user =  {
          id: resp["id"],
          userId: resp["userId"],
          title: resp["title"],
          body: resp["body"]
        })
    );
     console.log(this.user);
  }
}
