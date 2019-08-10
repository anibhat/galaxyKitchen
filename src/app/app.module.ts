import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { GalleryModule } from '@/modules/gallery-module';

import { AppComponent } from './app.component';
import { AppMainComponent } from './core/app-main/app-main.component';
import { AppContentComponent } from './core/app-content/app-content.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { LeftNavComponent } from './core/left-nav/left-nav.component';
import { HomeComponent } from './modules/home/home.component';
import { AlertComponent } from './core/alert/alert.component';
import { NotificationComponent } from './core/notification/notification.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';

import { AuthService } from './service/auth-service/auth.service';
import { AuthGuardService } from './service/auth-service/auth-guard.service';
import { AlertService } from './service/alert-service/alert.service';
import { NavService } from './service/nav-service/nav.service';
import { LoginService } from './service/login-service/login.service';
import { AuthGuard } from './service/auth-guard/auth.guard';
import { AuthenticationService } from './service/auth-service/authentication.service';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';
import { AdvantageComponent } from './modules/advantage/advantage.component';
import { HomeServiceComponent } from './modules/home/home-service.component';
import { ProductKitchensComponent } from './modules/product-kitchens/product-kitchens.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeBannerComponent } from './modules/home/home-banner.component';
import { ProductOthersComponent } from './modules/product-others/product-others.component';
import { ProductTvunitsComponent } from './modules/product-tvunits/product-tvunits.component';
import { ProductWardrobesComponent } from './modules/product-wardrobes/product-wardrobes.component';
import { RequestCallbackComponent } from './core/request-callback/request-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    HomeComponent,
    NotificationComponent,
    LeftNavComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    AppMainComponent,
    AppContentComponent,
    ContactComponent,
    AboutComponent,
    AdvantageComponent,
    HomeServiceComponent,
    ProductKitchensComponent,
    HomeBannerComponent,
    ProductOthersComponent,
    ProductTvunitsComponent,
    ProductWardrobesComponent,
    RequestCallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    TableModule,
    GalleryModule,
    TooltipModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMBfG_KAED_HUd6eci5U6bGXORfaO0r7s'
    }),
    ModalModule.forRoot(),
  ],
  exports: [
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AlertService,
    NavService,
    LoginService,
    AuthGuard,
    AuthenticationService,
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
