import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ShellComponent } from './core/shell/shell.component';
import { HeaderComponent } from './core/shell/header/header.component';
import { MainComponent } from './core/shell/main/main.component';
import { FooterComponent } from './core/shell/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, CommonModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule, CoreModule],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
