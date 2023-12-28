import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LessonListPageComponent} from "./lesson-list-page/lesson-list-page.component";
import {AccueilFormComponent} from "./accueil-form/accueil-form.component";
import { ConnectionComponent } from './connection/connection.component';


const routes: Routes = [
  { path: '', redirectTo: 'connection', pathMatch: 'full' },
  { path:'lesson-list', component: LessonListPageComponent },
  { path: 'accueil', component: AccueilFormComponent },
  { path: 'connection', component: ConnectionComponent }


];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

