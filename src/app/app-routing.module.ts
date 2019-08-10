
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { AuthGuard } from './service/auth-guard/auth.guard';
import { AppMainComponent } from './core/app-main/app-main.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductKitchensComponent } from './modules/product-kitchens/product-kitchens.component';
import { AboutComponent } from './modules/about/about.component';
import { AdvantageComponent } from './modules/advantage/advantage.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ProductOthersComponent } from './modules/product-others/product-others.component';
import { ProductTvunitsComponent } from './modules/product-tvunits/product-tvunits.component';
import { ProductWardrobesComponent } from './modules/product-wardrobes/product-wardrobes.component';

const routes: Routes = [
  {
    path: '', component: AppMainComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'product/kitchen', component: ProductKitchensComponent },
      { path: 'product/others', component: ProductOthersComponent },
      { path: 'product/tvunits', component: ProductTvunitsComponent },
      { path: 'product/wardrobes', component: ProductWardrobesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'advantage', component: AdvantageComponent },
      { path: 'contact', component: ContactComponent },
      // { path: 'tracking/track', component: HomeComponent },
      // { path: 'reports/dashboard', component: DashboardComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent },

    // { path: 'webstore', loadChildren: '../app/web-store/web-store.module#WebStoreModule' },

    /* this is the whild card route '**', it means catch all possible routes which are not covered by your app.
       this route should be always at the end, coz your route parse from top to bottom, if u place this route at the beginning,
       then no matter which route you all, all will be redirected to page not found.
    */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
