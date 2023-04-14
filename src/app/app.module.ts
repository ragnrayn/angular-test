import { ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { PromoDescriptionComponent } from './components/promo-description/promo-description.component';
import { MealComponent } from './components/meal/meal.component';
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule, Routes } from "@angular/router";
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MealCardComponent,
    PromoDescriptionComponent,
    MealComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

