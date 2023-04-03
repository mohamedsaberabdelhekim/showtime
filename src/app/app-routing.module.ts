import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './pages/homescreen/homescreen.component';
import { SearchscreenComponent } from './pages/searchscreen/searchscreen.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

const routes: Routes = [
  {path:'',component:HomescreenComponent},
  {path:'/search',component:SearchscreenComponent},
  {path:'/movie/:id',component:MovieDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
