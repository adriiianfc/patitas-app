import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModalModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { routes } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { LocalStorageService } from "./local-storage.service";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      //BrowserModule,
      RouterModule.forChild(routes), 
      HttpClientModule,
      FormsModule,
      NgbModalModule,
      NgbModule, 
    ],
    exports: [
      RouterModule,CommonModule
    ],
    providers:[
      LocalStorageService
    ]
  })

export class AppModule{}