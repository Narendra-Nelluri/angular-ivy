import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserService } from "./services/user.service";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, UserListComponent],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {}
