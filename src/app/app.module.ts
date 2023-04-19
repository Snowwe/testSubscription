import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TariffItemComponent } from './tariff-item/tariff-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, TariffItemComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
