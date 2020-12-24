import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { FormsModule } from '@angular/forms';
import { ListButtonsComponent } from './components/list-buttons/list-buttons.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { ItemDetailsResolver } from './resolver/item-details.resolver';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ListComponent,
    ItemComponent,
    ItemDetailsComponent,
    ListButtonsComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService, ItemDetailsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
