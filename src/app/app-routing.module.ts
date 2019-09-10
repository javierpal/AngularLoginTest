import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }  from './pages/login/login.component';
import { MainComponent }  from './pages/main/main.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: LoginComponent },
  { path: "main", component: MainComponent },
];

export const navigatableComponents = [
  LoginComponent,
  MainComponent
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
