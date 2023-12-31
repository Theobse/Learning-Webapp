import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LessonListPageComponent} from "./lesson-list-page/lesson-list-page.component";
import {AccueilFormComponent} from "./accueil-form/accueil-form.component";
import { ConnectionComponent } from './connection/connection.component';
import { LessonSelectComponent } from './lesson-select/lesson-select.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { CreationCoursComponent } from './creation-cours/creation-cours.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { CreationMatiereComponent } from './creation-matiere/creation-matiere.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { QuestionPageComponent } from "./question-page/question-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path:'lesson-list', component: LessonListPageComponent },
  { path: 'accueil', component: AccueilFormComponent },
  { path: 'connection', component: ConnectionComponent },
  { path: 'LessonSelect', component: LessonSelectComponent },
  { path: 'statistique', component: StatistiqueComponent },
  { path: 'CreationCours', component: CreationCoursComponent },
  { path: 'CreationMatiere', component: CreationMatiereComponent },
  { path: 'grid', component: AgGridComponent },
  { path: 'QuestionPage', component: QuestionPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    AgGridModule,
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

