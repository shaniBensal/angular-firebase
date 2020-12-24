import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ItemDetailsResolver } from './resolver/item-details.resolver';
import { ApiService } from './services/api.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainPageComponent },
  { path: 'item/:id' , pathMatch: 'full', component: ItemDetailsComponent, resolve: {item: ItemDetailsResolver} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ApiService]
})
export class AppRoutingModule { }
