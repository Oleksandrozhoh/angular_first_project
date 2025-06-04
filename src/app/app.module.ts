import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TaskModule } from "./task/task.module";


@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent], // Declarations are used for components, directives, and pipes that belong to this module
  bootstrap: [AppComponent], // Bootstrap is the root component that Angular creates and inserts into the index.html host web page
  imports: [ // Importing the components that are used in the app (standalone components can be imported directly)
    BrowserModule, // BrowserModule is required for any Angular application
    SharedModule,
    TaskModule
  ],
})

export class AppModule {

}