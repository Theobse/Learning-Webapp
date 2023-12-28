import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ConnectionComponent } from './connection/connection.component';
import {AccueilFormComponent} from "./accueil-form/accueil-form.component";
import { LessonSelectComponent } from './lesson-select/lesson-select.component';


@NgModule({
  declarations: [
    AppComponent,
    LessonListPageComponent,
    AccueilFormComponent,
    ConnectionComponent,
    LessonSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, // <= for supports FormGroup/FormBuilder
  ],
  providers: [],
  bootstrap: [AppComponent]



})
export class AppModule { }
