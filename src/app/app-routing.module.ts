import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import{AuthenticationComponent} from './authentication/authentication.component'


const routes: Routes = [
  { path: 'display', component: DisplayComponent },
  { path: 'form', component: FormComponent},
  { path: '', component: AuthenticationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
