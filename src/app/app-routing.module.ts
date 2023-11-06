import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { NewItemComponent } from './new-item/new-item.component';

const routes: Routes = [
  {path : "home", component: HomeComponent},
  {path : "items", component: ItemsComponent},
  {path : "new-item", component: NewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
