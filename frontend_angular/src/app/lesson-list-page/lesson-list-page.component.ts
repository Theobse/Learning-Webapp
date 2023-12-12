import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserSettingsService} from "../user-settings.service";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-lesson-list-page',
  templateUrl: './lesson-list-page.component.html'
})
export class LessonListPageComponent implements OnInit, OnDestroy {
  constructor(private userSettingsService: UserSettingsService, private httpClient : HttpClient) {
    console.log("LessonListPageComponent.constructor()");
    console.log("get lastLessonId:", userSettingsService.lastLessonId);
  }

  ngOnInit(): void {
    console.log("LessonListPageComponent.ngOnInit()");
  }
  ngOnDestroy(): void {
    console.log("LessonListPageComponent.ngOnDestroy()");
  }

  protected readonly onclick = onclick;

  onClick() {
    this.httpClient.get("/api/learning-package").subscribe(res => {
      console.log("test", res)
    })
  }
}
