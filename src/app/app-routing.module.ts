import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandardComponent } from  './standard/standard.component';

const routes: Routes = [
  { path: '', redirectTo: 'standard', pathMatch: 'full' }, //default route
  { path: 'standard', component: StandardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
