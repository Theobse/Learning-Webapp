import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import { MenuNavBaComponent } from './menu-nav-ba/menu-nav-ba.component';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { LessonDetailPageComponent } from './lesson-detail-page/lesson-detail-page.component';
import { TestPage1Component } from './test-page1/test-page1.component';
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import { NumberDisplayComponent } from './number-display/number-display.component';
import { NumberStepsComponent } from './number-steps/number-steps.component';
import { NumberEditComponent } from './number-edit/number-edit.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    LessonEditFormComponent,
    LessonSearchPageComponent,
    MenuNavBaComponent,
    LessonListPageComponent,
    LessonDetailPageComponent,
    TestPage1Component,
    NumberDisplayComponent,
    NumberStepsComponent,
    NumberEditComponent
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
