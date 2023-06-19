import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PlayListComponent } from './components/play-list/play-list.component';
import { MalayalamComponent } from './components/malayalam/malayalam.component';
import { HindiComponent } from './components/hindi/hindi.component';
import { EnglishComponent } from './components/english/english.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path:"search",component:SearchComponent
  },
  {
    path:"add-songs",component:PlayListComponent
  },
  {
    path:"malayalam",component:MalayalamComponent
  },
  {
    path:"hindi",component:HindiComponent
  },
  {
    path:"english",component:EnglishComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
