import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninModalComponent } from './shared/signin-modal/signin-modal.component';
import { SigninComponent } from './shared/signin/signin.component';


const routes: Routes = [
  { path:'signin',component:SigninComponent},
  {path:'signmodal',component:SigninModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
