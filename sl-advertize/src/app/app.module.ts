import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './core/category/category.component';
import { PostAdComponent } from './post-ad/post-ad.component';
import { HomeComponent } from './home/home.component';
import {UserProfileComponent } from './user-profile/user-profile.component';
import {SelectPlanComponent } from './select-plan/select-plan.component';
import {SliderComponent} from "./core/slider/slider.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    PostAdComponent,
    UserProfileComponent,
    SelectPlanComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SliderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
