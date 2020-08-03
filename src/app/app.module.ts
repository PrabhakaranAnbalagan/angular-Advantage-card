import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'
import { HttpClientModule } from '@angular/common/http';
// import { InMemoryDataService } from './service/in-memory-data.service'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './advantageCard/card.component';
import { PageNotFoundComponent } from 'src/app/common/pageNotFound.component';
import { SucessComponent } from 'src/app/advantageCard/sucess.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    PageNotFoundComponent,
    SucessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation : false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
