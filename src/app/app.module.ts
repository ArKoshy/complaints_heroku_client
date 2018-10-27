//import system Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http'; 
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';                 //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import user defined variables
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { TrackComponent } from './track/track.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubmitComponent } from './submit/submit.component';


//define Routes
const appRoutes:Routes = [
  { path:'home',component:HomeComponent,runGuardsAndResolvers: 'always' },   //load if /home is given in path
  { path:'track', component:TrackComponent,runGuardsAndResolvers: 'always' } , // load if /track is given in the path.
  { path:'submit', component:SubmitComponent,runGuardsAndResolvers: 'always' } , // load if /submit is given in the path.
  { path: '' , redirectTo: '/home',pathMatch:'full'}, //default redirection
  { path: '**' , component:PageNotFoundComponent} //Wild card route to take when non-of the above route exists.
  ];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent, 
    HomeComponent,
    TrackComponent,
    PageNotFoundComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{onSameUrlNavigation:'reload'}), // for routing
    AccordionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
