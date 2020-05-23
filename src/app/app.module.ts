import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportModule } from './material-import/material-import.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

 
import { AppComponent } from './app.component';
import { InvestmentComponent } from './investment/investment.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LearnComponent } from './learn/learn.component';
import { FaqComponent } from './faq/faq.component';
import { ProcessComponent } from './process/process.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { EngagementsComponent } from './engagements/engagements.component';
import { CorporateComponent } from './corporate/corporate.component';
import { LandscapesComponent } from './landscapes/landscapes.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MatAnimatedIconComponent } from './mat-animated-icon/mate-animated-icon.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'process',
    component: ProcessComponent
  },
  {
    path: 'weddings',
    component: WeddingsComponent
  },
  {
    path: 'engagements',
    component: EngagementsComponent
  },
  {
    path: 'corporate',
    component: CorporateComponent
  },
  {
    path: 'landscapes',
    component: LandscapesComponent
  },
  {
    path: 'investment',
    component: InvestmentComponent
  },
  {
    path: 'learn',
    component: LearnComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: NotfoundComponent }
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    InvestmentComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    LearnComponent,
    FaqComponent,
    ProcessComponent,
    WeddingsComponent,
    EngagementsComponent,
    CorporateComponent,
    LandscapesComponent,
    NotfoundComponent,
    MatAnimatedIconComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }