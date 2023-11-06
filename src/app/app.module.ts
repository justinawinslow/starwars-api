import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { StarWarsPersonComponent } from './star-wars-person/star-wars-person.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PeopleTableComponent } from './people-table/people-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StarWarsPersonComponent,
    HomePageComponent,
    PeopleTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
