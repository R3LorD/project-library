import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CrutcheComponent } from './crutche/crutche.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'favourite', component: FavouriteComponent},
  {path: 'main', component: CrutcheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
