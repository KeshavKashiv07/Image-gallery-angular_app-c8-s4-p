import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path: "image-view", 
    component: HomeComponent 
  },
  { 
    path: "image-view/:id", 
    component: ImageViewComponent 
  },
  { path: "", 
    redirectTo: "/image-view", 
    pathMatch: "full" 
  },
  { 
    path: "**", 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
