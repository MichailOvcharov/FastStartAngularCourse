import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./modules/core/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule)
  },
  { path: '', pathMatch: 'full', redirectTo: '/courses' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
