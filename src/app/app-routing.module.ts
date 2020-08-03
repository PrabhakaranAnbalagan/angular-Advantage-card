import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { CardComponent } from 'src/app/advantageCard/card.component';
import { SucessComponent } from 'src/app/advantageCard/sucess.component';
import { PageNotFoundComponent } from 'src/app/common/pageNotFound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'success', component: SucessComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'card/:userName', component: CardComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
