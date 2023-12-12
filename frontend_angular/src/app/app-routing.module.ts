import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LessonListPageComponent} from "./lesson-list-page/lesson-list-page.component";

const routes: Routes = [
  { path:'lesson-list', component: LessonListPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

