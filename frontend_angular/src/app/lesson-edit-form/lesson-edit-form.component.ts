import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserSettingsService} from "../user-settings.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

class LessonPackage {
  title: string = '';
  description: string = '';
  category: string = '';
  level: number = 1;
  prerequisite: string[] = [];
  tags: string[] = [];
  copyright: string = '';

}

@Component({
  selector: 'app-lesson-edit-form',
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.css']
})


export class LessonEditFormComponent {
  lessonForm: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.lessonForm = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: [''],
      level: [''],
      prerequisite: [''],
      tags: [''],
      copyright: ['']
    });
  }

  onSubmit() {
    if (this.lessonForm.valid) {
      const formData = this.lessonForm.value;
      console.log('Form data submitted:', formData);
    } else {
      console.log('Form is invalid. Please check the required fields.');
    }
  }




}


